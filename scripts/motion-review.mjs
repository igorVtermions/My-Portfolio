import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const phase = process.argv[2] === "before" ? "before" : "after";
const port = process.argv[3] || "3000";
const directory = `docs/qa/motion-${phase}`;
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const results = [];
for (const width of [1440, 390]) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: "no-preference", recordVideo: { dir: directory, size: { width, height: 900 } } });
  const page = await context.newPage();
  await page.addInitScript(() => {
    window.reviewMetrics = { lcp: 0, cls: 0 };
    new PerformanceObserver(list => { for (const entry of list.getEntries()) window.reviewMetrics.lcp = entry.startTime; }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver(list => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.reviewMetrics.cls += entry.value; }).observe({ type: "layout-shift", buffered: true });
  });
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "Explorar projetos", exact: true }).hover();
  await page.waitForTimeout(700);
  await page.mouse.move(1, 1);
  await page.screenshot({ path: `${directory}/hero-${width}.png` });
  for (const id of ["sobre", "stack", "projetos", "contatos"]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(850);
    await page.screenshot({ path: `${directory}/${id}-${width}.png` });
  }
  const metrics = await page.evaluate(() => ({ ...window.reviewMetrics, javascriptBytes: performance.getEntriesByType("resource").filter(entry => entry.initiatorType === "script").reduce((sum, entry) => sum + entry.encodedBodySize, 0) }));
  results.push({ width, ...metrics });
  const video = page.video();
  await context.close();
  if (video) await video.saveAs(`${directory}/navigation-${width}.webm`);
}
await writeFile(`${directory}/metrics.json`, JSON.stringify({ phase, environment: "Edge headless, localhost, sem throttling, movimento normal", results }, null, 2));
await browser.close();
console.log(directory);

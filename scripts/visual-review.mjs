import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const directory = "docs/qa";
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ reducedMotion: "reduce" });
const metrics = [];
await page.addInitScript(() => {
  window.reviewMetrics = { lcp: 0, cls: 0 };
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) window.reviewMetrics.lcp = entry.startTime;
  }).observe({ type: "largest-contentful-paint", buffered: true });
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) window.reviewMetrics.cls += entry.value;
    }
  }).observe({ type: "layout-shift", buffered: true });
});
for (const width of [320, 360, 390, 768, 1024, 1440]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
  await page.screenshot({ path: `${directory}/home-${width}.png`, fullPage: true });
  metrics.push({ width, ...await page.evaluate(() => window.reviewMetrics) });
}
for (const route of ["projetos", "projetos/escoply", "projetos/magicos-da-limpeza", "experiencia/thux-mathux", "sobre", "contato"]) {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`http://127.0.0.1:3000/${route}`, { waitUntil: "networkidle" });
    await page.screenshot({ path: `${directory}/${route.replaceAll("/", "-")}-${width}.png`, fullPage: true });
  }
}
await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://127.0.0.1:3000/");
await page.getByRole("button", { name: "Abrir menu" }).click();
await page.screenshot({ path: `${directory}/menu-390.png` });
await writeFile(`${directory}/lab-metrics.json`, JSON.stringify({ environment: "Windows, Edge headless, Next production, localhost, sem throttling, reduced motion", metrics }, null, 2));
await browser.close();
console.log(`Capturas e métricas locais gravadas em ${directory}.`);

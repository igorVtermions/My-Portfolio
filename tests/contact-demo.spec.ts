import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("autoplay loops after 30 seconds with reduced motion", async ({
  page,
}) => {
  test.setTimeout(60000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const demo = page.locator(".contact-demo");
  await demo.scrollIntoViewIfNeeded();
  await expect(demo).toHaveAttribute("data-phase", "typing");
  await expect(demo).toHaveAttribute("data-running", "true");
  await expect(page.locator(".contact-skip")).toHaveCount(0);
  await expect(page.locator(".contact-demo-controls p")).toHaveCount(0);
  await expect(demo).toHaveAttribute("data-phase", "building", {
    timeout: 15000,
  });
  await expect(demo).toHaveAttribute("data-phase", "complete", {
    timeout: 10000,
  });
  await expect(demo.getByRole("link")).toHaveAttribute("href", "/contato");
  await expect(demo).toHaveAttribute("data-phase", "typing", {
    timeout: 15000,
  });
  expect(errors).toEqual([]);
});

test("Run advances and form engagement pauses without losing data", async ({
  page,
}) => {
  await page.goto("/");
  const demo = page.locator(".contact-demo");
  await demo.scrollIntoViewIfNeeded();
  await page.locator(".demo-run").click();
  await expect(demo).toHaveAttribute("data-phase", "building");
  await page.locator('input[name="name"]').fill("Visitor");
  await expect(demo).toHaveAttribute("data-running", "false");
  await page.locator("#contatos-title").click();
  await demo.scrollIntoViewIfNeeded();
  await expect(demo).toHaveAttribute("data-phase", "complete", {
    timeout: 10000,
  });
  await expect(page.locator('input[name="name"]')).toHaveValue("Visitor");
  await expect(page.locator(".contact-demo-controls")).toHaveCount(0);
  await demo.hover();
  await expect(demo).toHaveAttribute("data-running", "false");
  await page.mouse.move(0, 0);
  await expect(demo).toHaveAttribute("data-running", "true");
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    (await new AxeBuilder({ page }).include("#contatos").analyze()).violations,
  ).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("no JavaScript preserves preview and contact link", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator(".demo-signature")).toBeVisible();
  await expect(page.locator(".contact-demo").getByRole("link")).toHaveAttribute(
    "href",
    "/contato",
  );
  await expect(page.locator(".contact-demo").getByRole("button")).toHaveCount(
    0,
  );
  await context.close();
});

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("páginas e menu sem violações automáticas WCAG A/AA", async ({ page }) => {
  for (const route of [
    "/",
    "/projetos",
    "/projetos/escoply",
    "/projetos/magicos-da-limpeza",
    "/experiencia/thux-mathux",
    "/sobre",
    "/contato",
  ]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations, route).toEqual([]);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Abrir menu" }).click();
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("menu em tela baixa e reflow com ampliação de 200%", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 400 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.keyboard.press("Shift+Tab");
  expect(
    await page
      .getByRole("dialog")
      .evaluate((dialog) => dialog.contains(document.activeElement)),
  ).toBe(true);
  const email = page
    .getByRole("dialog")
    .getByRole("link", { name: "igorviniciusf10@gmail.com" });
  await email.scrollIntoViewIfNeeded();
  await expect(email).toBeInViewport();
  await page.keyboard.press("Escape");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate(() => {
    document.documentElement.style.zoom = "2";
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(page.getByRole("heading", { name: /IGOR/ })).toBeVisible();
});

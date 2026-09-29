import { test, expect } from "@playwright/test";

test("âncora percorre posições intermediárias e mantém URL e foco", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Stack", exact: true })
    .click();
  await expect(page).toHaveURL(/#stack$/);
  const intermediate = await page.evaluate(() => ({
    y: scrollY,
    target:
      scrollY +
      document.getElementById("stack")!.getBoundingClientRect().top -
      24,
  }));
  expect(intermediate.y).toBeLessThan(intermediate.target - 30);
  await expect
    .poll(() =>
      page
        .locator("#stack")
        .evaluate((el) =>
          Math.abs(
            el.getBoundingClientRect().top -
              parseFloat(getComputedStyle(el).scrollMarginTop),
          ),
        ),
    )
    .toBeLessThan(2);
  await expect(page.locator("#stack")).toBeFocused();
});

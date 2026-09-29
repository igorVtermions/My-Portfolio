import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { stack } from "../src/content/stack";

test("stack conecta ferramentas aos trabalhos e restaura foco ao fechar", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const section = page.locator("#stack");
  const native = section.getByRole("button", {
    name: "React Native",
    exact: true,
  });
  await native.focus();
  await page.keyboard.press("Enter");
  let context = section.getByRole("region", {
    name: "Aplicação de React Native",
  });
  await expect(context.getByRole("link")).toHaveCount(3);
  await expect(native).toHaveAttribute("aria-expanded", "true");
  await section.getByRole("button", { name: "AWS", exact: true }).click();
  context = section.getByRole("region", { name: "Aplicação de AWS" });
  await expect(context).toBeVisible();
  await expect(section.getByRole("region")).toHaveCount(1);
  await expect(context.getByRole("link")).toHaveAttribute(
    "href",
    "/experiencia/thux-mathux",
  );
  await context.getByRole("button").focus();
  await page.keyboard.press("Escape");
  await expect(section.getByRole("region")).toHaveCount(0);
  await expect(
    section.getByRole("button", { name: "AWS", exact: true }),
  ).toBeFocused();
  expect(errors).toEqual([]);
});

test("stack mobile mantém inventário, acessibilidade e movimento reduzido", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const section = page.locator("#stack");
  await expect(section.locator(".stack-tools li")).toHaveCount(
    stack.reduce((count, group) => count + group.items.length, 0),
  );
  await section.getByRole("button", { name: "Supabase", exact: true }).click();
  await expect(section.getByRole("region").getByRole("link")).toHaveCount(2);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  expect(
    (await new AxeBuilder({ page }).include("#stack").analyze()).violations,
  ).toEqual([]);
});

test("stack sem JavaScript mantém tecnologias e links de contexto", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  const section = page.locator("#stack");
  await expect(
    section
      .locator(".stack-tools")
      .getByText("React Native", { exact: true })
      .last(),
  ).toBeVisible();
  await expect(
    section
      .locator(".stack-static-contexts")
      .getByRole("link", { name: "Escoply", exact: true })
      .first(),
  ).toBeVisible();
  await expect(section.getByRole("button")).toHaveCount(0);
  await context.close();
});

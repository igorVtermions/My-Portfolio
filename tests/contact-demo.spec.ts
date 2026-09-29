import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("demonstração executa, termina e conduz ao formulário sem enviar", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const demo = page.locator(".contact-demo");
  await demo.scrollIntoViewIfNeeded();
  await page
    .getByRole("button", { name: "Run: construir demonstração" })
    .click();
  await expect(demo).toHaveAttribute("data-phase", "building");
  await expect(demo).toHaveAttribute("data-phase", "complete", {
    timeout: 6000,
  });
  await page.getByRole("button", { name: "Conversar sobre uma ideia" }).click();
  await expect(page.getByLabel("Seu nome", { exact: true })).toBeFocused();
  await expect(page.locator(".form-status")).toBeEmpty();
  expect(errors).toEqual([]);
});

test("preenchimento pausa o progresso; replay preserva os campos", async ({
  page,
}) => {
  await page.goto("/");
  const demo = page.locator(".contact-demo");
  await demo.scrollIntoViewIfNeeded();
  await page.getByLabel("Seu nome", { exact: true }).fill("Pessoa visitante");
  await expect(demo).toHaveAttribute("data-running", "false");
  const code = await page.locator(".demo-editor pre").textContent();
  await page.waitForTimeout(300);
  await expect(page.locator(".demo-editor pre")).toHaveText(code!);
  await page.getByRole("button", { name: "Continuar", exact: true }).click();
  await page
    .getByRole("button", { name: "Run: construir demonstração" })
    .click();
  await expect(demo).toHaveAttribute("data-phase", "complete", {
    timeout: 6000,
  });
  await page.getByRole("button", { name: "Rever animação" }).click();
  await expect(demo).toHaveAttribute("data-phase", "typing");
  await expect(page.getByLabel("Seu nome", { exact: true })).toHaveValue(
    "Pessoa visitante",
  );
});

test("mobile com movimento reduzido mostra convite acessível e permite optar pela animação", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const demo = page.locator(".contact-demo");
  await expect(demo).toHaveAttribute("data-phase", "complete");
  await demo.scrollIntoViewIfNeeded();
  expect(
    (await new AxeBuilder({ page }).include("#contatos").analyze()).violations,
  ).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Ver animação", exact: true }).click();
  await expect(demo).toHaveAttribute("data-phase", "typing");
});

test("autoplay conclui e pausa enquanto a aba está oculta", async ({
  page,
}) => {
  await page.goto("/");
  const demo = page.locator(".contact-demo");
  await demo.scrollIntoViewIfNeeded();
  await expect(demo).toHaveAttribute("data-running", "true");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(demo).toHaveAttribute("data-running", "false");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: false,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(demo).toHaveAttribute("data-phase", "complete", {
    timeout: 12000,
  });
  await expect(demo).toHaveAttribute("data-running", "false");
});

test("sem JavaScript a demonstração oferece resultado e contato estáticos", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator(".demo-signature")).toBeVisible();
  await expect(page.locator(".contact-demo").getByRole("link")).toHaveAttribute(
    "href",
    "#contact-form",
  );
  await expect(page.locator(".contact-demo").getByRole("button")).toHaveCount(
    0,
  );
  await context.close();
});

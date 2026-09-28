import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/projetos",
  "/projetos/escoply",
  "/projetos/magicos-da-limpeza",
  "/experiencia/thux-mathux",
  "/sobre",
  "/contato",
];

test("rotas públicas têm título, um H1 e não geram erros de JavaScript", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Igor Franco/);
  }
  expect(errors).toEqual([]);
});

test("home mantém ordem, stack completa e contatos agrupados", async ({
  page,
}) => {
  await page.goto("/");
  expect(
    await page
      .locator("main > section[id]")
      .evaluateAll((sections) => sections.map((section) => section.id)),
  ).toEqual(["sobre", "stack", "projetos", "contatos"]);
  await expect(page.locator("#stack article")).toHaveCount(8);
  await expect(
    page.locator("#contatos a[href='tel:+5521974885166']"),
  ).toHaveCount(2);
  await expect(
    page.locator("#contatos a[href='https://wa.me/5521974885166']"),
  ).toHaveCount(1);
  const image = page.getByAltText("Retrato de Igor Franco");
  await expect(image).toBeVisible();
  expect(
    await image.evaluate(
      (element) => (element as HTMLImageElement).naturalWidth,
    ),
  ).toBeGreaterThan(0);
});

test("filtros mostram 3, 1 e 2 casos e preservam foco e repositórios", async ({
  page,
}) => {
  await page.goto("/projetos");
  await expect(page.locator(".project-card")).toHaveCount(3);
  for (const [category, count] of [
    ["Autoral", 1],
    ["Profissional", 2],
    ["Todos", 3],
  ] as const) {
    const filter = page.getByRole("button", { name: new RegExp(category) });
    await filter.click();
    await expect(page.locator(".project-card")).toHaveCount(count);
    await expect(filter).toBeFocused();
    await expect(filter).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("status")).toContainText(String(count));
    await expect(page.locator(".repository-row")).toHaveCount(3);
  }
});

test("menu mantém foco, fecha com Escape, botão e backdrop", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menu" });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Fechar menu" })).toBeFocused();
  for (let index = 0; index < 12; index++) {
    await page.keyboard.press("Tab");
    expect(
      await page
        .getByRole("dialog")
        .evaluate((dialog) => dialog.contains(document.activeElement)),
    ).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole("button", { name: "Fechar menu" }).click();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.mouse.click(2, 400);
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await trigger.click();
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("menu navega para hashes dentro e fora da home", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contato");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .getByRole("navigation", { name: "Navegação mobile" })
    .getByRole("link", { name: "Minha stack" })
    .click();
  await expect(page).toHaveURL(/\/#stack$/);
  await expect(page.locator("#stack")).toBeFocused();
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .getByRole("navigation", { name: "Navegação mobile" })
    .getByRole("link", { name: "Sobre mim" })
    .click();
  await expect(page.locator("#sobre")).toBeFocused();
});

test("clipboard informa sucesso e falha mantendo endereço acessível", async ({
  page,
}) => {
  await page.goto("/contato");
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async () => undefined },
    }),
  );
  await page.getByRole("button", { name: "Copiar e-mail" }).click();
  await expect(page.getByRole("status")).toHaveText("Endereço copiado.");
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error("Denied");
        },
      },
    }),
  );
  await page.getByRole("button", { name: "Copiar e-mail" }).click();
  await expect(page.getByRole("status")).toContainText(
    "Não foi possível copiar.",
  );
  await expect(
    page.getByRole("link", { name: "igorviniciusf10@gmail.com", exact: true }),
  ).toHaveAttribute("href", "mailto:igorviniciusf10@gmail.com");
});

test("slugs inválidos retornam 404 real", async ({ page }) => {
  const response = await page.goto("/projetos/nao-existe");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("link", { name: "Voltar ao início" }),
  ).toBeVisible();
});

for (const width of [320, 360, 390, 768, 1024, 1440]) {
  test(`rotas sem overflow em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        route,
      ).toBe(true);
    }
  });
}

test("movimento reduzido e conteúdo sem JavaScript", async ({
  browser,
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator("h1")
      .evaluate((heading) => getComputedStyle(heading).animationName),
  ).toBe("none");
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto("http://127.0.0.1:3000/");
  await expect(staticPage.getByRole("heading", { name: /IGOR/ })).toBeVisible();
  await expect(
    staticPage.getByRole("link", { name: "Conversar no WhatsApp" }),
  ).toBeVisible();
  await context.close();
});

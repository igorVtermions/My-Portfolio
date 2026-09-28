import { test, expect } from "@playwright/test";

test("projetos alternam automaticamente e permitem seleção manual", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator(".project-carousel").scrollIntoViewIfNeeded();
  await page.mouse.move(1, 1);
  await expect(page.locator(".carousel-stage h3")).toContainText("Mágicos", {
    timeout: 12000,
  });
  await page
    .getByRole("button", { name: "Thux / Mathux", exact: true })
    .click();
  await expect(page.locator(".carousel-stage h3")).toContainText("Thux");
  await expect(page.locator(".carousel-stage h3")).toContainText("Escoply", { timeout: 10000 });
});

test("projetos iniciam sozinhos com movimento reduzido e hover", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator(".project-carousel").scrollIntoViewIfNeeded();
  await page.locator(".project-carousel").hover();
  await expect(page.locator(".carousel-stage h3")).toContainText("Mágicos", { timeout: 12000 });
  await page.getByRole("button", { name: "Pausar projetos" }).click();
  await page.waitForTimeout(6800);
  await expect(page.locator(".carousel-stage h3")).toContainText("Mágicos");
});

test("formulário mantém conteúdo na falha e limpa após sucesso confirmado", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByLabel("Seu nome", { exact: true }).fill("Teste local");
  await page
    .getByLabel("Seu e-mail", { exact: true })
    .fill("teste@example.com");
  await page
    .getByLabel("Sua mensagem", { exact: true })
    .fill("Mensagem de teste sem envio real.");
  await page.route("**/api/contact", (route) =>
    route.fulfill({ status: 502, json: { message: "Falha simulada" } }),
  );
  await page.getByRole("button", { name: "Enviar mensagem" }).click();
  await expect(page.locator(".form-status")).toHaveText("Falha simulada");
  await expect(page.getByLabel("Seu nome", { exact: true })).toHaveValue(
    "Teste local",
  );
  await page.route("**/api/contact", (route) =>
    route.fulfill({ status: 200, json: { success: true } }),
  );
  await page.getByRole("button", { name: "Enviar mensagem" }).click();
  await expect(page.locator(".form-status")).toContainText("Mensagem enviada");
  await expect(page.getByLabel("Seu nome", { exact: true })).toHaveValue("");
});

test("API rejeita conteúdo inválido antes de acessar o provedor", async ({
  request,
}) => {
  const response = await request.post("/api/contact", {
    data: { email: "invalido" },
  });
  expect(response.status()).toBe(400);
});

import { test, expect } from "@playwright/test";

test("home e listagem distinguem experiências e produto autoral", async ({
  page,
}) => {
  for (const route of ["/", "/projetos"]) {
    await page.goto(route);
    const entries = page.locator(".experience-entry");
    await expect(entries).toHaveCount(2);
    await expect(entries.nth(0)).toContainText("Mágicos da Limpeza");
    await expect(entries.nth(0)).toContainText("Atuação atual");
    await expect(entries.nth(0).locator("time")).toHaveAttribute(
      "datetime",
      "2026-01",
    );
    await expect(entries.nth(1)).toContainText("Experiência anterior");
    await expect(entries.nth(1).locator("time").first()).toHaveAttribute(
      "datetime",
      "2025-06",
    );
    await expect(entries.nth(1).locator("time").last()).toHaveAttribute(
      "datetime",
      "2026-08",
    );
    await expect(entries.nth(1)).toContainText("Google Play e na App Store");
    await expect(page.locator(".author-product")).toContainText(
      "Produto autoral / Escoply",
    );
    await expect(page.locator(".author-product time")).toHaveCount(0);
    await expect(
      page.getByRole("region", { name: "Trabalhos em foco" }),
    ).toHaveCount(0);
  }
});

test("casos preservam URLs, períodos e responsabilidades", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Minha atuação na Mágicos" }).click();
  await expect(page).toHaveURL(/\/projetos\/magicos-da-limpeza$/);
  await expect(page.locator("h1")).toContainText("Mágicos da Limpeza");
  await expect(page.locator(".experience-period time")).toHaveAttribute(
    "datetime",
    "2026-01",
  );
  await expect(page.locator("main")).toContainText("Freelance");
  await page.goto("/experiencia/thux-mathux");
  await expect(page.locator("h1")).toContainText("Thux / Mathux");
  await expect(page.locator("main")).toContainText("Experiência anterior");
  await expect(page.locator(".experience-period time").last()).toHaveAttribute(
    "datetime",
    "2026-08",
  );
  await expect(page.locator("main")).toContainText("canais de voz ao vivo");
  await expect(page.locator(".project-art")).toHaveCount(0);
  await page.goto("/projetos/escoply");
  await expect(page.locator("main")).toContainText("Produto autoral");
  await page.goto("/sobre");
  await expect(page.locator(".timeline")).toContainText(
    "jan. de 2026 até o presente",
  );
  await expect(page.locator(".timeline")).toContainText(
    "jun. de 2025 até ago. de 2026",
  );
});

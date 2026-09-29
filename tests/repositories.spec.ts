import { test, expect } from "@playwright/test";
import { normalizeRepositories } from "../src/lib/normalize-repositories";
import { getRecentRepositories } from "../src/lib/github-repositories";

test("seleção por teclado mantém foco e atualiza links sem rede", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const tabs = page.getByRole("tablist", { name: "Selecionar repositório" });
  const first = tabs.getByRole("tab").first();
  await first.focus();
  await expect(first).toHaveAttribute("aria-selected", "true");
  const name = await page.getByRole("tabpanel").locator("h3").innerText();
  await page.context().setOffline(true);
  await page.keyboard.press("ArrowDown");
  await expect(tabs.getByRole("tab").nth(1)).toBeFocused();
  await expect(page.getByRole("tabpanel").locator("h3")).not.toHaveText(name);
  await expect(
    page.getByRole("tabpanel").getByRole("link", { name: "Ler README" }),
  ).toHaveAttribute("href", /#readme$/);
  await page.keyboard.press("End");
  await expect(tabs.getByRole("tab").last()).toBeFocused();
  await page.keyboard.press("Home");
  await expect(first).toBeFocused();
  expect(errors).toEqual([]);
});

test("seletor mobile apresenta detalhes e demos somente onde existem", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const select = page.getByLabel("Escolha um repositório");
  await select.selectOption("escoply-web");
  await expect(
    page
      .getByRole("tabpanel")
      .getByRole("link", { name: "Abrir demonstração" }),
  ).toHaveAttribute("href", "https://escoply-web.vercel.app");
  await select.selectOption("escoply-mobile");
  await expect(page.getByRole("tabpanel")).toContainText(
    "Módulos de gestão no roadmap",
  );
  await expect(
    page
      .getByRole("tabpanel")
      .getByRole("link", { name: "Abrir demonstração" }),
  ).toHaveCount(0);
});

test("sem JavaScript mantém repositórios e o caso usa links compactos", async ({
  browser,
  page,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto(baseURL!);
  await expect(staticPage.locator(".repo-static-list")).toBeVisible();
  expect(
    await staticPage
      .locator(".repo-static-list")
      .getByRole("link", { name: "Ver código", exact: true })
      .count(),
  ).toBeGreaterThan(0);
  await context.close();
  await page.goto("/projetos/escoply");
  await expect(page.locator(".repo-compact article")).toHaveCount(2);
  await expect(page.getByRole("tablist")).toHaveCount(0);
});

test("normalização protege seleção, metadados opcionais e ordenação", () => {
  const repo = { private: false, fork: false, archived: false };
  const items = normalizeRepositories([
    {
      ...repo,
      name: "recent",
      pushed_at: "2026-09-29T12:00:00Z",
      description: "",
      homepage: "javascript:alert(1)",
      topics: [null, "api", 2],
    },
    {
      ...repo,
      name: "escoply-web",
      pushed_at: "2026-09-20T12:00:00Z",
      language: "TypeScript",
    },
    { ...repo, name: "unknown", pushed_at: "invalid", language: null },
    { ...repo, name: "igorVtermions" },
    { ...repo, name: "private", private: true },
    { ...repo, name: "fork", fork: true },
    { ...repo, name: "archived", archived: true },
  ]);
  expect(items.map((item) => item.name)).toEqual([
    "escoply-web",
    "recent",
    "unknown",
  ]);
  expect(items[1]).toMatchObject({
    description: undefined,
    demoUrl: undefined,
    topics: ["api"],
  });
  expect(items[2]).toMatchObject({ pushedAt: undefined, language: undefined });
  expect(normalizeRepositories([])).toEqual([]);
  expect(() => normalizeRepositories({ error: true })).toThrow();
});

test("falha de API retorna seleção sem datas inventadas e vazio válido permanece vazio", async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async () => {
      throw new Error("offline");
    };
    const fallback = await getRecentRepositories();
    expect(fallback.live).toBe(false);
    expect(fallback.items.length).toBeGreaterThan(0);
    expect(fallback.items.every((item) => !item.pushedAt)).toBe(true);
    globalThis.fetch = async () => Response.json([]);
    expect(await getRecentRepositories()).toEqual({ items: [], live: true });
  } finally {
    globalThis.fetch = original;
  }
});

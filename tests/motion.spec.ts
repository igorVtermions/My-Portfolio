import { test, expect } from "@playwright/test";

test("faixa gira automaticamente sem duplicar conteúdo acessível", async ({
  page,
}) => {
  await page.goto("/");
  const marquee = page.locator(".technology-marquee");
  await marquee.scrollIntoViewIfNeeded();
  await page.mouse.move(1, 1);
  await expect(marquee).toHaveAttribute("data-running", "true");
  const track = page.locator(".marquee-track");
  const position = () =>
    track.evaluate((element) => getComputedStyle(element).transform);
  const initial = await position();
  await expect.poll(position).not.toBe(initial);
  await expect(
    page
      .getByRole("list", { name: "Tecnologias em destaque" })
      .getByRole("listitem"),
  ).toHaveCount(4);
});

test("faixa mantém reprodução com hover e pausa fora da tela ou aba oculta", async ({
  page,
}) => {
  await page.goto("/");
  const marquee = page.locator(".technology-marquee");
  const state = () =>
    page
      .locator(".marquee-track")
      .evaluate((element) => getComputedStyle(element).animationPlayState);
  await marquee.scrollIntoViewIfNeeded();
  await marquee.hover();
  await expect.poll(state).toBe("running");
  await page.mouse.move(1, 1);
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(marquee).toHaveAttribute("data-running", "false");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: false,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(marquee).toHaveAttribute("data-running", "true");
  await page.locator("#contatos").scrollIntoViewIfNeeded();
  await expect(marquee).toHaveAttribute("data-running", "false");
});

test("autoplay with reduced motion has no hydration errors", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.locator(".technology-marquee").scrollIntoViewIfNeeded();
  const position = () =>
    page
      .locator(".marquee-track")
      .evaluate((el) => getComputedStyle(el).transform);
  const initial = await position();
  await expect.poll(position).not.toBe(initial);
  expect(errors).toEqual([]);
});

test("separadores consistentes e nenhuma numeração ornamental", async ({
  page,
}) => {
  await page.goto("/");
  for (const id of ["sobre", "stack", "projetos", "repositories", "contatos"]) {
    await expect(page.locator(`#${id} > .section-divider`)).toHaveCount(1);
  }
  for (const route of ["/", "/projetos/escoply", "/sobre"]) {
    await page.goto(route);
    expect(await page.locator("main").innerText()).not.toMatch(/\b0[1-8]\s*\//);
  }
});

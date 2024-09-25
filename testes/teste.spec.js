import { test, expect } from "@playwright/test";

test("Jogo de matar mosquitos - Teste do nível fácil e verificação de derrota", async ({
  page,
}) => {
  await page.goto("https://elisirons.github.io/JogoMataMosquito/index.html");
  await page.selectOption("#nivel", "facil");
  await page.click("button.btn");
  await page.waitForURL(
    "https://elisirons.github.io/JogoMataMosquito/app.html?facil"
  );
  await page.waitForTimeout(15000);
  await expect(page).toHaveURL(/game-over.html$/);
});

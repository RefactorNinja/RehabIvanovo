import { test, expect } from "@playwright/test";

test("hero CTA has tel link", async ({ page }) => {
  await page.goto("/");
  const cta = page.getByRole("link", { name: /Позвонить/i }).first();
  await expect(cta).toHaveAttribute("href", "tel:+79203440110");
});

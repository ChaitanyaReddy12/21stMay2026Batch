import { test, expect } from '@playwright/test';

test.describe('Amazon login', () => {
  test('login to Amazon.in', async ({ page }) => {
    const email = process.env.AMAZON_EMAIL;
    const password = process.env.AMAZON_PASSWORD;

    if (!email || !password) {
      throw new Error('Set AMAZON_EMAIL and AMAZON_PASSWORD environment variables before running this test.');
    }

    await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });

    const signInLink = page.getByRole('link', { name: /sign in|hello, sign in/i }).first();
    if (await signInLink.isVisible().catch(() => false)) {
      await signInLink.click();
    } else {
      await page.goto('https://www.amazon.in/ap/signin', { waitUntil: 'domcontentloaded' });
    }

    const emailInput = page.locator('#ap_email, input[name="email"]').first();
    await expect(emailInput).toBeVisible({ timeout: 20000 });
    await emailInput.fill(email);

    const continueButton = page.locator('#continue, input[name="continue"]').first();
    await continueButton.click();

    const passwordInput = page.locator('#ap_password, input[name="password"]').first();
    await expect(passwordInput).toBeVisible({ timeout: 20000 });
    await passwordInput.fill(password);

    const submitButton = page.locator('#signInSubmit, input[name="rememberMe"]').first();
    await submitButton.click();

    await expect(page.locator('#nav-link-accountList, text=Hello,')).toBeVisible({ timeout: 40000 });
    await expect(page).toHaveURL(/amazon\.in/);
  });
});

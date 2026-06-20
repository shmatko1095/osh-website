import { expect, test } from '@playwright/test';

const routes = ['/', '/compatibility/', '/docs/', '/support/', '/contact/', '/en/', '/en/compatibility/', '/en/docs/', '/en/support/', '/en/contact/'];
const responsiveViewports = [
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1024, height: 900 },
  { width: 1440, height: 1000 }
];

for (const route of routes) {
  test(`${route} renders without internal production labels`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('body')).not.toContainText('LOGO-01');
    await expect(page.locator('body')).not.toContainText(/PH-\d{2}/);
    const headings = await page.locator('main h1, main h2, main h3, main h4, main h5, main h6').evaluateAll((nodes) =>
      nodes.map((node) => Number(node.tagName.slice(1)))
    );
    expect(headings[0]).toBe(1);
    headings.slice(1).forEach((level, index) => expect(level).toBeLessThanOrEqual(headings[index] + 1));
    await expect(page.locator('main img:not([alt])')).toHaveCount(0);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    expect(overflow).toBeFalsy();
  });
}

for (const route of ['/', '/en/']) {
  for (const viewport of responsiveViewports) {
    test(`${route} has no page overflow at ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto(route);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
      expect(overflow).toBeFalsy();
    });
  }
}

test('language switcher keeps the current page', async ({ page }) => {
  await page.goto('/compatibility/');
  await page.getByLabel(/Мова сайту/).click();
  await expect(page).toHaveURL(/\/en\/compatibility\/$/);
});

test('mobile navigation is keyboard accessible', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const menu = page.locator('[data-menu-button]');
  await expect(menu).toHaveAccessibleName('Відкрити меню');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(menu).toHaveAccessibleName('Закрити меню');
  await expect(page.locator('#mobile-navigation').getByRole('link', { name: 'Сумісність' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
});

test('product facts are rendered from shared data', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('5 499 грн')).toBeVisible();
  await expect(page.getByText('16 A')).toBeVisible();
  await expect(page.getByText('24 місяці')).toBeVisible();
  await page.goto('/en/compatibility/');
  await expect(page.getByText('Tuya ZTH-02')).toBeVisible();
  await expect(page.getByText('Aqara Temperature and Humidity Sensor T1')).toBeVisible();
});

test('home anchors and FAQ work without client-side framework code', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Дізнатися більше' })).toHaveAttribute('href', '#benefits');
  await expect(page.getByRole('link', { name: 'Як це працює' })).toHaveAttribute('href', '#setup');
  const firstQuestion = page.locator('main details').first();
  await firstQuestion.locator('summary').click();
  await expect(firstQuestion).toHaveAttribute('open', '');
});

test('contact channels use the configured destinations', async ({ page }) => {
  await page.goto('/contact/');
  await expect(page.locator('a[href="mailto:shmatko1095@gmail.com"]').first()).toBeVisible();
  await expect(page.locator('a[href="https://t.me/shmatko1095"]').first()).toBeVisible();
});

test('canonical and language alternates use the production domain', async ({ page }) => {
  await page.goto('/en/docs/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://oshhome.com/en/docs/');
  await expect(page.locator('link[rel="alternate"][hreflang="uk"]')).toHaveAttribute('href', 'https://oshhome.com/docs/');
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', 'https://oshhome.com/en/docs/');
  await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', 'https://oshhome.com/docs/');
});

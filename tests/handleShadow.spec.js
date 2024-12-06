import { test, expect } from '@playwright/test';

 test.describe.parallel
///hthidhsdsdsd djsdsdj
test('get started link', async ({ page }) => {
  await page.goto('https://www.williams-sonoma.com/');

  // Click the get started link.
   await page.locator("#search-field").nth(1).isVisible();
   await page.locator('.btnClose').click();

 await page.locator("#search-field").nth(0).fill("food");
 
 await page.click('button[type="submit"]');

 await page.locator('.product-name [aria-labelledby="croissant"]').waitFor();
 await page.locator('.product-name [aria-labelledby="croissant"]').click();
 await page.locator('[data-test-id="no-swatch-label-set-of-8"]').click();
 await page.locator('[productid="croissant"] [data-test-id="add-to-cart-button"]').first().click();
 await page.locator('[data-test-id="checkout-link"]').waitFor();
 await page.locator('[data-test-id="checkout-link"]').click();

   await page.locator('[data-test-id="topCheckout"]').waitFor();
   await page.locator('[data-test-id="topCheckout"]').click();

   console.log("click on a guest chckout")
  await page.locator('#email').fill("sanchit@gmail.com");
 await page.locator('#password').fill("12345678");
 await page.locator('.btn.btn-primary.btn-mondo').last().waitFor();
 await page.locator('.btn.btn-primary.btn-mondo').last().dispatchEvent("click");
 await page.locator('[validation-state="INVALID"]').waitFor();
  await page.locator('[validation-state="INVALID"]').click();



 
   // Expects page to have a heading with the name of Installation.
});


test.skip('get started link', async ({ page }) => {
  await page.goto('https://www.williams-sonoma.com/');

  // Click the get started link.
   await page.locator("#search-field").nth(1).isVisible();
   await page.locator('.btnClose').click();

 await page.locator("#search-field").nth(0).fill("food");
 
 await page.click('button[type="submit"]');

 await page.locator('.product-name [aria-labelledby="croissant"]').waitFor();
 await page.locator('.product-name [aria-labelledby="croissant"]').click();
 await page.locator('[data-test-id="no-swatch-label-set-of-8"]').click();
 await page.locator('[productid="croissant"] [data-test-id="add-to-cart-button"]').first().click();
 await page.locator('[data-test-id="checkout-link"]').waitFor();
 await page.locator('[data-test-id="checkout-link"]').click();
   // Expects page to have a heading with the name of Installation.
});
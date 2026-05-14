import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Brand visibility test.
 *
 * The Institute of Forgiveness header uses a text-mark logo rather than an
 * <img>, so we verify the brand link is present and labeled correctly.
 */

test.describe('Header branding', () => {
  test('should display the Institute of Forgiveness brand link in the header', async ({ page }) => {
    await page.goto('/')

    const brandLink = page.locator(`header a[aria-label="${testConfig.brand.ariaLabel}"]`)
    await expect(brandLink).toBeVisible()
    await expect(brandLink).toContainText(testConfig.brand.name)
  })
})

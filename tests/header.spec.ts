import { test, expect } from '@playwright/test'

/**
 * Header tests for the Institute of Forgiveness.
 *
 * Verifies the sticky header renders the IoF wordmark, primary navigation,
 * and the donate CTA link.
 */

test.describe('Header', () => {
  test('should display the IoF wordmark and brand name', async ({ page }) => {
    await page.goto('/')
    const brandLink = page.locator('header a[aria-label="Institute of Forgiveness"]')
    await expect(brandLink).toBeVisible()
    await expect(brandLink).toContainText('Institute of Forgiveness')
  })

  test('should display the IoF monogram badge', async ({ page }) => {
    await page.goto('/')
    const brandLink = page.locator('header a[aria-label="Institute of Forgiveness"]')
    await expect(brandLink).toContainText('IoF')
  })

  test('should display the tagline in the header', async ({ page }) => {
    await page.goto('/')
    // The tagline span is in the DOM; it's CSS-hidden on mobile but present in HTML
    const taglineSpan = page.locator('header').getByText('Mentoring · Re-Entry · Reform')
    await expect(taglineSpan).toBeAttached()
  })

  test('should display primary navigation links', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('header nav[aria-label="Primary"]')
    await expect(nav).toBeAttached()
    for (const label of ['Home', 'Mission', 'Programs', 'Impact', 'Donate', 'Contact']) {
      await expect(nav.getByRole('link', { name: label, exact: true })).toBeAttached()
    }
  })

  test('should have a Donorbox donate CTA link in the header', async ({ page }) => {
    await page.goto('/')
    // Target the explicit external Donorbox <a> (not the /#donate hash nav link)
    const donateCta = page.locator('header a[href="https://donorbox.org/institute-of-forgiveness"]')
    await expect(donateCta.first()).toBeAttached()
  })

  test('should display the mobile menu toggle button', async ({ page }) => {
    await page.goto('/')
    // The mobile menu button is always in the DOM
    const menuBtn = page.locator('header button[aria-label]')
    await expect(menuBtn.first()).toBeAttached()
  })
})

import { test, expect } from '@playwright/test'

/**
 * Donate / Donorbox link tests for the Institute of Forgiveness.
 *
 * The site links to an external Donorbox page instead of hosting an
 * embedded form.  These tests verify the links are present and point to
 * the correct URL without attempting to load the external service.
 */

const DONORBOX_URL = 'https://donorbox.org/institute-of-forgiveness'

test.describe('Donorbox donate links', () => {
  test('should have a Donorbox CTA link in the header', async ({ page }) => {
    await page.goto('/')
    // Target the explicit Donorbox <a> in the desktop nav (not the /#donate hash link)
    const headerDonate = page.locator(`header a[href="${DONORBOX_URL}"]`).first()
    await expect(headerDonate).toBeAttached()
    await expect(headerDonate).toHaveAttribute('href', DONORBOX_URL)
  })

  test('should have a Donorbox link in the DonateCTA section', async ({ page }) => {
    await page.goto('/')
    const section = page.locator('#donate')
    await section.scrollIntoViewIfNeeded()
    const donorboxLink = section.getByRole('link', { name: /donate via donorbox/i })
    await expect(donorboxLink).toBeVisible()
    await expect(donorboxLink).toHaveAttribute('href', DONORBOX_URL)
  })

  test('should have a Donorbox link in the footer Explore list', async ({ page }) => {
    await page.goto('/')
    const footerLink = page.locator('footer').getByRole('link', { name: /donorbox giving page/i })
    await footerLink.scrollIntoViewIfNeeded()
    await expect(footerLink).toHaveAttribute('href', DONORBOX_URL)
  })

  test('Donorbox CTA link should open in a new tab', async ({ page }) => {
    await page.goto('/')
    const section = page.locator('#donate')
    await section.scrollIntoViewIfNeeded()
    const donorboxLink = section.getByRole('link', { name: /donate via donorbox/i })
    await expect(donorboxLink).toHaveAttribute('target', '_blank')
    await expect(donorboxLink).toHaveAttribute('rel', /noopener/)
  })
})

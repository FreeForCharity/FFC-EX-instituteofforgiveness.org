import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Footer social link tests for the Institute of Forgiveness.
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    await page.goto('/')

    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)

    const googlePlusLabel = page.locator('footer a[aria-label="Google Plus"]')
    await expect(googlePlusLabel).toHaveCount(0)
  })

  test('should display active social media links', async ({ page }) => {
    await page.goto('/')

    const facebookLink = page.locator(`footer a[href*="${testConfig.socialLinks.facebook.url}"]`)
    await expect(facebookLink).toBeVisible()
    await expect(facebookLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.facebook.ariaLabel
    )

    const twitterLink = page.locator(`footer a[href*="${testConfig.socialLinks.twitter.url}"]`)
    await expect(twitterLink).toBeVisible()
    await expect(twitterLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.twitter.ariaLabel
    )

    const linkedInLink = page.locator(`footer a[href*="${testConfig.socialLinks.linkedin.url}"]`)
    await expect(linkedInLink).toBeVisible()
    await expect(linkedInLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.linkedin.ariaLabel
    )

    const instagramLink = page.locator(`footer a[href*="${testConfig.socialLinks.instagram.url}"]`)
    await expect(instagramLink).toBeVisible()
    await expect(instagramLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.instagram.ariaLabel
    )
  })

  test('should have four social media icons in the footer', async ({ page }) => {
    await page.goto('/')

    const socialMediaLinks = page.locator(
      `footer a[aria-label="${testConfig.socialLinks.facebook.ariaLabel}"], footer a[aria-label="${testConfig.socialLinks.twitter.ariaLabel}"], footer a[aria-label="${testConfig.socialLinks.linkedin.ariaLabel}"], footer a[aria-label="${testConfig.socialLinks.instagram.ariaLabel}"]`
    )
    await expect(socialMediaLinks).toHaveCount(4)
  })
})

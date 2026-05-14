import { test, expect } from '@playwright/test'

/**
 * Smoke tests for the Institute of Forgiveness home page.
 *
 * Verifies that the page loads and all six home sections rendered by
 * src/app/home-page/index.tsx are present in the DOM.
 *
 * Sections below the initial viewport use toBeAttached() rather than
 * toBeVisible() since Playwright's toBeVisible() checks CSS visibility
 * but does not scroll — toBeAttached() is sufficient to confirm that
 * the section was rendered without requiring a viewport scroll.
 */

test.describe('Home page smoke', () => {
  test('should load the home page successfully', async ({ page }) => {
    const response = await page.goto('/')
    expect(response?.status()).toBeLessThan(400)
    await expect(page).toHaveTitle(/Institute of Forgiveness/i)
  })

  test('should render the Hero section', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('#hero')
    await expect(hero).toBeVisible()
    await expect(hero.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('should render the Mission section', async ({ page }) => {
    await page.goto('/')
    const mission = page.locator('#mission')
    await expect(mission).toBeAttached()
    await expect(mission.getByRole('heading', { level: 2 })).toBeAttached()
  })

  test('should render the Programs section', async ({ page }) => {
    await page.goto('/')
    const programs = page.locator('#programs')
    await expect(programs).toBeAttached()
    await expect(programs.getByRole('heading', { level: 2 })).toBeAttached()
  })

  test('should render the ImpactTiers section', async ({ page }) => {
    await page.goto('/')
    const impact = page.locator('#impact')
    await expect(impact).toBeAttached()
    await expect(impact.getByRole('heading', { level: 2 })).toBeAttached()
  })

  test('should render the DonateCTA section', async ({ page }) => {
    await page.goto('/')
    const donate = page.locator('#donate')
    await expect(donate).toBeAttached()
    await expect(donate.getByRole('heading', { level: 2 })).toBeAttached()
  })

  test('should render the Contact section', async ({ page }) => {
    await page.goto('/')
    const contact = page.locator('#contact')
    await expect(contact).toBeAttached()
    await expect(contact.getByRole('heading', { level: 2 })).toBeAttached()
  })

  test('should have all six home section IDs in the DOM', async ({ page }) => {
    await page.goto('/')
    for (const id of ['hero', 'mission', 'programs', 'impact', 'donate', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeAttached()
    }
  })
})

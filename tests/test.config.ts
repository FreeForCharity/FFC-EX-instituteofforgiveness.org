/**
 * Test Configuration for the Institute of Forgiveness site.
 *
 * Centralizes content-specific values used in E2E tests so a single edit
 * here updates expectations across the suite.
 */

export const testConfig = {
  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   */
  socialLinks: {
    facebook: {
      url: 'facebook.com/instituteofforgiveness',
      ariaLabel: 'Facebook',
    },
    twitter: {
      url: 'twitter.com/ioforgiveness',
      ariaLabel: 'X (Twitter)',
    },
    linkedin: {
      url: 'linkedin.com/company/instituteofforgiveness',
      ariaLabel: 'LinkedIn',
    },
    instagram: {
      url: 'instagram.com/instituteofforgiveness',
      ariaLabel: 'Instagram',
    },
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'Institute of Forgiveness. All rights reserved.',
    searchText: 'Institute of Forgiveness. All rights reserved.',
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Free For Charity',
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Brand Configuration
   * Used in: tests/logo.spec.ts
   */
  brand: {
    name: 'Institute of Forgiveness',
    ariaLabel: 'Institute of Forgiveness',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}

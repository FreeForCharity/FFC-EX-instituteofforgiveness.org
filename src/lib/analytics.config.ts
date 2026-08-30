// Tracking-ID placeholder guard.
//
// This fork does not carry the FFC template's analyticsConfig object: its
// GTM container ID is hardcoded in src/components/google-tag-manager and the
// cookie-consent component reads NEXT_PUBLIC_* environment variables with
// placeholder fallbacks. This module therefore carries only the
// isConfigured() helper the consent path relies on, so integrations left at
// their placeholder values stay inert.

// The placeholder values the FFC template ships (both the 10-X and 8-X
// Clarity variants seen across the fleet are listed).
const PLACEHOLDER_IDS: readonly string[] = [
  'G-XXXXXXXXXX',
  'XXXXXXXXXXXXXXX',
  'XXXXXXXXXX',
  'XXXXXXXX',
]

/**
 * True when an analytics ID has been replaced with a real value. A falsy
 * or whitespace-only value, one of the shipped placeholders, or any
 * obviously-templated value (six or more consecutive X's) counts as NOT
 * configured, so the integration it belongs to stays inert.
 */
export function isConfigured(id: string | undefined | null): boolean {
  if (!id) return false
  const trimmed = id.trim()
  if (!trimmed) return false
  if (PLACEHOLDER_IDS.includes(trimmed)) return false
  if (/X{6,}/.test(trimmed)) return false
  return true
}

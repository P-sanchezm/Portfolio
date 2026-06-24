/**
 * Contact email — stored base64-encoded and only decoded at runtime.
 *
 * Why: the address never appears as plaintext in the repository source or in
 * the built JS bundle, so the email-harvesting bots that scan public repos and
 * regex page sources for `name@host` patterns don't find it. This is light
 * obfuscation (not encryption) — a determined human can still decode it — but
 * it removes the easy, automated scraping that causes spam.
 *
 * To change the address, base64-encode the new one and replace ENCODED_EMAIL:
 *   printf '%s' 'you@example.com' | base64
 */
const ENCODED_EMAIL = "cGFic2FuY2hlem1AZ21haWwuY29t";

/** Decode the contact email at runtime. */
export const getEmail = (): string => atob(ENCODED_EMAIL);

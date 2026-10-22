export const buildMailto = (to: string, subject: string, body: string): string =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

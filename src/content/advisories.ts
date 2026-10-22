import { PHP2SHELL_PATH } from './site'

export { ADVISORY_HELP_PARAM } from './site'

export type AdvisoryCta = {
  label: string
  to: string
}

export type AdvisoryPrefill = {
  helpValue: string
  projectType: string
  message: string
}

export type Advisory = {
  id: string
  kicker: string
  title: string
  summary: string
  mobileSummary: string
  cta: AdvisoryCta
  prefill: AdvisoryPrefill
}

export const ADVISORY_DISMISS_PREFIX = 'advisory-dismissed:'
export const ADVISORY_OFFSET_VAR = '--advisory-offset'

export const ACTIVE_ADVISORY: Advisory | null = {
  id: 'php2shell-20261021',
  kicker: 'Active incident',
  title: 'PHP2Shell remote code execution',
  summary:
    'CVE-2026-109618 and CVE-2026-109619 are being exploited against unpatched PHP servers. This site is static and is not affected. If you run PHP, WordPress, Laravel, or Magento, we can help you patch, contain, and check for compromise.',
  mobileSummary: 'Unpatched PHP servers are under attack. We can help you patch and check for compromise.',
  cta: {
    label: 'Read the advisory',
    to: PHP2SHELL_PATH,
  },
  prefill: {
    helpValue: 'php2shell',
    projectType: 'Incident Response',
    message:
      'Need help with PHP2Shell (CVE-2026-109618 / CVE-2026-109619): patching, containment, and a compromise review.',
  },
}

export const advisoryDismissKey = (id: string): string => `${ADVISORY_DISMISS_PREFIX}${id}`

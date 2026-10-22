import { ADVISORY_HELP_PARAM, PHP2SHELL_PATH, SITE_EMAIL, SITE_NAME, SITE_ORIGIN } from './site'

export { PHP2SHELL_PATH }

export const PHP2SHELL_ADVISORY = {
  slug: 'php2shell',
  path: PHP2SHELL_PATH,
  canonical: `${SITE_ORIGIN}${PHP2SHELL_PATH}`,
  published: '2026-10-23',
  updated: '2026-10-23',
  kicker: 'Security advisory',
  navLabel: 'PHP2Shell',
  title: 'PHP2Shell attack help: CVE-2026-109618 and CVE-2026-109619',
  documentTitle: 'PHP2Shell Attack Help (CVE-2026-109618, CVE-2026-109619) | Block08',
  description:
    'PHP2Shell is a pair of critical PHP remote code execution flaws now under active attack. Block08 helps teams patch, contain, and check compromised PHP, WordPress, Laravel, and Magento servers.',
  lead:
    'On 21 October 2026 the PHP project released emergency fixes for two critical remote code execution flaws, known together as PHP2Shell. Unauthenticated attackers can run code on unpatched PHP servers. Scanning and exploitation attempts are already widespread.',
  whoItHits:
    'Every PHP install that serves web requests is in scope, including PHP-FPM, Apache with mod_php, php-cgi, FrankenPHP, and LiteSpeed. Apache mod_php is the highest-risk setup. WordPress, Laravel, Magento, Drupal, and many appliances embed PHP even when the product name does not say PHP.',
  siteStatus:
    'block08.com is a static React site on GitHub Pages. It does not run PHP, so this site is not affected. If your product, store, or intranet runs PHP, you should treat this as urgent.',
  whatWeDo:
    'Block08 can help you find PHP across your estate, apply or verify the fixed versions, contain internet-facing systems that cannot be patched yet, and look for signs of compromise after the first exploit wave.',
  patchedVersions: ['PHP 8.5.12', 'PHP 8.4.27', 'PHP 8.3.36', 'PHP 8.2.35'] as const,
  cves: [
    {
      id: 'CVE-2026-109618',
      name: 'RCE via out-of-memory corruption',
    },
    {
      id: 'CVE-2026-109619',
      name: 'RCE via stale global state',
    },
  ],
  actions: [
    {
      title: 'Inventory PHP',
      body: 'List every internet-facing host that runs PHP, including images, PaaS platforms, and products that embed it.',
    },
    {
      title: 'Patch or isolate',
      body: 'Update to a fixed PHP build. If you cannot patch yet, take the service off the public internet until you can.',
    },
    {
      title: 'Check for compromise',
      body: 'Look for unexpected PHP workers, shells, new admin users, changed themes or plugins, and outbound callbacks.',
    },
    {
      title: 'Call incident help',
      body: 'If you need a team to do this with you, Block08 can run the response and report what we find.',
    },
  ],
  faqs: [
    {
      question: 'What is the PHP2Shell attack?',
      answer:
        'PHP2Shell is the name used for CVE-2026-109618 and CVE-2026-109619. Both bugs sit in PHP itself, not in one CMS plugin. A crafted request can lead to unauthenticated remote code execution on a vulnerable PHP worker.',
    },
    {
      question: 'Which PHP versions are safe?',
      answer:
        'Update to PHP 8.5.12, 8.4.27, 8.3.36, or 8.2.35, or a later build on the same branch. PHP 8.1 and older have no official upstream release. Use a vendor backport or move to a supported branch.',
    },
    {
      question: 'Is Block08 or block08.com affected?',
      answer:
        'No. This website does not execute PHP. We published this advisory so operators who do run PHP can find help and a clear next step.',
    },
    {
      question: 'Can Block08 help us fix a PHP2Shell incident?',
      answer:
        `Yes. We can help with patching, containment, and a compromise review. Use the incident form or email ${SITE_EMAIL}.`,
    },
  ],
  sources: [
    {
      label: 'CISA alert on CVE-2026-109618 and CVE-2026-109619',
      href: 'https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching',
    },
    {
      label: 'PHP Foundation security release notes',
      href: 'https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/',
    },
    {
      label: 'CERT-EU advisory 2026-018',
      href: 'https://www.cert.europa.eu/publications/security-advisories/2026-018/',
    },
  ],
  contactHref: `/?${ADVISORY_HELP_PARAM}=php2shell#contact`,
  contactLabel: 'Get incident help',
  email: SITE_EMAIL,
  orgName: SITE_NAME,
} as const

export type Php2shellFaq = (typeof PHP2SHELL_ADVISORY.faqs)[number]
export type Php2shellSource = (typeof PHP2SHELL_ADVISORY.sources)[number]

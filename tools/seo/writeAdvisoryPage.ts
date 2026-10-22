import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PHP2SHELL_ADVISORY } from '../../src/content/php2shellAdvisory.ts'
import { SITE_NAME, SITE_ORIGIN } from '../../src/content/site.ts'

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const articleJson = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: PHP2SHELL_ADVISORY.title,
  description: PHP2SHELL_ADVISORY.description,
  datePublished: PHP2SHELL_ADVISORY.published,
  dateModified: PHP2SHELL_ADVISORY.updated,
  mainEntityOfPage: PHP2SHELL_ADVISORY.canonical,
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_ORIGIN,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_ORIGIN,
  },
}

const faqJson = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PHP2SHELL_ADVISORY.faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const versions = PHP2SHELL_ADVISORY.patchedVersions
  .map((version) => `<li>${escapeHtml(version)}</li>`)
  .join('')

const cves = PHP2SHELL_ADVISORY.cves
  .map((cve) => `<li><strong>${escapeHtml(cve.id)}</strong>: ${escapeHtml(cve.name)}</li>`)
  .join('')

const actions = PHP2SHELL_ADVISORY.actions
  .map(
    (action, index) =>
      `<li><p><strong>${index + 1}. ${escapeHtml(action.title)}</strong></p><p>${escapeHtml(action.body)}</p></li>`,
  )
  .join('')

const faqs = PHP2SHELL_ADVISORY.faqs
  .map(
    (item) =>
      `<div><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p></div>`,
  )
  .join('')

const sources = PHP2SHELL_ADVISORY.sources
  .map(
    (source) =>
      `<li><a href="${escapeHtml(source.href)}" rel="noreferrer">${escapeHtml(source.label)}</a></li>`,
  )
  .join('')

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(PHP2SHELL_ADVISORY.documentTitle)}</title>
    <meta name="title" content="${escapeHtml(PHP2SHELL_ADVISORY.documentTitle)}" />
    <meta name="description" content="${escapeHtml(PHP2SHELL_ADVISORY.description)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="${escapeHtml(PHP2SHELL_ADVISORY.canonical)}" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escapeHtml(PHP2SHELL_ADVISORY.canonical)}" />
    <meta property="og:title" content="${escapeHtml(PHP2SHELL_ADVISORY.documentTitle)}" />
    <meta property="og:description" content="${escapeHtml(PHP2SHELL_ADVISORY.description)}" />
    <meta property="og:image" content="${SITE_ORIGIN}/logo.png" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(PHP2SHELL_ADVISORY.documentTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(PHP2SHELL_ADVISORY.description)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/advisories/advisory.css" />
    <script type="application/ld+json">${JSON.stringify(articleJson)}</script>
    <script type="application/ld+json">${JSON.stringify(faqJson)}</script>
  </head>
  <body>
    <header class="advisory-chrome">
      <a href="/"><img src="/Block08-logo.svg" alt="Block08 Security Audits" width="160" height="40" /></a>
      <a href="/">Back to home</a>
    </header>
    <main>
      <article>
        <p class="kicker">${escapeHtml(PHP2SHELL_ADVISORY.kicker)}</p>
        <h1>${escapeHtml(PHP2SHELL_ADVISORY.title)}</h1>
        <p class="lead">${escapeHtml(PHP2SHELL_ADVISORY.lead)}</p>
        <p class="meta">Published ${PHP2SHELL_ADVISORY.published}. Updated ${PHP2SHELL_ADVISORY.updated}.</p>

        <section>
          <h2>Who this attack hits</h2>
          <p>${escapeHtml(PHP2SHELL_ADVISORY.whoItHits)}</p>
        </section>
        <section>
          <h2>Is block08.com affected?</h2>
          <p>${escapeHtml(PHP2SHELL_ADVISORY.siteStatus)}</p>
        </section>
        <section>
          <h2>How Block08 can help</h2>
          <p>${escapeHtml(PHP2SHELL_ADVISORY.whatWeDo)}</p>
          <p><a class="cta" href="${escapeHtml(PHP2SHELL_ADVISORY.contactHref)}">${escapeHtml(PHP2SHELL_ADVISORY.contactLabel)}</a></p>
        </section>
        <section>
          <h2>Fixed PHP versions</h2>
          <ul class="versions">${versions}</ul>
          <ul>${cves}</ul>
        </section>
        <section>
          <h2>What to do now</h2>
          <ol>${actions}</ol>
        </section>
        <section>
          <h2>PHP2Shell questions</h2>
          ${faqs}
        </section>
        <section>
          <h2>Official sources</h2>
          <ul>${sources}</ul>
        </section>
      </article>
    </main>
    <footer>
      <p><a href="mailto:${PHP2SHELL_ADVISORY.email}">${PHP2SHELL_ADVISORY.email}</a></p>
    </footer>
  </body>
</html>
`

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
const outFile = join(root, 'dist/advisories/php2shell/index.html')
mkdirSync(dirname(outFile), { recursive: true })
writeFileSync(outFile, html)
process.stdout.write(`wrote ${outFile}\n`)

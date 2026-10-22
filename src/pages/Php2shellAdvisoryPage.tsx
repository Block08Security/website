import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { PHP2SHELL_ADVISORY } from '../content/php2shellAdvisory'
import { SITE_NAME, SITE_ORIGIN } from '../content/site'
import { useDocumentMeta } from '../lib/documentMeta'
import JsonLd from '../lib/JsonLd'

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

const Php2shellAdvisoryPage = () => {
  useDocumentMeta({
    title: PHP2SHELL_ADVISORY.documentTitle,
    description: PHP2SHELL_ADVISORY.description,
    canonical: PHP2SHELL_ADVISORY.canonical,
  })

  return (
    <div className="min-h-screen bg-dark-bg">
      <JsonLd data={articleJson} />
      <JsonLd data={faqJson} />
      <Header />
      <main className="pt-32 pb-20">
        <article className="section-container">
          <header className="max-w-3xl mb-12">
            <p className="text-primary-500 font-bold tracking-widest uppercase mb-4">
              {PHP2SHELL_ADVISORY.kicker}
            </p>
            <h1 className="section-title">{PHP2SHELL_ADVISORY.title}</h1>
            <p className="section-subtitle mx-0">{PHP2SHELL_ADVISORY.lead}</p>
            <p className="text-gray-500 mt-4">
              Published {PHP2SHELL_ADVISORY.published}. Updated {PHP2SHELL_ADVISORY.updated}.
            </p>
          </header>

          <div className="grid gap-6 max-w-3xl">
            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">Who this attack hits</h2>
              <p className="text-gray-300 leading-relaxed">{PHP2SHELL_ADVISORY.whoItHits}</p>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">Is block08.com affected?</h2>
              <p className="text-gray-300 leading-relaxed">{PHP2SHELL_ADVISORY.siteStatus}</p>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">How Block08 can help</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{PHP2SHELL_ADVISORY.whatWeDo}</p>
              <Link to={PHP2SHELL_ADVISORY.contactHref} className="btn-primary">
                {PHP2SHELL_ADVISORY.contactLabel}
              </Link>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">Fixed PHP versions</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-200">
                {PHP2SHELL_ADVISORY.patchedVersions.map((version) => (
                  <li key={version} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    {version}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 space-y-2 text-gray-300">
                {PHP2SHELL_ADVISORY.cves.map((cve) => (
                  <li key={cve.id}>
                    <strong className="text-white">{cve.id}</strong>
                    {`: ${cve.name}`}
                  </li>
                ))}
              </ul>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">What to do now</h2>
              <ol className="space-y-4">
                {PHP2SHELL_ADVISORY.actions.map((action, index) => (
                  <li key={action.title}>
                    <p className="text-white font-semibold">
                      {`${index + 1}. ${action.title}`}
                    </p>
                    <p className="text-gray-300 leading-relaxed">{action.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">PHP2Shell questions</h2>
              <div className="space-y-6">
                {PHP2SHELL_ADVISORY.faqs.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">Official sources</h2>
              <ul className="space-y-3">
                {PHP2SHELL_ADVISORY.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      className="text-primary-500 hover:text-primary-400"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Php2shellAdvisoryPage

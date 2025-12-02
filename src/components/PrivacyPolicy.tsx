const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-2xl shadow-2xl border-b border-white/10">
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/Block08-logo.svg"
                  alt="Block08 Security Audits"
                  className="h-12 w-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-400">
                Last Updated: December 2, 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Block08 Security Audits ("Block08," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                  <li>Request a security audit or consultation</li>
                  <li>Contact us through our website or email</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Participate in surveys or provide feedback</li>
                  <li>Apply for employment opportunities</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The personal information we may collect includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and business information</li>
                  <li>Project details and technical information</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When you access our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Providing, maintaining, and improving our security audit services</li>
                  <li>Processing audit requests and delivering reports</li>
                  <li>Communicating with you about services, updates, and security alerts</li>
                  <li>Responding to inquiries and providing customer support</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Detecting, preventing, and addressing security incidents</li>
                  <li>Complying with legal obligations and enforcing our terms</li>
                  <li>Sending marketing communications (with your consent)</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Service Providers</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                  <li>Cloud hosting and data storage providers</li>
                  <li>Payment processing services</li>
                  <li>Email and communication platforms</li>
                  <li>Analytics and monitoring services</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Legal Requirements</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may disclose your information when required by law or in response to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                  <li>Legal processes or government requests</li>
                  <li>Protection of our rights, property, or safety</li>
                  <li>Investigation of potential violations</li>
                  <li>Prevention of fraud or security threats</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Business Transfers</h3>
                <p className="text-gray-300 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </section>

              {/* Data Security */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Data Retention */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Data Retention</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods may vary based on:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>The nature of the information collected</li>
                  <li>Legal and regulatory requirements</li>
                  <li>Ongoing business relationships</li>
                  <li>Dispute resolution and legal claims</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li><strong className="text-white">Access:</strong> Request copies of your personal information</li>
                  <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-white">Objection:</strong> Object to processing of your personal information</li>
                  <li><strong className="text-white">Restriction:</strong> Request restriction of processing</li>
                  <li><strong className="text-white">Portability:</strong> Request transfer of your data</li>
                  <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  To exercise these rights, please contact us at <a href="mailto:security@block08.com" className="text-primary-500 hover:text-primary-400">security@block08.com</a>. We will respond to your request within a reasonable timeframe.
                </p>
              </section>

              {/* Cookies */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Types of cookies we use:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </section>

              {/* Third-Party Links */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Third-Party Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              {/* International Transfers */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your information may be transferred to and maintained on computers located outside of your country or jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Contact */}
              <section className="card">
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Block08 Security Audits</strong></p>
                  <p>A Division of Route07 Information Technology</p>
                  <p>Muscat, Oman</p>
                  <p>Email: <a href="mailto:security@block08.com" className="text-primary-500 hover:text-primary-400">security@block08.com</a></p>
                  <p>Security: <a href="mailto:security@block08.com" className="text-primary-500 hover:text-primary-400">security@block08.com</a></p>
                </div>
              </section>

              {/* GDPR/CCPA Notice */}
              <section className="card bg-gradient-to-br from-primary-600/10 to-primary-700/10 border-primary-600/20">
                <h2 className="text-2xl font-bold text-white mb-4">GDPR & Data Protection Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). Block08 aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For California residents, you have specific rights under the California Consumer Privacy Act (CCPA). Please contact us to exercise your rights under applicable data protection laws.
                </p>
              </section>
            </div>

            {/* Back to Top Button */}
            <div className="mt-12 text-center">
              <button
                onClick={scrollToTop}
                className="btn-primary inline-flex items-center"
              >
                Back to Top
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="section-container">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 Block08 Security Audits. A division of Route07 Information Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy


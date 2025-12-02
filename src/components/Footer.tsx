import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="section-container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6 group cursor-pointer" onClick={scrollToTop}>
              <img
                src="/Block08-logo.svg"
                alt="Block08 Security Audits"
                className="h-11 w-auto group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Enterprise-grade smart contract security audits and blockchain security services.
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Muscat, Oman
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary-500 text-sm transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary-500 transition-all mr-0 group-hover:mr-2"></span>
                  Smart Contract Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary-500 text-sm transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary-500 transition-all mr-0 group-hover:mr-2"></span>
                  Formal Verification
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary-500 text-sm transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary-500 transition-all mr-0 group-hover:mr-2"></span>
                  Security Monitoring
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary-500 text-sm transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary-500 transition-all mr-0 group-hover:mr-2"></span>
                  Incident Response
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-primary-500 text-sm transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary-500 transition-all mr-0 group-hover:mr-2"></span>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-gray-400 hover:text-primary-500 text-sm transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary-500 transition-all mr-0 group-hover:mr-2"></span>
                  Our Process
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-500 text-sm transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary-500 transition-all mr-0 group-hover:mr-2"></span>
                  Sample Reports
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-primary-500 text-sm transition-colors inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary-500 transition-all mr-0 group-hover:mr-2"></span>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Connect</h4>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all hover:scale-110"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
            <a href="mailto:security@block08.com" className="text-gray-400 hover:text-primary-500 text-sm transition-colors flex items-center group">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              security@block08.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Block08 Security Audits. A division of{' '}
              <span className="text-gray-400 font-semibold">Route07 Information Technology</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <button
                onClick={scrollToTop}
                className="text-sm text-gray-500 hover:text-primary-500 transition-all flex items-center group"
              >
                Back to top
                <svg className="w-4 h-4 ml-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

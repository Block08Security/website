const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(239 68 68 / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-600/10 border border-primary-600/20 rounded-full mb-8">
            <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-primary-600">Enterprise-Grade Security</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smart Contract
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
              Security Audits
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive security audits and formal verification for blockchain protocols.
            <br className="hidden md:block" />
            Trusted by leading Web3 projects worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Request Security Audit
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Services
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 animate-slide-up">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-500/20 blur-3xl" />
            <div className="relative bg-dark-card border border-dark-border rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-sm text-gray-400">Contracts Audited</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Security Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">0</div>
                  <div className="text-sm text-gray-400">Critical Exploits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


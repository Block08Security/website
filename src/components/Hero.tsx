const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-600/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-700/20 to-transparent rounded-full blur-3xl animate-pulse animate-delay-1s" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-600"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Enterprise-Grade Security</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white mb-2">Smart Contract</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 animate-gradient">
              Security Audits
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive security audits and formal verification for blockchain protocols.
            <br className="hidden md:block" />
            <span className="text-gray-400">Protecting your Web3 infrastructure with precision and expertise.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg group"
            >
              Request Security Audit
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-lg"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Hero Visual - Enhanced Stats */}
        <div className="mt-16 animate-slide-up">
          <div className="relative max-w-5xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 via-primary-500/30 to-primary-600/30 blur-3xl opacity-50" />
            
            {/* Glass Card */}
            <div className="relative glass-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-primary-600/20 blur-xl rounded-full" />
                    <div className="relative text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary-500 to-primary-700 bg-clip-text text-transparent">
                      10+
                    </div>
                  </div>
                  <div className="text-gray-400 font-medium">Projects Secured</div>
                </div>
                <div className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-primary-600/20 blur-xl rounded-full" />
                    <div className="relative text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary-500 to-primary-700 bg-clip-text text-transparent">
                      24/7
                    </div>
                  </div>
                  <div className="text-gray-400 font-medium">Monitoring Available</div>
                </div>
                <div className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-emerald-600/20 blur-xl rounded-full" />
                    <div className="relative text-5xl md:text-6xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                      0
                    </div>
                  </div>
                  <div className="text-gray-400 font-medium">Post-Audit Exploits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero


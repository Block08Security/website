const Highlights = () => {
  const highlights = [
    {
      number: '10+',
      label: 'Projects Secured',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      number: 'Zero',
      label: 'Post-Audit Exploits',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      number: '24/7',
      label: 'Security Monitoring',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      number: 'Expert',
      label: 'Formal Verification',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-primary-500 to-primary-700',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="absolute inset-0 bg-primary-600/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const delays = ['', 'animate-delay-100', 'animate-delay-200', 'animate-delay-300']
            return (
              <div
                key={index}
                className={`group text-center animate-fade-in ${delays[index]}`}
              >
              {/* Icon Container */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 blur-2xl rounded-full scale-150 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className={`text-primary-500 group-hover:scale-110 transition-transform`}>
                    {highlight.icon}
                  </div>
                </div>
              </div>

              {/* Number */}
              <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-br ${highlight.gradient} bg-clip-text text-transparent`}>
                {highlight.number}
              </div>

              {/* Label */}
              <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                {highlight.label}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default Highlights

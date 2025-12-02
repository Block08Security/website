const Experience = () => {
  const stats = [
    { value: '100+', label: 'Audits Completed' },
    { value: '500+', label: 'Vulnerabilities Found' },
    { value: '$2B+', label: 'Assets Secured' },
    { value: '50+', label: 'Web3 Projects' },
  ]

  const testimonials = [
    {
      quote: "Block08's thorough audit process gave us complete confidence in our smart contract security. Their team identified critical issues we missed.",
      author: 'DeFi Protocol Founder',
      role: 'Leading DeFi Platform',
    },
    {
      quote: 'The formal verification service provided mathematical certainty for our core financial logic. Exceptional expertise in blockchain security.',
      author: 'CTO',
      role: 'NFT Marketplace',
    },
    {
      quote: 'Their 24/7 monitoring caught a potential exploit before it could cause damage. Block08 is an invaluable security partner.',
      author: 'Security Lead',
      role: 'DAO Governance Platform',
    },
  ]

  return (
    <section className="section-padding bg-dark-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Trusted by Leading Web3 Projects</h2>
          <p className="section-subtitle">
            Securing the decentralized future with proven expertise
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-primary-600/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-dark-border">
          <div className="text-center mb-8">
            <p className="text-gray-400">Certifications & Partnerships</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {/* Placeholder for logos/badges */}
            <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="text-gray-500 font-semibold">Certified Security</span>
            </div>
            <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="text-gray-500 font-semibold">Route07 Division</span>
            </div>
            <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <span className="text-gray-500 font-semibold">Web3 Security Alliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


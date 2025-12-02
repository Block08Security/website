const About = () => {
  const team = [
    {
      role: 'Security Researchers',
      description: 'Expert researchers with deep knowledge of blockchain security and smart contract vulnerabilities',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      role: 'Solidity Experts',
      description: 'Senior developers with extensive experience in secure smart contract development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      role: 'Formal Verification Specialists',
      description: 'PhDs and researchers specializing in formal methods and mathematical verification',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Block08</h2>
          <p className="section-subtitle">
            Specialized security division of Route07 Information Technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Company Background */}
          <div className="card mb-8 animate-fade-in">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                <span className="font-semibold text-white">Block08 Security Audits</span> is a specialized division of{' '}
                <span className="text-primary-600 font-semibold">Route07 Information Technology</span>, 
                focused exclusively on blockchain security and smart contract auditing services.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Based in <span className="text-white font-semibold">Muscat, Oman</span>, we serve Web3 projects 
                worldwide, providing enterprise-grade security solutions for the decentralized ecosystem. Our mission 
                is to secure the Web3 future through rigorous audits, formal verification, and continuous security monitoring.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We combine cutting-edge security research with practical smart contract expertise to identify and 
                mitigate vulnerabilities before they can be exploited. Our team has audited over 100 smart contracts, 
                securing billions of dollars in digital assets across DeFi protocols, NFT platforms, DAOs, and 
                blockchain infrastructure.
              </p>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600/10 rounded-lg text-primary-600 mb-4">
                    {member.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{member.role}</h4>
                  <p className="text-sm text-gray-400">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="card bg-gradient-to-br from-primary-600/10 to-primary-600/5 border-primary-600/20 animate-fade-in">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600/20 rounded-full text-primary-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Securing the Web3 ecosystem through rigorous security audits, formal verification, 
                and continuous monitoring—empowering developers to build with confidence.
              </p>
            </div>
          </div>

          {/* Route07 Connection */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-dark-card border border-dark-border rounded-full">
              <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">
                Powered by{' '}
                <span className="font-semibold text-white">Route07 Information Technology</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


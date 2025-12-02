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
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-500 font-bold text-base md:text-lg tracking-widest uppercase">Who We Are</span>
          </div>
          <h2 className="section-title">About Block08</h2>
          <p className="section-subtitle">
            Specialized security division of Route07 Information Technology
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Company Background */}
          <div className="card mb-12 animate-fade-in">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Block08 Security Audits</span> is a specialized division of{' '}
                <span className="text-primary-500 font-bold">Route07 Information Technology</span>, 
                focused exclusively on blockchain security and smart contract auditing services.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Based in <span className="text-white font-semibold">Muscat, Oman</span>, we serve Web3 projects 
                worldwide, providing enterprise-grade security solutions for the decentralized ecosystem. Our mission 
                is to secure the Web3 future through rigorous audits, formal verification, and continuous security monitoring.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We combine cutting-edge security research with practical smart contract expertise to identify and 
                mitigate vulnerabilities before they can be exploited. Building secure, reliable blockchain infrastructure 
                for the future of decentralized applications.
              </p>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, index) => {
                const delays = ['', 'animate-delay-100', 'animate-delay-200']
                return (
                  <div
                    key={index}
                    className={`card group animate-slide-up ${delays[index]}`}
                  >
                  <div className="relative inline-flex items-center justify-center w-14 h-14 mb-6">
                    <div className="absolute inset-0 bg-primary-600/20 blur-xl rounded-full" />
                    <div className="relative bg-gradient-to-br from-primary-600/20 to-primary-700/20 rounded-2xl p-4 text-primary-500 group-hover:scale-110 transition-transform">
                      {member.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{member.role}</h4>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </div>
              )})}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="card relative overflow-hidden animate-fade-in group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-700/5" />
            <div className="relative text-center py-8">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-600/30 blur-2xl rounded-full" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary-600/20 to-primary-700/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Securing the Web3 ecosystem through rigorous security audits, formal verification, 
                and continuous monitoring—empowering developers to build with confidence.
              </p>
            </div>
          </div>

          {/* Route07 Connection */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-flex items-center px-8 py-4 glass-card hover:border-primary-500/50 transition-all group">
              <div className="relative mr-4">
                <div className="absolute inset-0 bg-primary-600/20 blur-lg rounded-full" />
                <svg className="relative w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-300 font-medium">
                Powered by{' '}
                <span className="font-bold text-white">Route07 Information Technology</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

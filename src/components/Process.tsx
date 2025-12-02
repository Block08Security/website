const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Requirements gathering and scope definition for your smart contract audit',
    },
    {
      number: '02',
      title: 'Code Review',
      description: 'Manual review by security experts with deep blockchain expertise',
    },
    {
      number: '03',
      title: 'Automated Testing',
      description: 'Static analysis, fuzzing, and symbolic execution to find vulnerabilities',
    },
    {
      number: '04',
      title: 'Formal Verification',
      description: 'Mathematical proofs for critical functions and business logic',
    },
    {
      number: '05',
      title: 'Report Delivery',
      description: 'Detailed findings with severity classifications and recommendations',
    },
    {
      number: '06',
      title: 'Remediation Support',
      description: 'Guidance on fixing vulnerabilities and re-verification of fixes',
    },
  ]

  return (
    <section id="process" className="section-padding bg-dark-bg">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Audit Process</h2>
          <p className="section-subtitle">
            A systematic approach to identifying and mitigating security vulnerabilities
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="text-5xl font-bold text-primary-600/20 font-display">
                        {step.number}
                      </div>
                    </div>
                    <div className="ml-6 mt-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-dark-card border border-dark-border rounded-full">
            <svg
              className="w-5 h-5 text-primary-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-300">
              <span className="font-semibold text-white">Typical audit duration:</span> 2-4 weeks
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process


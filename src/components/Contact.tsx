import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ACTIVE_ADVISORY, ADVISORY_HELP_PARAM } from '../content/advisories'
import {
  CONTACT_MAIL_SUBJECT_PREFIX,
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
} from '../content/site'
import { buildMailto } from '../lib/mailto'

const Contact = () => {
  const [searchParams] = useSearchParams()
  const [mailHint, setMailHint] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Audit',
    message: '',
  })

  useEffect(() => {
    const help = searchParams.get(ADVISORY_HELP_PARAM)
    const prefill = ACTIVE_ADVISORY?.prefill
    if (!help || !prefill || help !== prefill.helpValue) {
      return
    }
    setFormData((current) => ({
      ...current,
      projectType: prefill.projectType,
      message: current.message || prefill.message,
    }))
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `${CONTACT_MAIL_SUBJECT_PREFIX} - ${formData.projectType}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Project Type: ${formData.projectType}`,
      '',
      'Message:',
      formData.message,
    ].join('\n')
    const mailtoLink = buildMailto(SITE_EMAIL, subject, body)
    setMailHint(`If your email app did not open, tap ${SITE_EMAIL} or copy the address and send this note yourself.`)
    window.location.assign(mailtoLink)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary-500 font-bold text-base md:text-lg tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="section-title">Secure Your Systems Today</h2>
          <p className="section-subtitle">
            Get in touch with our security experts to discuss your project
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-dark-bg/50 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-dark-bg/50 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-300 mb-3">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-dark-bg/50 border border-white/10 rounded-xl text-base text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all backdrop-blur-sm"
                    >
                      <option value="Audit">Smart Contract Audit</option>
                      <option value="Web Application Penetration Testing">Web Application Penetration Testing</option>
                      <option value="Source Code Security Audit">Source Code Security Audit</option>
                      <option value="Database Security Assessment">Database Security Assessment</option>
                      <option value="Monitoring">Security Monitoring</option>
                      <option value="Incident Response">Incident Response</option>
                      <option value="Training">Security Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-5 py-4 bg-dark-bg/50 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none backdrop-blur-sm"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg group">
                    Open email to {SITE_EMAIL}
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <p className="text-sm text-gray-400">
                    This opens your mail app with a message addressed to{' '}
                    <a href={buildMailto(SITE_EMAIL, CONTACT_MAIL_SUBJECT_PREFIX, '')} className="text-primary-500 break-all">
                      {SITE_EMAIL}
                    </a>
                    . If nothing opens, tap the address.
                  </p>
                  {mailHint && <p className="text-sm text-primary-300">{mailHint}</p>}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up space-y-6">
              {/* Email */}
              <div className="card group md:hover:scale-105 transition-all">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-600/20 blur-xl rounded-full" />
                      <div className="relative w-14 h-14 bg-gradient-to-br from-primary-600/20 to-primary-700/20 rounded-2xl flex items-center justify-center text-primary-500">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="ml-5 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <a href={buildMailto(SITE_EMAIL, CONTACT_MAIL_SUBJECT_PREFIX, '')} className="text-primary-500 hover:text-primary-400 font-semibold transition-colors break-all">
                      {SITE_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Emergency Hotline */}
              <div className="card group md:hover:scale-105 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-primary-700/10" />
                <div className="relative flex items-start">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-600/30 blur-xl rounded-full animate-pulse" />
                      <div className="relative w-14 h-14 bg-gradient-to-br from-primary-600/30 to-primary-700/30 rounded-2xl flex items-center justify-center text-primary-500">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-white mb-2">24/7 Emergency Hotline</h3>
                    <a href={SITE_PHONE_HREF} className="text-primary-500 font-bold text-lg">
                      {SITE_PHONE_DISPLAY}
                    </a>
                    <p className="text-sm text-gray-400 mt-2">For critical security incidents</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card group md:hover:scale-105 transition-all">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-600/20 blur-xl rounded-full" />
                      <div className="relative w-14 h-14 bg-gradient-to-br from-primary-600/20 to-primary-700/20 rounded-2xl flex items-center justify-center text-primary-500">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-300 font-semibold">Muscat, Oman</p>
                    <p className="text-sm text-gray-400 mt-1">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="card group md:hover:scale-105 transition-all">
                <div className="flex items-center text-center justify-center py-4">
                  <div className="relative mr-4">
                    <div className="absolute inset-0 bg-primary-600/20 blur-xl rounded-full" />
                    <svg className="relative w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-lg">24-hour response time</p>
                    <p className="text-sm text-gray-400">for assessment requests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', isMenuOpen)
    return () => document.documentElement.classList.remove('nav-open')
  }, [isMenuOpen])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    if (!isHome) {
      navigate(`/#${id}`)
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 print:hidden ${
        isScrolled || !isHome || isMenuOpen
          ? 'bg-dark-bg/80 backdrop-blur-2xl shadow-2xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group min-w-0" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/Block08-logo.svg"
              alt="Block08 Security Audits"
              className="h-10 sm:h-12 w-auto max-w-[70vw] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <Link
              to="/assess"
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
            >
              Free Test
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/audits"
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
            >
              Registry
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full" />
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full" />
            </button>
            <Link to="/assess" className="btn-primary text-sm">
              Free Assessment
            </Link>
          </nav>

          <button
            type="button"
            className="site-nav-toggle md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className={isMenuOpen ? 'site-nav-bar is-close-top' : 'site-nav-bar'} />
            <span className={isMenuOpen ? 'site-nav-bar is-hidden' : 'site-nav-bar'} />
            <span className={isMenuOpen ? 'site-nav-bar is-close-bottom' : 'site-nav-bar'} />
          </button>
        </div>

        {isMenuOpen && (
          <nav id="mobile-nav" className="site-nav-panel md:hidden">
            <button type="button" onClick={() => scrollToSection('services')}>
              Services
            </button>
            <Link to="/assess">Free Test</Link>
            <Link to="/audits">Registry</Link>
            <button type="button" onClick={() => scrollToSection('about')}>
              About
            </button>
            <button type="button" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
            <Link to="/assess" className="btn-primary w-full">
              Free Assessment
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

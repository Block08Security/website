import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
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

  const scrollToSection = (id: string) => {
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
        isScrolled || !isHome
          ? 'bg-dark-bg/80 backdrop-blur-2xl shadow-2xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img
              src="/Block08-logo.svg"
              alt="Block08 Security Audits"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
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

          <Link
            to="/assess"
            aria-label="Free assessment"
            className="md:hidden text-white hover:text-primary-500 transition-colors font-medium"
          >
            Test
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

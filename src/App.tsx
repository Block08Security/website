import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import AssessPage from './pages/AssessPage'
import PendingAssessPage from './pages/PendingAssessPage'
import AuditsPage from './pages/AuditsPage'
import AuditReportPage from './pages/AuditReportPage'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (!id) {
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assess" element={<AssessPage />} />
        <Route path="/assess/pending" element={<PendingAssessPage />} />
        <Route path="/audits" element={<AuditsPage />} />
        <Route path="/audits/:reportId" element={<AuditReportPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App


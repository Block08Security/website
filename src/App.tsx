import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

function HomePage() {
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App


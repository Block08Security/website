import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Services from './components/Services'
import Process from './components/Process'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Process />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App


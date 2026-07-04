import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <ScrollProgress />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
      <BackToTop />
    </div>
  )
}

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import LandingPage from './pages/LandingPage'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <ScrollProgress />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <LandingPage />
      <Footer />
      <BackToTop />
    </div>
  )
}

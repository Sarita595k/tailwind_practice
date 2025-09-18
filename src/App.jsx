import './App.css'
import { Features } from './Components/Features'
import { HeroSection } from './Components/HeroSection'
import { Navbar } from './Components/Navbar'
import { Testimonials } from './Components/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
    </>
  )
}

export default App

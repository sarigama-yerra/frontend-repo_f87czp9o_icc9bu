import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Brands from './components/Brands'
import Consultation from './components/Consultation'
import Gallery from './components/Gallery'
import Bestsellers from './components/Bestsellers'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#F6F5F3] text-[#0D0D0D]">
      <Hero />
      <ValueProps />
      <Brands />
      <Consultation />
      <Gallery />
      <Bestsellers />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App

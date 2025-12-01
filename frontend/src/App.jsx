import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import page components (to be created)
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Technology from './pages/Technology'
import Impact from './pages/Impact'
import News from './pages/News'
import Careers from './pages/Careers'
import Contact from './pages/Contact' 
// Products & Services (new)
import ProductsIndex from './app/products/index'
import PortableBiogasPlant from './app/products/portable-biogas-plant'
import BiomassBriquette from './app/products/biomass-briquette'
import CoirProducts from './app/products/coir-products'
import OrganicBooster from './app/products/organic-booster'
import ServicesPage from './app/services/index'
import ConsultancyDetails from './app/services/consultancy'
import ZeroWastePage from './app/services/zero-waste'
import PlantsPage from './app/services/plants'
import WasteBankPage from './app/services/waste-bank'
import BioCNGPage from './app/services/plants/bio-cng'
import BioCoalPage from './app/services/plants/bio-coal'
import CoirPage from './app/services/plants/coir'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Added pt-16 to account for navbar height */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/portable-biogas-plant" element={<PortableBiogasPlant />} />
            <Route path="/products/biomass-briquette" element={<BiomassBriquette />} />
            <Route path="/products/coir-products" element={<CoirProducts />} />
            <Route path="/products/organic-booster" element={<OrganicBooster />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/consultancy" element={<ConsultancyDetails />} />
            <Route path="/services/zero-waste" element={<ZeroWastePage />} />
            <Route path="/services/plants" element={<PlantsPage />} />
            <Route path="/services/plants/bio-cng" element={<BioCNGPage />} />
            <Route path="/services/plants/bio-coal" element={<BioCoalPage />} />
            <Route path="/services/plants/coir" element={<CoirPage />} />
            <Route path="/services/waste-bank" element={<WasteBankPage />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
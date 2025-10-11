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
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
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
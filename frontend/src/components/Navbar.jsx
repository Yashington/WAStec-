import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">WAStec</span>
              <span className="ml-2 text-sm text-gray-600 hidden md:block">Kukreja's Bio-Gas Pvt. Ltd.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
            <Link to="/projects" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
            <Link to="/technology" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Technology</Link>
            <Link to="/impact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Impact</Link>
            <Link to="/news" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">News</Link>
            <Link to="/careers" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Careers</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Link to="/projects" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link to="/technology" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Technology</Link>
            <Link to="/impact" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Impact</Link>
            <Link to="/news" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">News</Link>
            <Link to="/careers" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Careers</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.jpg" alt="WAStec Logo" className="h-14 w-auto" />
              {/* <span className="ml-2 text-sm text-gray-600 hidden md:block">Kukreja's Bio-Gas Pvt. Ltd.</span> */}
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Home
              </a>
    
            <a 
              href="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              About Us
            </a>
            <a 
              href="/projects" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/projects') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Projects
            </a>
            <a 
              href="/technology" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/technology') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Technology
            </a>
            <a 
              href="/impact" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/impact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Impact
            </a>
            <a 
              href="/news" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/news') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              News
            </a>
            <a 
              href="/careers" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/careers') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Careers
            </a>
            <a 
              href="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
            <a 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="/projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/projects') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="/products" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/products') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Products
            </a>
            <a 
              href="/technology" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/technology') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </a>
            <a 
              href="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/services') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Services
            </a>
            <a 
              href="/impact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/impact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </a>
            <a 
              href="/news" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/news') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </a>
            <a 
              href="/careers" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/careers') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
            <a 
              href="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
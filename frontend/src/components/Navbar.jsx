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
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.jpg" alt="WAStec Logo" className="h-12 w-auto max-h-12" />
              {/* <span className="ml-2 text-sm text-gray-600 hidden md:block">Kukreja's Bio-Gas Pvt. Ltd.</span> */}
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
            <Link 
              to="/" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/about') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/projects" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/projects') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/products" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/products') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/services') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/technology" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/technology') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Technology
            </Link>
            <Link 
              to="/impact" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/impact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Impact
            </Link>
            <Link 
              to="/news" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/news') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              News
            </Link>
            <Link 
              to="/careers" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/careers') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`px-2 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
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
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/projects') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/products" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/products') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/services') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/technology" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/technology') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              to="/impact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/impact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </Link>
            <Link 
              to="/news" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/news') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/careers" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/careers') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
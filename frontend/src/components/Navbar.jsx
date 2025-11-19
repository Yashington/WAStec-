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
              <img src="/logo.jpg" alt="WAStec Logo" className="h-14 w-auto" />
              {/* <span className="ml-2 text-sm text-gray-600 hidden md:block">Kukreja's Bio-Gas Pvt. Ltd.</span> */}
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/projects" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/projects') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/products" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/products') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/technology" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/technology') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Technology
            </Link>
            <Link 
              to="/services" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/services') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/impact" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/impact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Impact
            </Link>
            <Link 
              to="/news" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/news') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              News
            </Link>
            <Link 
              to="/careers" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/careers') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </Link>
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
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/projects') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/products" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/products') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/technology" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/technology') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Technology
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/services') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/impact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/impact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Impact
            </Link>
            <Link 
              to="/news" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/news') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              News
            </Link>
            <Link 
              to="/careers" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/careers') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
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
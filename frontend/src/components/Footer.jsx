import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">kukreja's WAStec Bio-Gas Pvt Ltd.</h3>
            <p className="text-gray-300 mb-4">
              BARC-incubated startup specializing in biogas purification and waste upcycling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href='/' className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="/technology" className="text-gray-300 hover:text-white">Technology</a></li>
              <li><a href="/impact" className="text-gray-300 hover:text-white">Impact</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/news" className="text-gray-300 hover:text-white">News & Media</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Knowledge Hub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investor Relations</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">AIC-BARC, 1st Flr, DAE Con,</p>
              <p className="mb-2">Anushaktinagar, Mumbai, 400094</p>
              <p className="mb-2">Email: <a href="mailto:wastec.biogas@gmail.com" className="hover:text-white">wastec.biogas@gmail.com</a></p>
              <p>Phone: <a href="tel:+91 9136038843" className="hover:text-white">+91 9136038843</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} kukreja's WAStec Bio-Gas Pvt Ltd. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            "Turning Waste into Worth" | "Waste to Wealth. Science to Sustainability."
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Powered by BARC Incubation
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
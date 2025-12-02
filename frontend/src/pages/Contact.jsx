import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { submitContactForm } from '../services/api'
import GoogleMap from '../components/GoogleMap'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  // Load Google Maps script
  useEffect(() => {
    const googleMapsApiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
    
    // Check if API key is provided
    if (!googleMapsApiKey) {
      console.warn('Google Maps API key is not set. Map will not be displayed.');
      setIsMapLoaded(false);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsMapLoaded(true);
    script.onerror = () => {
      console.error('Failed to load Google Maps script');
      setIsMapLoaded(false);
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)
    
    try {
      const response = await submitContactForm(formData)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitError('Failed to submit your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Coordinates for AIC-BARC, Mumbai
  const mapCenter = {
    lat: 19.076090, // Mumbai latitude
    lng: 72.877426  // Mumbai longitude
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Get in touch with our team for partnerships, inquiries, or collaborations
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Get In Touch</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We'd Love to Hear From You
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-600">+91-9876543210</p>
              <p className="mt-1 text-gray-600">Mon-Fri from 9AM to 6PM</p>
              <p className="mt-1 text-gray-600">+91-9876543211 (Support)</p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">contact@wastec.in</p>
              <p className="mt-1 text-gray-600">General inquiries</p>
              <p className="mt-1 text-gray-600">careers@wastec.in</p>
              <p className="mt-1 text-gray-600">partnerships@wastec.in</p>
              <p className="mt-1 text-gray-600">support@wastec.in</p>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Office</h3>
              <address className="mt-2 text-gray-600 not-italic">
                AIC-BARC, 1st Floor, DAE Convention Centre,<br />
                Anushaktinagar, Mumbai, Maharashtra 400094<br />
                India
              </address>
              <p className="mt-2 text-gray-600">Near Trombay Railway Station</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              <p className="mt-2 text-gray-600">
                Have questions about our technology or services? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitSuccess && (
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Your message has been sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {submitError}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md transition duration-150 ease-in-out sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
              <p className="mt-2 text-gray-600">
                Visit our office at the Advanced Innovation Centre of Bhabha Atomic Research Centre.
              </p>

              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-gray-200" style={{ height: '384px' }}>
                {isMapLoaded ? (
                  <GoogleMap center={mapCenter} zoom={15} />
                ) : (
                  <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">Loading Map...</h3>
                      <p className="mt-1 text-sm text-gray-500">Please wait while we load Google Maps</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900">Follow Us</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-green-600">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Waste?
            </h2>
            <p className="mt-4 text-lg text-green-100">
              Join us in building a sustainable future with clean energy solutions.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
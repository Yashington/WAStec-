import { Link } from 'react-router-dom'
import { useState } from 'react'
import { submitCareerApplication } from '../services/api'

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const jobOpenings = [
    {
      id: 1,
      title: "Biogas Process Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years"
    },
    {
      id: 2,
      title: "Sustainability Consultant",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      id: 3,
      title: "Research Scientist",
      department: "R&D",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Sales",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-6 years"
    }
  ]

  const challenges = [
    {
      id: 1,
      title: "Waste-to-Energy Innovation Challenge",
      description: "Calling student innovators to develop new solutions for waste processing",
      deadline: "November 30, 2025",
      prize: "₹1,00,000"
    },
    {
      id: 2,
      title: "Sustainable Startup Incubation",
      description: "Supporting early-stage ventures in waste management and clean energy",
      deadline: "Rolling Applications",
      prize: "Funding & Mentorship"
    }
  ]

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
      const response = await submitCareerApplication(formData)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: ''
      })
    } catch (error) {
      setSubmitError('Failed to submit your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Careers at WAStec
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Join us in building a sustainable future through innovative waste-to-energy solutions
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Why WAStec?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Make a Difference While Building Your Career
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Meaningful Work</h3>
                <p className="mt-2 text-gray-600">
                  Contribute to solving one of the world's most pressing environmental challenges while advancing your career.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Innovation</h3>
                <p className="mt-2 text-gray-600">
                  Work with cutting-edge biogas technology developed in partnership with Bhabha Atomic Research Centre.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Collaborative Culture</h3>
                <p className="mt-2 text-gray-600">
                  Join a diverse team of environmental scientists, engineers, and business professionals working toward a common goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Join Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Current Openings
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore opportunities to make a difference in sustainable waste management
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {jobOpenings.map((job) => (
                  <li key={job.id}>
                    <Link to="#" className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-medium text-green-600 truncate">{job.title}</p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {job.department}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {job.experience}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p>{job.location}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="#" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                View All Openings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Student Challenges */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Student Opportunities</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Innovation Challenges & Internships
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Calling student innovators and researchers to join our sustainability mission
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-md p-6 border border-green-100">
                <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                <p className="mt-2 text-gray-600">{challenge.description}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Deadline: {challenge.deadline}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Prize: {challenge.prize}
                  </span>
                </div>
                <div className="mt-6">
                  <Link to="#" className="text-green-600 hover:text-green-800 font-medium">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Internship Inquiry Form */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-green-200">Get in Touch</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
              Internship & Collaboration Inquiry
            </p>
            <p className="mt-4 max-w-2xl text-xl text-green-100 lg:mx-auto">
              Interested in joining our team or collaborating with us? Reach out!
            </p>
          </div>

          <div className="mt-12 bg-white bg-opacity-10 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Your application has been submitted successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 rounded-md">
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium text-white">
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
                      className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md text-gray-900 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-white">
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
                      className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md text-gray-900 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-white">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md text-gray-900 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="position" className="block text-sm font-medium text-white">
                    Position Interested In
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="position"
                      id="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md text-gray-900 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="experience" className="block text-sm font-medium text-white">
                    Relevant Experience
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      value={formData.experience}
                      onChange={handleChange}
                      className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md text-gray-900 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="py-2 px-3 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md text-gray-900 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-green-600 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers
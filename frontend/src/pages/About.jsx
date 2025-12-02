import { Link } from 'react-router-dom'
import manav from "../assets/images/manav.jpeg"
import biogas_plant from "../assets/images/biogas_analysis.jpg"
import coconut from "../assets/images/coconut.jpg"
import hotel_waste from "../assets/images/hotel_waste.png"

const About = () => {
  // Project data to showcase
  const projects = [
    {
      id: 1,
      title: "Biogas Purification Plant",
      description: "Advanced purification system converting raw biogas to CNG for automotive use",
      location: "Mumbai, Maharashtra",
      status: "Operational",
      feedstock: "Municipal organic waste",
      capacity: "500 kg/day",
      image: biogas_plant
    },
    {
      id: 2,
      title: "Coconut Waste Upcycling",
      description: "Transforming coconut shells and husks into briquettes and activated carbon",
      location: "Kochi, Kerala",
      status: "Operational",
      feedstock: "Coconut waste",
      capacity: "2 tons/day",
      image: coconut
    },
    {
      id: 3,
      title: "Hotel Waste Management",
      description: "Comprehensive waste-to-energy solution for large hospitality chains",
      location: "Goa",
      status: "Under Development",
      feedstock: "Food waste, organic matter",
      capacity: "1 ton/day",
      image: hotel_waste
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About WAStec Bio-Gas
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Pioneering sustainable waste management solutions since our BARC incubation
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Vision to Reality
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Our Founding Vision</h3>
                <p className="mt-4 text-lg text-gray-500">
                  Founded by Manav Kukreja, Kukreja's WAStec Bio-Gas Private Limited emerged from a vision to transform India's waste management landscape through innovative biogas technologies.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  As a BARC-incubated startup, we leverage the cutting-edge Nisargruna biphasic biomethanation process to convert organic waste into clean energy and valuable byproducts.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Our journey began with a commitment to scientific rigor and environmental responsibility, principles that continue to guide our operations today.
                </p>
                
                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="bg-green-100 p-2 rounded-full">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">BARC Incubation</h4>
                      <p className="mt-2 text-gray-600">
                        Proudly incubated at the Advanced Innovation Centre of Bhabha Atomic Research Centre (AIC-BARC)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="rounded-xl w-full h-96 flex items-center justify-center overflow-hidden ">
                  <img src={manav} alt="Manav Kukreja" className="w-full h-full object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Projects</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Waste Across India
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our operational and development projects demonstrating the power of sustainable waste management
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white">
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Operational' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-500">{project.location}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Icon</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Capacity: {project.capacity}</p>
                      <p className="text-sm text-gray-500">Feedstock: {project.feedstock}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              View All Projects
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div> */}

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-md border border-green-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-500">
                To become India's leading provider of sustainable waste-to-energy solutions, contributing significantly to the nation's clean energy goals and circular economy initiatives.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md border border-blue-100">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-500">
                To deploy innovative biogas purification and waste upcycling technologies that convert organic waste into clean energy and valuable products, reducing environmental impact while creating economic value.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold">Founder's Message</h3>
            <div className="mt-6 flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="rounded-xl w-32 h-32 flex items-center justify-center overflow-hidden">
                  <img src={manav} alt="Manav Kukreja" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <blockquote className="text-lg italic">
                  "At WAStec, we believe that waste is not an endpoint but a beginning. Every piece of organic waste represents an opportunity to generate clean energy, reduce greenhouse gas emissions, and create value for our communities. Our partnership with BARC has enabled us to bring world-class technology to address India's waste management challenges."
                </blockquote>
                <p className="mt-4 font-bold">- Manav Kukreja, Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Dedicated Professionals
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Experts in biogas technology, environmental science, and sustainable business practices
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="mx-auto rounded-full w-24 h-24 flex items-center justify-center overflow-hidden">
                  <img src={manav} alt="Manav Kukreja" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Manav Kukreja</h3>
                <p className="mt-2 text-green-600">Founder & CEO</p>
                <p className="mt-4 text-gray-500">
                  Environmental engineer with expertise in biogas technology and sustainable development
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">BARC Research Team</h3>
                <p className="mt-2 text-green-600">Technology Partners</p>
                <p className="mt-4 text-gray-500">
                  Scientists and researchers from Bhabha Atomic Research Centre supporting our technology development
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Operations Team</h3>
                <p className="mt-2 text-green-600">Project Implementation</p>
                <p className="mt-4 text-gray-500">
                  Experienced professionals managing plant operations and client relationships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AIC-BARC Connection */}
      <div className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Innovation Hub</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Innovation Centre - BARC
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">BARC Incubation Benefits</h3>
              <p className="mt-4 text-lg text-gray-500">
                Our association with Bhabha Atomic Research Centre's Advanced Innovation Centre provides us with:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-600">Access to cutting-edge biogas research and development</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-600">Scientific validation of our technologies</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-600">Access to government networks and policy support</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg text-gray-600">Credibility with investors and clients</p>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/technology" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Learn About Our Technology
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">AIC-BARC Facility Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
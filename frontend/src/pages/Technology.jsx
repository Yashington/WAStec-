import { Link } from 'react-router-dom'

const Technology = () => {
  const processSteps = [
    {
      id: 1,
      title: "Feedstock Input",
      description: "Organic waste collection and preprocessing",
      icon: "📥"
    },
    {
      id: 2,
      title: "Aerobic Digestion",
      description: "Initial breakdown of organic matter with oxygen",
      icon: "💨"
    },
    {
      id: 3,
      title: "Anaerobic Digestion",
      description: "Methane production in oxygen-free environment",
      icon: "🔍"
    },
    {
      id: 4,
      title: "Biogas Purification",
      description: "Removal of impurities to produce high-quality CNG",
      icon: "💧"
    },
    {
      id: 5,
      title: "Compression",
      description: "Pressurizing biogas for CNG applications",
      icon: "⛽"
    },
    {
      id: 6,
      title: "CNG Output",
      description: "Clean, compressed natural gas for vehicles and industries",
      icon: "🚗"
    }
  ]

  const researchItems = [
    {
      id: 1,
      title: "Nisargruna Biphasic Biomethanation",
      description: "BARC's patented two-stage process combining aerobic and anaerobic digestion",
      status: "Patented"
    },
    {
      id: 2,
      title: "Advanced H₂S Removal",
      description: "Innovative hydrogen sulfide removal technology for high-purity biogas",
      status: "Proprietary"
    },
    {
      id: 3,
      title: "Coconut Waste Valorization",
      description: "Specialized process for converting coconut waste into valuable products",
      status: "Developed"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Technology
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Powered by BARC's Nisargruna biphasic biomethanation process
            </p>
          </div>
        </div>
      </div>

      {/* Niasarguna Highlight Section */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-green-200">Technology Spotlight</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
              Nisargruna Biphasic Biomethanation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-green-100 lg:mx-auto">
              The foundation of our waste-to-energy innovation
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">BARC's Revolutionary Technology</h3>
              <p className="mt-4 text-lg text-green-100">
                The Nisargruna technology, developed by Bhabha Atomic Research Centre, represents a breakthrough in biogas production. This patented biphasic biomethanation process combines aerobic and anaerobic digestion to maximize biogas yield from organic waste.
              </p>
              <p className="mt-4 text-lg text-green-100">
                Unlike conventional single-stage anaerobic digestion, the Nisargruna process first uses aerobic digestion to break down complex organic matter, making it more accessible for methanogenic bacteria in the subsequent anaerobic stage.
              </p>
              
              <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg border border-green-200">
                <h4 className="text-lg font-bold text-white">Key Advantages of Nisargruna</h4>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-green-100">30-40% higher biogas yield compared to traditional methods</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-green-100">Faster processing time with reduced odor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-green-100">Reduced pathogen content in final products</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-green-100">Better stabilization of organic waste</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-20 border-2 border-dashed border-white rounded-xl w-full h-64 sm:h-80 md:h-96 flex items-center justify-center">
                <span className="text-white">Nisargruna Technology Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Scientific Innovation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nisargruna Biphasic Biomethanation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our core technology combines aerobic and anaerobic digestion for maximum biogas yield
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">The Science Behind Our Success</h3>
                <p className="mt-4 text-lg text-gray-500">
                  Developed in collaboration with Bhabha Atomic Research Centre, our technology leverages the Nisargruna biphasic biomethanation process to maximize biogas production from organic waste.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  This innovative two-stage process first uses aerobic digestion to break down complex organic matter, followed by anaerobic digestion to produce high-quality biogas.
                </p>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-bold text-gray-900">Key Advantages</h4>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">30-40% higher biogas yield compared to traditional methods</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">Faster processing time with reduced odor</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-600">Reduced pathogen content in final products</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 sm:h-80 md:h-96 flex items-center justify-center">
                  <span className="text-gray-500">Technology Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Process Flow</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Waste to Clean Energy
            </p>
          </div>

          <div className="mt-12">
            <div className="relative">
              {/* Horizontal line for desktop */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-300"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                {processSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Vertical line for mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="md:hidden absolute top-12 left-1/2 h-12 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
                    )}
                    
                    <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-200">
                      <div className="text-3xl mb-4">{step.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research & Development */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Research & Innovation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advancing Waste-to-Energy Science
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our ongoing research initiatives to improve efficiency and expand applications
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {researchItems.map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.status}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">{item.description}</p>
                <div className="mt-6">
                  <Link to="#" className="text-green-600 hover:text-green-800 font-medium">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 sm:p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">Research Publications</h3>
                <p className="mt-4">
                  Our technology has been validated through peer-reviewed research and scientific publications in collaboration with BARC researchers.
                </p>
                <div className="mt-6">
                  <Link to="#" className="inline-flex items-center px-4 py-2 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-green-700">
                    View Publications
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded w-32 h-24 sm:w-48 sm:h-32 flex items-center justify-center">
                    <span className="text-gray-700 text-sm">Research Paper Cover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Visuals */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Laboratory Excellence</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Research Facilities
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our state-of-the-art labs at AIC-BARC for continuous innovation
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Lab Photo 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Biogas Analysis Lab</h3>
                <p className="mt-2 text-gray-500">
                  Advanced equipment for gas composition analysis and quality control
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Lab Photo 2</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Process Optimization Lab</h3>
                <p className="mt-2 text-gray-500">
                  Facilities for testing and improving our biphasic digestion process
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Lab Photo 3</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Product Development Lab</h3>
                <p className="mt-2 text-gray-500">
                  Research on new applications and value-added products from waste
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
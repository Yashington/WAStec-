import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Biogas Purification Plant",
      description: "Advanced purification system converting raw biogas to CNG for automotive use",
      location: "Mumbai, Maharashtra",
      status: "Operational",
      feedstock: "Municipal organic waste",
      capacity: "500 kg/day",
      image: "project1"
    },
    {
      id: 2,
      title: "Coconut Waste Upcycling",
      description: "Transforming coconut shells and husks into briquettes and activated carbon",
      location: "Kochi, Kerala",
      status: "Operational",
      feedstock: "Coconut waste",
      capacity: "2 tons/day",
      image: "project2"
    },
    {
      id: 3,
      title: "Hotel Waste Management",
      description: "Comprehensive waste-to-energy solution for large hospitality chains",
      location: "Goa",
      status: "Under Development",
      feedstock: "Food waste, organic matter",
      capacity: "1 ton/day",
      image: "project3"
    }
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Municipal Waste Transformation",
      before: "500 kg organic waste daily",
      after: "300 kg CNG + 200 kg compost",
      impact: "Reduces landfill waste by 182 tons annually"
    },
    {
      id: 2,
      title: "Coconut Waste Valorization",
      before: "10 tons coconut shells discarded monthly",
      after: "8 tons briquettes + 1.5 tons activated carbon",
      impact: "Creates value from waste while preventing environmental harm"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Projects
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Showcasing our biogas purification and waste upcycling implementations
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Project Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Waste Across India
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our operational and development projects demonstrating the power of sustainable waste management
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col rounded-xl shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
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
        </div>
      </div>

      {/* Before-After Slider */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Transformation Stories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Waste to Worth Journey
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              See how our technology transforms waste into valuable resources
            </p>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-red-600">Before Implementation</h4>
                      <p className="mt-2 text-gray-600">{study.before}</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="bg-green-100 rounded-full p-2">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-green-600">After Implementation</h4>
                      <p className="mt-2 text-gray-600">{study.after}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="font-medium text-gray-900">Environmental Impact</h4>
                    <p className="mt-2 text-green-700">{study.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Explorer */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Product Explorer</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Waste to Valuable Products
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              See the range of products we create from organic waste
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center">
                  <span className="text-gray-500">CNG</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Compressed Natural Gas</h3>
                <p className="mt-2 text-sm text-gray-500">Clean automotive fuel</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center">
                  <span className="text-gray-500">Briquettes</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Biomass Briquettes</h3>
                <p className="mt-2 text-sm text-gray-500">Clean cooking fuel</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center">
                  <span className="text-gray-500">Compost</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Organic Compost</h3>
                <p className="mt-2 text-sm text-gray-500">Nutrient-rich fertilizer</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center">
                  <span className="text-gray-500">Carbon</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Activated Carbon</h3>
                <p className="mt-2 text-sm text-gray-500">Industrial adsorbent</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/technology" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Learn About Our Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
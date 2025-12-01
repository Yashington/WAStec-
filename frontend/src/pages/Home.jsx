import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gem1 from "../images/home.png";

const Home = () => {
  const [biogasOutput, setBiogasOutput] = useState(1250000)
  const [co2Saved, setCo2Saved] = useState(450000)
  const [wasteDiverted, setWasteDiverted] = useState(2800000)

  // Simulate live counters
  useEffect(() => {
    const interval = setInterval(() => {
      setBiogasOutput(prev => prev + Math.floor(Math.random() * 10))
      setCo2Saved(prev => prev + Math.floor(Math.random() * 5))
      setWasteDiverted(prev => prev + Math.floor(Math.random() * 20))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { id: 1, name: 'Biogas Generated (L)', value: biogasOutput.toLocaleString() },
    { id: 2, name: 'CO₂ Saved (kg)', value: co2Saved.toLocaleString() },
    { id: 3, name: 'Waste Diverted (kg)', value: wasteDiverted.toLocaleString() },
    { id: 4, name: 'Clean Energy (kWh)', value: Math.floor(biogasOutput / 1000).toLocaleString() },
  ]

  // Data for the dashboard charts
  const chartData = [
    { name: 'Jan', biogas: 4000, co2: 2400 },
    { name: 'Feb', biogas: 3000, co2: 1398 },
    { name: 'Mar', biogas: 2000, co2: 9800 },
    { name: 'Apr', biogas: 2780, co2: 3908 },
    { name: 'May', biogas: 1890, co2: 4800 },
    { name: 'Jun', biogas: 2390, co2: 3800 },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                <span className="block">Transforming Waste</span>
                <span className="block text-green-600">Into Worth</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                BARC-incubated startup pioneering biogas purification and waste upcycling technologies for a sustainable future.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  to="/contact"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                 Contact Us
                </a>
                <a
                  to="/about"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 sm:h-80 md:h-96 flex items-center justify-center">

                  <img src={gem1} alt="hbhby" className="w-full h-64 object-cover" />

                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-600">{biogasOutput.toLocaleString()}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Liters Generated Today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Impact</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sustainability Metrics
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Real-time data from our biogas plants across India
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
                  <dt className="text-base font-medium text-gray-900">{stat.name}</dt>
                  <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="text-2xl sm:text-3xl font-extrabold text-green-600">{stat.value}</div>
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Dashboard Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Data Dashboard</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Real-time Performance Metrics
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Live monitoring of our biogas production and environmental impact
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Biogas Production Chart */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Biogas Production (Monthly)</h3>
              <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-48 sm:h-64 flex items-center justify-center">
                <span className="text-gray-500">Biogas Production Chart Visualization</span>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>6 months trend</span>
                <span className="text-green-600 font-medium">↑ 12% from last month</span>
              </div>
            </div>

            {/* CO2 Savings Chart */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">CO2 Savings (Monthly)</h3>
              <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-48 sm:h-64 flex items-center justify-center">
                <span className="text-gray-500">CO2 Savings Chart Visualization</span>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>6 months trend</span>
                <span className="text-green-600 font-medium">↑ 8% from last month</span>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="text-2xl sm:text-3xl font-bold">24</div>
              <div className="text-lg">Active Plants</div>
              <div className="mt-2 text-green-100">Across 8 states</div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="text-2xl sm:text-3xl font-bold">12.5</div>
              <div className="text-lg">MW Energy Generated</div>
              <div className="mt-2 text-blue-100">This year</div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="text-2xl sm:text-3xl font-bold">8</div>
              <div className="text-lg">Years of Innovation</div>
              <div className="mt-2 text-purple-100">Since inception</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Biogas Technology
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Biogas Purification</h3>
                <p className="mt-2 text-gray-500">
                  Advanced purification technology converting raw biogas into high-quality CNG for automotive and industrial use.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Waste Upcycling</h3>
                <p className="mt-2 text-gray-500">
                  Transforming organic waste into valuable products like briquettes, compost, and clean energy.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">BARC Technology</h3>
                <p className="mt-2 text-gray-500">
                  Backed by Bhabha Atomic Research Centre's Nisargruna biphasic biomethanation process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Waste?
            </h2>
            <p className="mt-4 text-lg text-green-100">
              Join us in building a sustainable future with clean energy solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                Get a Quote
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-900"
              >
                Explore Projects
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md bg-transparent text-white hover:bg-green-700"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Impact = () => {
  const [wasteInput, setWasteInput] = useState('')
  const [impactResults, setImpactResults] = useState(null)

  const calculateImpact = () => {
    if (!wasteInput || isNaN(wasteInput) || wasteInput <= 0) return

    const dailyWaste = parseFloat(wasteInput)
    const co2Saved = dailyWaste * 0.85 // kg CO2 saved per kg waste
    const biogasProduced = dailyWaste * 0.6 // liters of biogas per kg waste
    const treesSaved = dailyWaste * 0.02 // equivalent trees saved
    const energyGenerated = biogasProduced * 0.025 // kWh of energy

    setImpactResults({
      co2Saved: co2Saved.toFixed(2),
      biogasProduced: biogasProduced.toFixed(2),
      treesSaved: treesSaved.toFixed(2),
      energyGenerated: energyGenerated.toFixed(2)
    })
  }

  const sdgGoals = [
    { id: 1, goal: "SDG 7", title: "Affordable and Clean Energy", color: "bg-yellow-500" },
    { id: 2, goal: "SDG 11", title: "Sustainable Cities and Communities", color: "bg-purple-500" },
    { id: 3, goal: "SDG 12", title: "Responsible Consumption and Production", color: "bg-green-500" },
    { id: 4, goal: "SDG 13", title: "Climate Action", color: "bg-red-500" },
    { id: 5, goal: "SDG 15", title: "Life on Land", color: "bg-green-700" }
  ]

  const impactStats = [
    { id: 1, name: 'CO₂ Saved', value: '450', unit: 'tons', description: 'Greenhouse gas emissions prevented' },
    { id: 2, name: 'Waste Processed', value: '2,800', unit: 'tons', description: 'Organic waste diverted from landfills' },
    { id: 3, name: 'Clean Energy', value: '1,250', unit: 'MWh', description: 'Renewable energy generated' },
    { id: 4, name: 'Trees Equivalent', value: '12,000', unit: '', description: 'Equivalent to planting new trees' }
  ]

  // Additional impact metrics
  const additionalMetrics = [
    { id: 1, name: 'Households Powered', value: '8,500', description: 'Annual electricity needs met' },
    { id: 2, name: 'Vehicles Off Road', value: '150', description: 'Equivalent cars taken off road' },
    { id: 3, name: 'Landfill Waste', value: '2,800', unit: 'tons', description: 'Waste diverted from landfills' },
    { id: 4, name: 'Jobs Created', value: '120', description: 'Direct and indirect employment' }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Sustainability Impact
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Measuring our contribution to environmental sustainability and climate action
            </p>
          </div>
        </div>
      </div>

      {/* Impact Calculator */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Impact Calculator</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Calculate Your Waste Impact
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              See how much environmental benefit can be achieved from processing your organic waste
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Sustainability Impact Calculator</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Enter your daily organic waste generation to see the potential environmental benefits of processing it with our technology.
                </p>
                
                <div className="mt-8">
                  <label htmlFor="waste-input" className="block text-sm font-medium text-gray-700">
                    Daily Organic Waste (kg)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      id="waste-input"
                      value={wasteInput}
                      onChange={(e) => setWasteInput(e.target.value)}
                      className="focus:ring-green-500 focus:border-green-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md py-3"
                      placeholder="Enter amount in kg"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="currency" className="sr-only">
                        Currency
                      </label>
                      <span className="h-5 w-10 flex items-center justify-center rounded-r-md bg-gray-50 text-gray-500 sm:text-sm">
                        kg
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={calculateImpact}
                    className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Calculate Impact
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-bold text-gray-900">Estimated Annual Impact</h4>
                
                {impactResults ? (
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">CO₂ Saved</span>
                      <span className="font-bold text-green-600">{(impactResults.co2Saved * 365).toLocaleString()} kg</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Biogas Produced</span>
                      <span className="font-bold text-green-600">{(impactResults.biogasProduced * 365).toLocaleString()} L</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Trees Equivalent</span>
                      <span className="font-bold text-green-600">{Math.round(impactResults.treesSaved * 365).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Clean Energy</span>
                      <span className="font-bold text-green-600">{(impactResults.energyGenerated * 365).toLocaleString()} kWh</span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Enter waste amount</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Calculate your potential environmental impact
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Impact Stats */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Impact So Far</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Environmental Benefits Delivered
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Cumulative impact of our biogas plants and waste processing facilities
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100">
                <div className="text-3xl font-extrabold text-green-600">{stat.value}{stat.unit && <span className="text-xl"> {stat.unit}</span>}</div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">{stat.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Metrics */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {additionalMetrics.map((metric) => (
              <div key={metric.id} className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md text-center border border-green-100">
                <div className="text-3xl font-extrabold text-green-600">{metric.value}{metric.unit && <span className="text-xl"> {metric.unit}</span>}</div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">{metric.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Visualization */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Impact Visualization</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Environmental Benefits Over Time
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Tracking our progress in waste management and clean energy generation
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Waste Diverted Chart */}
            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Waste Diverted from Landfills (Tons)</h3>
              <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                <span className="text-gray-500">Waste Diverted Chart Visualization</span>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>5 year trend</span>
                <span className="text-green-600 font-medium">↑ 25% annual growth</span>
              </div>
            </div>

            {/* CO2 Savings Chart */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">CO2 Emissions Avoided (Tons)</h3>
              <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                <span className="text-gray-500">CO2 Savings Chart Visualization</span>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>5 year trend</span>
                <span className="text-blue-600 font-medium">↑ 30% annual growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SDG Alignment */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Global Goals</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              United Nations Sustainable Development Goals
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our work contributes to achieving multiple UN SDGs
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {sdgGoals.map((goal) => (
                <div key={goal.id} className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className={`mx-auto w-16 h-16 rounded-full ${goal.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {goal.goal}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{goal.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Our technology directly supports this global sustainability goal through waste reduction and clean energy generation.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Journey to Net Zero */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-green-200">Climate Action</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
              Journey to Net Zero
            </p>
            <p className="mt-4 max-w-2xl text-xl text-green-100 lg:mx-auto">
              Tracking our progress toward carbon neutrality
            </p>
          </div>

          <div className="mt-12 bg-white bg-opacity-10 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">2023</div>
                <div className="mt-2 text-green-200">Baseline Year</div>
                <div className="mt-4 h-2 bg-green-300 bg-opacity-30 rounded-full">
                  <div className="h-2 bg-white rounded-full w-0"></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white">2025</div>
                <div className="mt-2 text-green-200">Current Progress</div>
                <div className="mt-4 h-2 bg-green-300 bg-opacity-30 rounded-full">
                  <div className="h-2 bg-white rounded-full w-2/3"></div>
                </div>
                <div className="mt-4 text-2xl font-bold text-white">65% Reduction</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white">2030</div>
                <div className="mt-2 text-green-200">Net Zero Target</div>
                <div className="mt-4 h-2 bg-green-300 bg-opacity-30 rounded-full">
                  <div className="h-2 bg-white rounded-full w-full"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/projects" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impact
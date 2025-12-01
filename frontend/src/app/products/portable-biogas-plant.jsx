import React from 'react'
import { Link } from 'react-router-dom'

export default function PortableBiogasPlant() {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">Portable Biogas Plant</h1>
              <p className="mt-4 text-lg text-gray-700 max-w-xl">
                Compact, efficient systems that convert food waste into clean biogas and nutrient-rich slurry.
                Ideal for restaurants, hotels, institutions and community kitchens looking to manage waste on-site
                while generating renewable energy.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://example.com/biogas-monitoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
                >
                  Open Biogas Monitoring App
                </a>

                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-green-700 bg-green-100 hover:bg-green-200">
                  Get a Quote
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
                <div className="bg-gray-100 rounded-md h-64 flex items-center justify-center">
                  <span className="text-gray-500">Portable Biogas Plant Image</span>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Suitable Feedstock</h4>
                      <p className="text-sm text-gray-600">Food waste, kitchen rejects, pre-consumer waste</p>
                    </div>
                    <div className="text-green-600 font-bold">Small → Medium</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Maintenance</h4>
                      <p className="text-sm text-gray-600">Low maintenance with onsite support</p>
                    </div>
                    <div className="text-gray-600">Monthly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-green-50">
              <h3 className="text-lg font-bold text-gray-900">Benefits</h3>
              <ul className="mt-3 text-gray-600 space-y-2 list-disc list-inside">
                <li>Onsite renewable energy for cooking and heating</li>
                <li>Reduces organic waste sent to landfill</li>
                <li>Produces nutrient-rich slurry for agriculture</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-50">
              <h3 className="text-lg font-bold text-gray-900">Features</h3>
              <ul className="mt-3 text-gray-600 space-y-2 list-disc list-inside">
                <li>Modular design, easy commissioning</li>
                <li>Robust operation with minimal downtime</li>
                <li>Optional automation and monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Applications</h3>
              <p className="mt-3 text-gray-600">Restaurants, campuses, hotels, food processing units and community kitchens.</p>
              <div className="mt-4">
                <a href="/contact" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Talk to Sales</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

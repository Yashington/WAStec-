import React from 'react'
import { Link } from 'react-router-dom'

export default function OrganicBooster() {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">Organic Fermented Booster (Biogas Slurry)</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              Nutrient-rich organic slurry derived from anaerobic digestion. Improves soil structure, enhances
              microbial activity and supports healthier crop growth without synthetic chemicals.
            </p>

            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700">Request Samples</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
              <div className="bg-gray-100 rounded-md h-64 flex items-center justify-center">
                <span className="text-gray-500">Booster Product Image</span>
              </div>
              <div className="mt-6">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Rich in N-P-K and micronutrients</li>
                  <li>Improves water retention and soil aeration</li>
                  <li>Safe, chemical-free organic amendment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-50">
            <h3 className="text-lg font-bold text-gray-900">Agricultural Benefits</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-md">
                <h4 className="font-semibold">Soil Health</h4>
                <p className="text-sm text-gray-600">Boosts microbial activity and soil structure</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-md">
                <h4 className="font-semibold">Crop Yield</h4>
                <p className="text-sm text-gray-600">Supports healthier plant growth and yield improvement</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold">Sustainability</h4>
                <p className="text-sm text-gray-600">Recycles nutrients and reduces chemical fertilizer dependency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

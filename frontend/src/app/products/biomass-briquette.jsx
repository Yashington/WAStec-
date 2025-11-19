import React from 'react'
import { Link } from 'react-router-dom'

export default function BiomassBriquette() {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">Biomass Briquettes</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              Eco-friendly briquettes manufactured from horticultural and agricultural residues — a sustainable
              fuel alternative for industries and institutions.
            </p>

            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700">Enquire about supply</Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
              <div className="bg-gray-100 rounded-md h-64 flex items-center justify-center">
                <span className="text-gray-500">Briquette Production Image</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-md">
                  <h4 className="text-sm font-semibold text-gray-900">High Calorific Value</h4>
                  <p className="text-sm text-gray-600">Consistent energy output</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="text-sm font-semibold text-gray-900">Low Ash</h4>
                  <p className="text-sm text-gray-600">Cleaner combustion</p>
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
              <h3 className="text-lg font-bold text-gray-900">Feedstock</h3>
              <p className="mt-2 text-gray-600">Horticultural waste, coconut shells, agricultural residues</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-50">
              <h3 className="text-lg font-bold text-gray-900">Applications</h3>
              <p className="mt-2 text-gray-600">Boilers, furnaces, small industries and institutional kitchens</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Logistics</h3>
              <p className="mt-2 text-gray-600">Bulk supply options and help with transport arrangements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import product3 from '../assets/images/product3.jpg'
export default function CoirProducts() {
  const items = [
    { title: 'Cocopeat', desc: 'High-quality cocopeat for potting mixes and soil amendment, excellent water retention.' },
    { title: 'Coir Bundles', desc: 'Durable coir bundles for erosion control, shoreline stabilization and landscaping.' },
    { title: 'Coir Stick', desc: 'Coir sticks for planting and support systems in nurseries and orchards.' },
    { title: 'Coir Rope', desc: 'Strong, eco-friendly coir rope for industrial and agricultural applications.' },
  ]

  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Coir Products</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Sustainable coir-based products for horticulture, erosion control and industrial use.</p>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((it) => (
              <div key={it.title} className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">
                <div className="bg-green-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7M5 21h14" />
                    <img src={product3} alt="Coir Products" className="w-full h-full object-contain block" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{it.title}</h3>
                <p className="mt-2 text-gray-600">{it.desc}</p>
                <div className="mt-4">
                  <a href="/contact" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Request Sample</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
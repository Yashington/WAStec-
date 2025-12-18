import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsIndex() {
  const items = [
    { slug: 'portable-biogas-plant', title: 'Portable Biogas Plant', desc: 'Compact systems to convert food waste into clean energy.' },
    { slug: 'biomass-briquette', title: 'Biomass Briquette', desc: 'Eco-friendly briquettes from horticultural residues.' },
    { slug: 'coir-products', title: 'Coir Products', desc: 'Cocopeat, bundles, sticks and ropes for agriculture.' },
    { slug: 'organic-booster', title: 'Organic Fermented Booster', desc: 'Nutrient-rich biogas slurry for improved soil health.' },
  ]

  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Products</h1>
          <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">Explore our product range designed to convert waste into value.</p>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {items.map((it) => (
              <Link key={it.slug} to={`/products/${it.slug}`} className="group bg-white rounded-xl p-6 shadow-md border hover:shadow-lg transition">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600">{it.title}</h2>
                    <p className="mt-2 text-gray-600">{it.desc}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="bg-green-50 p-3 rounded-md">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-green-700 font-medium">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
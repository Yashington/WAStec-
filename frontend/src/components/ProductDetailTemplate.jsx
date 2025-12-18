import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductDetailTemplate({ product }) {
  // Debugging: log product data
  console.log('Product data:', product);
  
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">{product.title}</h1>
              <p className="mt-4 text-lg text-gray-700 max-w-xl">
                {product.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {product.ctaButtons && product.ctaButtons.map((button, index) => (
                  button.external ? (
                    <a
                      key={index}
                      href={button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
                    >
                      {button.text}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={button.link}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-green-700 bg-green-100 hover:bg-green-200"
                    >
                      {button.text}
                    </Link>
                  )
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
                <div className="bg-gray-100 rounded-md h-48 sm:h-64 flex items-center justify-center overflow-hidden">

                  {product.image ? (
                    <img src={product.image} alt={product.title} className="w-full h-56 sm:h-64 md:h-72 object-cover" />
                  ) : (
                    <span className="text-gray-500">{product.title}</span>
                  )}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Suitable Feedstock</h4>
                      <p className="text-sm text-gray-600">{product.keyDetails.feedstock}</p>
                    </div>
                    <div className="text-green-600 font-bold">{product.keyDetails.size}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Maintenance</h4>
                      <p className="text-sm text-gray-600">{product.keyDetails.maintenance}</p>
                    </div>
                    <div className="text-gray-600">{product.keyDetails.frequency}</div>
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
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-50">
              <h3 className="text-lg font-bold text-gray-900">Features</h3>
              <ul className="mt-3 text-gray-600 space-y-2 list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Applications</h3>
              <p className="mt-3 text-gray-600">{product.applications}</p>
              <div className="mt-4">
                <Link to="/contact" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
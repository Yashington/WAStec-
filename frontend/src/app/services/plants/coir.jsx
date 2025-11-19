import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CoirPage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Link to="/services/plants" className="text-sm text-green-700 hover:underline">← Back to Plant Services</Link>
        </div>

        <header className={`rounded-lg overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-gradient-to-r from-green-50 to-blue-50`}>
          <div className="md:flex md:items-center">
            <div className="md:flex-1 p-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Coir Processing Plant</h1>
              <p className="mt-4 text-gray-700">WAStec’s Coir Processing Plant is an innovative initiative that transforms tender coconut waste into valuable, eco-friendly products. Millions of coconut husks are discarded every year, causing waste and pollution. Our plant recycles these husks into coir fiber, cocopeat, ropes, and organic fertilizers using eco-sustainable processes.</p>
            </div>
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1200&q=80" alt="Coir processing" className="w-full h-48 object-cover" />
            </div>
          </div>
        </header>

        <main className="mt-8 space-y-8">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl shadow-md border bg-white">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="mt-3 text-gray-700">Our Coir Processing Plant takes tender coconut husks and horticultural residues and converts them into high-value, market-ready products. We combine mechanical separation, washing and drying with gentle processing to ensure product quality and minimal environmental footprint.</p>
              <p className="mt-3 text-gray-700">By setting up decentralized and modular plants, we enable smallholders and clusters to capture value locally while reducing transportation and logistics emissions.</p>
            </div>

            <div className="p-6 rounded-xl shadow-md border bg-white">
              <h2 className="text-2xl font-bold">Our Process</h2>
              <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
                <li>Collection and sorting of coconut husks and organic feedstock.</li>
                <li>Fiber extraction and grading using mechanical separators.</li>
                <li>Washing and drying to stabilize moisture and remove impurities.</li>
                <li>Processing and compression for cocopeat, coir sticks and rope formation.</li>
                <li>Packaging, grading and dispatch to local and export markets.</li>
              </ol>
              <div className="mt-4">
                <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80" alt="Coir processing steps" className="w-full h-40 object-cover rounded-md" />
              </div>
            </div>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Products</h2>
            <p className="mt-3 text-gray-700">We produce a range of coir-based products tailored to horticulture, agriculture, packaging and industrial applications:</p>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Cocopeat / coir pith for soil conditioning and potting mixes.</li>
              <li>Coir fiber for erosion control, upholstery and rope making.</li>
              <li>Coir sticks and bundles for horticultural propagation.</li>
              <li>Organic fertilizer blends from coir processing residues.</li>
            </ul>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Environmental Impact</h2>
            <p className="mt-3 text-gray-700">Coir processing diverts large volumes of husks from open burning and landfill disposal. The benefits include:</p>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Reduced methane and CO₂ emissions from decomposition and burning.</li>
              <li>Creation of renewable, biodegradable materials that replace peat and synthetic fibers.</li>
              <li>Local employment and value capture for rural communities.</li>
            </ul>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-3 text-gray-700">Our vision is to create a network of sustainable coir processing facilities that transform waste into wealth, support regenerative agriculture and provide scalable products for domestic and export markets. We collaborate with farmers, local governments and industry partners to build circular value chains.</p>
          </section>

          <section className="p-8 rounded-xl text-white text-center bg-gradient-to-r from-green-600 to-blue-600">
            <h3 className="text-2xl font-bold">Start your Coir Plant Project</h3>
            <p className="mt-3 text-green-100">We provide feasibility, design, equipment sourcing and commissioning support for coir plants of all sizes.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-md font-medium">Discuss Your Project</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function PlantsPage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Link to="/services" className="text-sm text-green-700 hover:underline">← Back to Services</Link>
        </div>

        {/* Hero */}
        <header className={`rounded-lg p-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-gradient-to-r from-green-50 to-blue-50`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">Bio-CNG, Bio-Coal & Coir Plants</h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">Large-scale, modular solutions that convert organic and coconut waste into renewable fuels and valuable products.</p>
              <p className="mt-4 text-gray-600 max-w-3xl">WAStec provides design, installation, automation and maintenance services for Bio-CNG, Bio-Coal and Coir processing plants — helping organisations close the loop on waste and generate new revenue streams.</p>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700">Get a Consultation</Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 w-full h-56 flex items-center justify-center">
                <div className="text-gray-500">Plant Illustration</div>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10">
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white`}>
            <h2 className="text-2xl font-bold text-gray-900">Plant Services</h2>
            <p className="mt-3 text-gray-700">Explore our specialised plant solutions. Click a card to view detailed information and discuss your project.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border shadow-sm hover:shadow-md transition bg-green-50">
                <h3 className="font-semibold text-lg">Bio-CNG Plant</h3>
                <p className="mt-2 text-sm text-gray-700">Convert organic waste into Bio-CNG for transport or industry.</p>
                <div className="mt-4">
                  <Link to="/services/plants/bio-cng" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More</Link>
                </div>
              </div>

              <div className="p-6 rounded-lg border shadow-sm hover:shadow-md transition bg-blue-50">
                <h3 className="font-semibold text-lg">Bio-Coal Plant</h3>
                <p className="mt-2 text-sm text-gray-700">Produce bio-coal from green waste for industrial fuel substitution.</p>
                <div className="mt-4">
                  <Link to="/services/plants/bio-coal" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More</Link>
                </div>
              </div>

              <div className="p-6 rounded-lg border shadow-sm hover:shadow-md transition bg-green-50">
                <h3 className="font-semibold text-lg">Coir Processing Plant</h3>
                <p className="mt-2 text-sm text-gray-700">Turn coconut husks into cocopeat, ropes, sticks and other coir products.</p>
                <div className="mt-4">
                  <Link to="/services/plants/coir" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More</Link>
                </div>
              </div>
            </div>
          </section>
  </main>
      </div>
    </div>
  )
}

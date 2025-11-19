import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function WasteBankPage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Link to="/services" className="text-sm text-green-700 hover:underline">← Back to Services</Link>
        </div>

        <header className={`rounded-lg p-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-gradient-to-r from-green-50 to-blue-50`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">WAStec Bank — Marketplace of Waste</h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">Empowering Waste as a Resource</p>
              <p className="mt-4 text-gray-600 max-w-3xl">WAStec Bank is a pioneering digital-physical marketplace that connects waste producers (industries, societies, campuses) with recyclers and processors. By treating waste as a valuable resource, we enable monetisation of waste streams, promote circular economy goals, and ensure full traceability from source to reuse.</p>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700">Turn Waste into Value</Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 w-full h-56 flex items-center justify-center">
                <div className="text-gray-500">Marketplace Illustration</div>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 space-y-10">
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white`}>
            <h2 className="text-2xl font-bold text-gray-900">Core Features & Services</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="p-4 border rounded-lg bg-green-50">
                <h3 className="font-semibold">Waste Exchange Platform</h3>
                <p className="mt-2 text-sm text-gray-700">Connects waste generators with verified recyclers or processors.</p>
              </article>

              <article className="p-4 border rounded-lg bg-blue-50">
                <h3 className="font-semibold">Digital App & Monitoring</h3>
                <p className="mt-2 text-sm text-gray-700">Real-time tracking of waste volumes, credits, and documentation.</p>
              </article>

              <article className="p-4 border rounded-lg bg-green-50">
                <h3 className="font-semibold">Incentives & Credits</h3>
                <p className="mt-2 text-sm text-gray-700">Earn credits or monetary value for deposited segregated waste.</p>
              </article>

              <article className="p-4 border rounded-lg bg-blue-50">
                <h3 className="font-semibold">Circular Economy Integration</h3>
                <p className="mt-2 text-sm text-gray-700">Waste is channelled into bio-coal, coir, briquettes, or biogas systems.</p>
              </article>

              <article className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-semibold">Zero Waste to Landfill Support</h3>
                <p className="mt-2 text-sm text-gray-700">Helps institutions meet landfill diversion goals through measurable programs.</p>
              </article>

              <article className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-semibold">Community Engagement</h3>
                <p className="mt-2 text-sm text-gray-700">Enables housing societies, campuses, and industries to track participation and rewards.</p>
              </article>
            </div>
          </section>

          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white`}>
            <h2 className="text-2xl font-bold text-gray-900">Why WAStec Bank?</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Innovative marketplace combining technology and sustainability.</li>
              <li>Covers collection, tracking, marketplace matchmaking, and reuse — all in one system.</li>
              <li>Measurable impact: Waste diverted, credits earned, and cost savings.</li>
              <li>Scalable model for societies, campuses, and industries.</li>
            </ul>
          </section>

          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white`}>
            <h2 className="text-2xl font-bold text-gray-900">Who Can Join?</h2>
            <ul className="mt-3 text-gray-700 list-disc list-inside space-y-2">
              <li>Housing societies and residential complexes</li>
              <li>Educational institutions and private campuses</li>
              <li>Industrial parks and manufacturing units</li>
              <li>Municipalities and local bodies</li>
            </ul>
          </section>

          <section className={`p-8 rounded-xl text-white text-center bg-gradient-to-r from-green-600 to-blue-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}>
            <h3 className="text-2xl font-bold">Turn your waste into value</h3>
            <p className="mt-2 text-green-100">Invite WAStec to set up a waste depositor account and join the WAStec Bank marketplace.</p>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-md font-medium hover:bg-green-50">Get Started</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

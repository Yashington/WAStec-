import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function BioCNGPage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Link to="/services/plants" className="text-sm text-green-700 hover:underline">← Back to Plant Services</Link>
        </div>

        <header className={`rounded-lg p-6 sm:p-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-gradient-to-r from-green-50 to-blue-50`}>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Bio-CNG Plant — Specialized in Food Waste</h1>
          <p className="mt-4 text-gray-700">The Bio-CNG Plant converts biodegradable and food waste into clean, renewable energy using advanced anaerobic digestion technology. The process involves aerobic pre-treatment followed by anaerobic methanation, resulting in high methane yield and nutrient-rich organic manure as a by-product.</p>
        </header>

        <main className="mt-8 space-y-8">
          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Detailed Process</h2>
            <p className="mt-3 text-gray-700">The Bio-CNG plant uses a two-stage (<em>aerobic + anaerobic</em>) digestion system for enhanced biogas generation. It treats a wide range of biodegradable waste—food scraps, vegetable waste, leaves, paper, and agricultural residues. The process begins with segregation and slurry preparation, followed by aerobic pre-digestion to break down complex organics. In the anaerobic phase, methanogenic bacteria convert the organic matter into biogas with <strong>70–80% methane</strong> concentration.</p>
            <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Segregation & Slurry Preparation</strong> – Remove contaminants and prepare feedstock slurry for digestion.</li>
              <li><strong>Aerobic Pre-treatment</strong> – Short aerobic phase to hydrolyze and reduce complex organics.</li>
              <li><strong>Anaerobic Methanation</strong> – Anaerobic digesters produce biogas (70–80% CH₄).</li>
              <li><strong>Gas Purification & Compression</strong> – Purify biogas and compress it into Bio-CNG cylinders or for pipeline injection.</li>
              <li><strong>Digestate Processing</strong> – Convert leftover material into high-quality organic manure rich in N, P, K.</li>
            </ol>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Handles mixed biodegradable waste (food, paper, garden waste)</li>
              <li>Dual-stage digestion (aerobic + anaerobic) for higher methane yield</li>
              <li>Produces renewable fuel (Bio-CNG) and organic fertilizer</li>
              <li>Zero effluent discharge and minimal odour</li>
              <li>Ideal for municipal, industrial, and community installations</li>
            </ul>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Applications</h2>
            <p className="mt-3 text-gray-700">Bio-CNG serves as a clean fuel for <strong>transportation, industrial heating, power generation</strong>, and <strong>cooking</strong> in large institutions.</p>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Environmental Impact</h2>
            <p className="mt-3 text-gray-700">Each ton of food waste processed prevents methane emissions, reduces waste disposal costs, and contributes to cleaner urban environments.</p>
          </section>

          <section className="p-6 sm:p-8 rounded-xl text-white text-center bg-gradient-to-r from-green-600 to-blue-600">
            <h3 className="text-2xl font-bold">Interested in a Bio-CNG project?</h3>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-md font-medium">Learn More / Contact Us</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
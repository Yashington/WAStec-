import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function BioCoalPage() {
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
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Bio-Coal Briquette Plant</h1>
              <p className="mt-2 text-green-700 font-semibold">Specialized in City Tree Waste</p>
              <p className="mt-4 text-gray-700">The WAStec Bio-Coal Briquette Plant converts city green waste—such as pruned branches, tree trimmings, and garden clippings—into eco-friendly, high-calorific value bio-coal briquettes. This supports sustainable urban waste management while offering industries a renewable substitute for conventional coal.</p>
            </div>
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1524594154909-6b8d0a0d7a3b?auto=format&fit=crop&w=1200&q=80" alt="Bio coal briquettes" className="w-full h-48 object-cover" />
            </div>
          </div>
        </header>

        <main className="mt-8 space-y-8">
          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="mt-3 text-gray-700">The Bio-Coal Plant at WAStec transforms biomass residues into high-density bio-coal briquettes through shredding, drying, and high-pressure briquetting. These briquettes provide a clean-burning, energy-dense alternative to fossil coal and charcoal for industrial and institutional use.</p>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">How It Works</h2>
            <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Feedstock collection and drying:</strong> Biomass (tree trim, garden waste, agri residues) is collected and dried to optimal moisture levels.</li>
              <li><strong>Grinding:</strong> Material is ground to a uniform particle size to improve press efficiency and briquette density.</li>
              <li><strong>Briquetting:</strong> High-pressure presses form dense, uniform briquettes without chemical binders.</li>
              <li><strong>Cooling & Quality testing:</strong> Briquettes are cooled, tested for calorific value and moisture, then packaged.</li>
              <li><strong>By-product utilization:</strong> Dust and fines are recycled back into the process or used for composting, creating a waste-to-fuel circular loop.</li>
            </ol>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Key Features & Benefits</h2>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>High energy density and low ash content</li>
              <li>Significantly lower CO₂ and particulate emissions compared to coal</li>
              <li>Integrates circular economy principles and supports local jobs</li>
              <li>Scalable, modular plant setup and cost-effective as a coal alternative</li>
            </ul>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Applications</h2>
            <p className="mt-3 text-gray-700">Used in boilers, kilns, and power plants as a clean fuel replacement for coal. Ideal for industrial steam generation, rural energy projects, and biomass-powered systems.</p>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Environmental & Economic Impact</h2>
            <p className="mt-3 text-gray-700">Bio-Coal production prevents landfill disposal and open burning of biomass, reducing greenhouse gas and particulate emissions. Economically, it creates local supply chains, jobs, and provides industries with an affordable renewable fuel option.</p>
          </section>

          <section className="p-6 rounded-xl shadow-md border bg-white">
            <h2 className="text-2xl font-bold">Why Choose WAStec</h2>
            <p className="mt-3 text-gray-700">WAStec offers end-to-end solutions from feasibility study to commissioning, supported by automation, IoT monitoring and technical expertise to ensure reliable, compliant plant operations.</p>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Contact Us</Link>
            </div>
          </section>

          <section className="p-8 rounded-xl text-white text-center bg-gradient-to-r from-green-600 to-blue-600">
            <h3 className="text-2xl font-bold">Interested in Bio-Coal?</h3>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-md font-medium">Discuss Your Plant Project</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ZeroWastePage() {
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
              <h1 className="text-4xl font-extrabold text-gray-900">Zero Waste to Landfill Movement</h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">Building a Circular Economy — One Step at a Time</p>
              <p className="mt-4 text-gray-600 max-w-3xl">
                WAStec’s Zero Waste to Landfill Movement aims to reduce, reuse, and recycle all possible waste streams to ensure
                nothing ends up in landfills. We work with industries, institutions, and communities to create efficient waste
                management systems that prioritize sustainability and resource recovery.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700">Get in Touch</Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 w-full h-56 flex items-center justify-center">
                <div className="text-gray-500">Zero Waste Illustration</div>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 space-y-10">
          {/* About */}
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white`}>
            <h2 className="text-2xl font-bold text-gray-900">What is Zero Waste to Landfill?</h2>
            <p className="mt-3 text-gray-700">
              Zero Waste to Landfill (ZWL) is a sustainability approach that ensures no waste is disposed of in landfills.
              Instead, waste is minimized at the source, recycled, or converted into renewable energy. WAStec helps clients
              achieve ZWL certification by implementing smart segregation, composting, and energy recovery systems.
            </p>
          </section>

          {/* Our Approach */}
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white`}>
            <h2 className="text-2xl font-bold text-gray-900">Our Approach</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="p-4 border rounded-lg bg-green-50">
                <h3 className="font-semibold">Waste Segregation & Source Reduction</h3>
                <p className="mt-2 text-sm text-gray-700">Encouraging smart segregation practices at homes, offices, and industries.</p>
              </article>

              <article className="p-4 border rounded-lg bg-green-50">
                <h3 className="font-semibold">Material Recovery & Recycling</h3>
                <p className="mt-2 text-sm text-gray-700">Recovering recyclables such as paper, metal, and plastic for reuse and resale.</p>
              </article>

              <article className="p-4 border rounded-lg bg-blue-50">
                <h3 className="font-semibold">Organic Waste Conversion</h3>
                <p className="mt-2 text-sm text-gray-700">Turning food and green waste into biogas, bio-coal, and organic fertilizers.</p>
              </article>

              <article className="p-4 border rounded-lg bg-blue-50">
                <h3 className="font-semibold">Upcycling & Innovation</h3>
                <p className="mt-2 text-sm text-gray-700">Transforming waste materials like tender coconut shells and horticultural residue into valuable products such as coir, briquettes, and compost.</p>
              </article>

              <article className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-semibold">Awareness & Training</h3>
                <p className="mt-2 text-sm text-gray-700">Conducting workshops, awareness campaigns, and educational programs to promote sustainable waste management.</p>
              </article>
            </div>
          </section>

          {/* Why it matters */}
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white`}>
            <h2 className="text-2xl font-bold text-gray-900">Why Zero Waste to Landfill?</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Reduces greenhouse gas emissions and methane leaks.</li>
              <li>Saves landfill space and reduces pollution.</li>
              <li>Promotes circular economy and resource efficiency.</li>
              <li>Generates renewable energy and sustainable by-products.</li>
              <li>Helps organizations meet sustainability and ESG targets.</li>
            </ul>
          </section>

          {/* Impact */}
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white`}>
            <h2 className="text-2xl font-bold text-gray-900">Our Impact</h2>
            <p className="mt-3 text-gray-700">WAStec Bio-GAS Pvt. Ltd. has worked with municipalities, corporates, and institutions to divert tons of waste from landfills each year. Through our IoT-powered biogas and recycling systems, we ensure that every waste stream contributes to India’s sustainable energy future.</p>
          </section>

          {/* CTA */}
          <section className={`p-8 rounded-xl text-white text-center bg-gradient-to-r from-green-600 to-blue-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}>
            <h3 className="text-2xl font-bold">Join the Movement</h3>
            <p className="mt-2 text-green-100">Be a part of WAStec’s mission to create a cleaner, greener India. Partner with us to achieve a Zero Waste to Landfill certification for your organization.</p>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-md font-medium hover:bg-green-50">Get in Touch</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

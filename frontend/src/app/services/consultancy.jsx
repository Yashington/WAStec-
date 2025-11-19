import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ConsultancyDetails() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Link to="/services" className="text-sm text-green-700 hover:underline">← Back to Services</Link>
        </div>

        {/* Hero */}
        <header className={`rounded-lg p-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-gradient-to-r from-green-50 to-blue-50` }>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">Consultancy Services</h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">
                Turning Waste Challenges into Sustainable Opportunities
              </p>
              <p className="mt-4 text-gray-600 max-w-3xl">
                At WAStec Bio-GAS Pvt. Ltd., we provide expert consultancy to help organizations, municipalities,
                and institutions adopt sustainable waste-to-energy and circular economy solutions. From project
                conception to commissioning, our consultancy ensures every step aligns with your environmental goals
                and financial returns.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700">Request Consultancy</Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 w-full h-56 flex items-center justify-center">
                <div className="text-gray-500">Consultancy Illustration</div>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 space-y-10">
          {/* About */}
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white` }>
            <h2 className="text-2xl font-bold text-gray-900">Your Partner in Waste-to-Energy Excellence</h2>
            <p className="mt-3 text-gray-700">
              WAStec’s consultancy team brings together environmental engineers, sustainability experts, and
              technology specialists to design custom waste management and energy recovery solutions. We guide
              clients through each phase of their sustainability journey — from feasibility studies and plant
              design to installation, operation, and digital monitoring through IoT systems.
            </p>
          </section>

          {/* Key Areas */}
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white` }>
            <h2 className="text-2xl font-bold text-gray-900">Key Consultancy Areas</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="p-4 border rounded-lg bg-green-50">
                <h3 className="font-semibold">Feasibility Studies & DPR</h3>
                <p className="mt-2 text-sm text-gray-700">We assess technical, financial, and environmental feasibility for proposed projects — ensuring a realistic roadmap and maximum ROI.</p>
              </article>

              <article className="p-4 border rounded-lg bg-green-50">
                <h3 className="font-semibold">Waste Assessment & Auditing</h3>
                <p className="mt-2 text-sm text-gray-700">Detailed waste characterization and analysis to identify viable inputs for energy recovery and recycling.</p>
              </article>

              <article className="p-4 border rounded-lg bg-blue-50">
                <h3 className="font-semibold">Technology Selection</h3>
                <p className="mt-2 text-sm text-gray-700">Guidance for selecting biogas, bio-CNG, biomass briquettes, or coir-based technologies as per waste type.</p>
              </article>

              <article className="p-4 border rounded-lg bg-blue-50">
                <h3 className="font-semibold">Plant Design & Engineering</h3>
                <p className="mt-2 text-sm text-gray-700">Complete design, capacity planning, and IoT monitoring integration.</p>
              </article>

              <article className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-semibold">Regulatory & Compliance Support</h3>
                <p className="mt-2 text-sm text-gray-700">Help with environmental approvals, documentation, and legal compliance.</p>
              </article>

              <article className="p-4 border rounded-lg bg-gray-50">
                <h3 className="font-semibold">Project Implementation & Monitoring</h3>
                <p className="mt-2 text-sm text-gray-700">Support during setup, commissioning, and ongoing optimization.</p>
              </article>

              <article className="p-4 border rounded-lg bg-green-50">
                <h3 className="font-semibold">Sustainability & Carbon Credit Advisory</h3>
                <p className="mt-2 text-sm text-gray-700">Assist clients with sustainability reports and carbon credit certification.</p>
              </article>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white` }>
            <h2 className="text-2xl font-bold text-gray-900">Why Choose WAStec</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg flex items-start gap-4">
                <div className="text-green-700 text-2xl">✔</div>
                <div>
                  <div className="font-semibold">10+ successful consultancy projects</div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg flex items-start gap-4">
                <div className="text-blue-700 text-2xl">🏢</div>
                <div>
                  <div className="font-semibold">Trusted by industries and institutions</div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg flex items-start gap-4">
                <div className="text-green-700 text-2xl">📶</div>
                <div>
                  <div className="font-semibold">Smart IoT monitoring integration</div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg flex items-start gap-4">
                <div className="text-gray-700 text-2xl">♻️</div>
                <div>
                  <div className="font-semibold">Focus on circular economy and zero-waste models</div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg flex items-start gap-4">
                <div className="text-green-700 text-2xl">👩‍🔬</div>
                <div>
                  <div className="font-semibold">Experienced, multidisciplinary team</div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className={`p-6 rounded-xl shadow-md border ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 bg-white` }>
            <h2 className="text-2xl font-bold text-gray-900">Case Study — University Campus</h2>
            <p className="mt-3 text-gray-700">A food-waste biogas project for a university campus producing 30 kg biogas per day, reducing methane emissions by 80% and powering the canteen sustainably.</p>
          </section>

          {/* CTA */}
          <section className={`p-8 rounded-xl text-white text-center bg-gradient-to-r from-green-600 to-blue-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}>
            <h3 className="text-2xl font-bold">Ready to Build Your Sustainable Future?</h3>
            <p className="mt-2 text-green-100">Partner with WAStec to design and deliver scalable waste-to-energy solutions.</p>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-md font-medium hover:bg-green-50">Request Consultancy</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

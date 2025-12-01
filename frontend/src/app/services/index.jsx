
export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Services</h1>
          <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">Consultancy, marketplace and plant solutions to close the loop on organic waste.</p>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Bio-CNG Plant — Specialized in Food Waste</h3>
              <p className="mt-3 text-gray-600">The Bio-CNG Plant converts biodegradable and food waste into clean, renewable energy using a two-stage (aerobic + anaerobic) digestion system. Outputs include high-methane biogas purified to Bio-CNG and nutrient-rich organic manure.</p>
              <div className="mt-4">
                <a href="/services/plants/bio-cng" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Bio-Coal Briquette Plant</h3>
              <p className="mt-3 text-gray-600">The WAStec Bio-Coal Briquette Plant converts city green waste—such as pruned branches, tree trimmings, and garden clippings—into eco-friendly, high‑calorific value bio‑coal briquettes.</p>
              <div className="mt-4">
                <a href="/services/plants/bio-coal" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Coir Processing Plant</h3>
              <p className="mt-3 text-gray-600">Upcycling tender coconut waste into coir-based eco-products like cocopeat, ropes, and sticks.</p>
              <div className="mt-4">
                <a href="/services/plants/coir" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">WAStec Bank (Marketplace of Waste)</h3>
              <p className="mt-3 text-gray-600">A digital waste marketplace that connects waste producers, recyclers, and buyers for a circular economy.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="/services/waste-bank" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More</a>
                <a href="https://example.com/waste-bank" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-green-600 text-green-700 rounded-md hover:bg-green-50">Open WAStec Bank App</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Zero Waste to Landfill Movement</h3>
              <p className="mt-3 text-gray-600">A sustainability drive to minimize landfill waste through segregation, recycling, and waste-to-energy systems.</p>
              <div className="mt-4">
                <a to="/services/zero-waste" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More & Join</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Consultancy Services</h3>
              <p className="mt-3 text-gray-600">Providing end-to-end consulting for biogas, waste management, and renewable energy projects.</p>
              <div className="mt-4">
                <a to="/services/consultancy" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Learn More & Request Consultancy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio-CNG detailed section */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-8 bg-gradient-to-r from-green-50 to-blue-50">
          <h2 className="text-3xl font-extrabold text-gray-900">Bio-CNG Plant — Specialized in Food Waste</h2>
          <p className="mt-4 text-gray-700">The WAStec Bio-CNG Plant is designed to transform <strong>organic and food waste</strong> into clean, renewable <strong>Compressed Biogas (CBG)</strong> — a sustainable alternative to fossil fuels. This system captures methane from decomposed waste through advanced anaerobic digestion, purifies it, and compresses it for use as green energy.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl shadow-md border bg-white">
            <h3 className="text-xl font-bold">Process Overview</h3>
            <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Collection and Segregation</strong> – Food and organic waste from households, hotels, and markets are collected and pre-treated.</li>
              <li><strong>Anaerobic Digestion</strong> – Microbial action in oxygen-free digesters converts waste into raw biogas.</li>
              <li><strong>Biogas Purification</strong> – Carbon dioxide and impurities are removed to enrich methane concentration up to 95%.</li>
              <li><strong>Compression and Storage</strong> – The purified gas is compressed into cylinders as Bio-CNG, ready for use.</li>
            </ol>
          </div>

          <div className="p-6 rounded-xl shadow-md border bg-white">
            <h3 className="text-xl font-bold">Key Features</h3>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>100% renewable and clean energy source</li>
              <li>Reduces landfill load and methane emissions</li>
              <li>Fully automated IoT-based monitoring for efficiency</li>
              <li>Generates valuable by-products like organic slurry (used as fertilizer)</li>
              <li>Reduces dependency on fossil-based fuels</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl shadow-md border bg-white">
            <h3 className="text-xl font-bold">Applications & Environmental Impact</h3>
            <p className="mt-3 text-gray-700">Bio-CNG serves as a clean fuel for <strong>transportation, industrial heating, power generation</strong>, and <strong>cooking</strong> in large institutions. Each ton of food waste processed prevents harmful methane release, saves landfill space, and supports circular waste management, contributing to India’s <strong>Zero Waste and Green Energy</strong> goals.</p>
          </div>
        </div>
      </div>

      {/* Bio-Coal detailed section */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-8 bg-gradient-to-r from-green-50 to-blue-50">
          <h2 className="text-3xl font-extrabold text-gray-900">🌿 Bio-Coal Plant – Turning City Waste into Green Energy</h2>
          <p className="mt-4 text-gray-700">At <strong>WAStec Bio-GAS Pvt. Ltd.</strong>, our <strong>Bio-Coal Plant</strong> is dedicated to transforming urban green waste, agricultural residues, and horticultural byproducts into sustainable, high-energy bio-coal briquettes. This initiative aligns with our vision of promoting clean energy, circular economy practices, and waste valorization.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl shadow-md border bg-white">
            <h3 className="text-xl font-bold">What is Bio-Coal?</h3>
            <p className="mt-3 text-gray-700">Bio-Coal (also known as biomass briquette) is a renewable and carbon-neutral energy source made from organic waste such as dry leaves, sawdust, coconut shells, and tree trimmings. Through a process of <em>shredding, drying, and compression</em>, this biomass is converted into dense, energy-rich briquettes that can replace fossil coal in various industries.</p>
          </div>

          <div className="p-6 rounded-xl shadow-md border bg-white">
            <h3 className="text-xl font-bold">How WAStec’s Bio-Coal Plant Works</h3>
            <ol className="mt-3 list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Collection and Segregation:</strong> Green and dry waste from municipal sources, gardens, and farms is collected and sorted.</li>
              <li><strong>Shredding and Drying:</strong> The biomass is processed to remove moisture and prepare it for compression.</li>
              <li><strong>Briquetting:</strong> Using advanced high-pressure machines, the dried biomass is compacted into uniform bio-coal briquettes.</li>
              <li><strong>Packaging and Distribution:</strong> The final product is stored and supplied to industries as a sustainable energy alternative.</li>
            </ol>
          </div>

          <div className="p-6 rounded-xl shadow-md border bg-white">
            <h3 className="text-xl font-bold">Key Features</h3>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Converts green city waste into usable renewable fuel</li>
              <li>Produces <strong>smokeless, odorless, and efficient</strong> briquettes</li>
              <li>Utilizes low-cost, locally available biomass</li>
              <li>Helps reduce dependency on fossil fuels and charcoal</li>
              <li>Easy storage and long shelf life</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl shadow-md border bg-white">
            <h3 className="text-xl font-bold">Applications</h3>
            <p className="mt-3 text-gray-700">WAStec Bio-Coal briquettes are widely used in industrial boilers and furnaces, power generation plants, brick kilns and ceramic industries, and institutional cooking and rural energy systems.</p>
          </div>

          <div className="p-6 rounded-xl shadow-md border bg-white">
            <h3 className="text-xl font-bold">Environmental & Economic Benefits</h3>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Reduces landfill waste and greenhouse gas emissions</li>
              <li>Prevents open burning of agricultural residues</li>
              <li>Promotes rural employment and sustainable livelihoods</li>
              <li>Supports India’s Net-Zero Carbon Emission goals</li>
              <li>Encourages circular economy through waste-to-energy transformation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to collaborate on a project?</h2>
          <p className="mt-3 text-green-100">We help design and deploy scalable solutions that turn waste into clean energy and valuable products.</p>
          <div className="mt-6">
            <a to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-md font-medium">Contact Our Team</a>
          </div>
        </div>
      </div>
    </div>
  )
}

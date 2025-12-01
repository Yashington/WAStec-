import { Link } from 'react-router-dom'

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "WAStec Wins National Award for Sustainable Innovation",
      excerpt: "Our biogas purification technology recognized by Ministry of Environment for outstanding contribution to waste management.",
      date: "October 5, 2025",
      category: "Awards"
    },
    {
      id: 2,
      title: "BARC Collaboration Leads to Breakthrough in Coconut Waste Processing",
      excerpt: "Joint research with Bhabha Atomic Research Centre results in 40% increase in biogas yield from coconut waste.",
      date: "September 28, 2025",
      category: "Research"
    },
    {
      id: 3,
      title: "New Plant Inaugurated in Kochi, Kerala",
      excerpt: "Our third biogas facility begins operations, processing 2 tons of coconut waste daily.",
      date: "September 15, 2025",
      category: "Projects"
    },
    {
      id: 4,
      title: "WAStec Featured in Sustainable Energy Journal",
      excerpt: "Our innovative biphasic digestion process highlighted in leading environmental technology publication.",
      date: "August 22, 2025",
      category: "Media"
    },
    {
      id: 5,
      title: "Partnership with State Government for Municipal Waste Program",
      excerpt: "Selected to implement biogas solutions across 15 municipalities in Maharashtra.",
      date: "August 10, 2025",
      category: "Partnerships"
    },
    {
      id: 6,
      title: "Investment Round Secures $2.5M for Expansion",
      excerpt: "Series A funding led by GreenTech Ventures to scale operations across South India.",
      date: "July 18, 2025",
      category: "Investment"
    }
  ]

  const pressReleases = [
    {
      id: 1,
      title: "WAStec Announces Partnership with BARC for Advanced Biogas Research",
      date: "June 15, 2025"
    },
    {
      id: 2,
      title: "New Patent Granted for Coconut Waste Valorization Technology",
      date: "May 30, 2025"
    },
    {
      id: 3,
      title: "WAStec Joins UN Global Compact for Sustainable Development",
      date: "April 22, 2025"
    }
  ]

  // Indian biogas news and initiatives
  const indianBiogasNews = [
    {
      id: 1,
      title: "Government Launches National Biogas and Manure Management Programme",
      excerpt: "Ministry of New and Renewable Energy expands support for biogas plants across rural India.",
      date: "September 20, 2025",
      source: "MNRE"
    },
    {
      id: 2,
      title: "Swachh Bharat Mission Integrates Biogas Solutions for Organic Waste",
      excerpt: "Urban sanitation program includes decentralized biogas systems for sustainable waste management.",
      date: "August 15, 2025",
      source: "Ministry of Jal Shakti"
    },
    {
      id: 3,
      title: "Indian Railways Adopts Biogas for Cooking in Railway Stations",
      excerpt: "Initiative to convert organic waste from railway premises into clean cooking fuel.",
      date: "July 30, 2025",
      source: "Indian Railways"
    }
  ]

  // Global sustainability goals and initiatives
  const globalGoalsNews = [
    {
      id: 1,
      title: "UN Report Highlights Biogas as Key Solution for SDG 7 and 13",
      excerpt: "Sustainable Development Goals progress report emphasizes biogas technology for clean energy and climate action.",
      date: "October 1, 2025",
      source: "United Nations"
    },
    {
      id: 2,
      title: "EU Announces €500 Million Investment in Biogas Infrastructure",
      excerpt: "European Green Deal funding to support renewable gas projects including biogas upgrading facilities.",
      date: "September 10, 2025",
      source: "European Commission"
    },
    {
      id: 3,
      title: "Global Methane Pledge Expands to Include Biogas Technologies",
      excerpt: "Over 100 countries commit to reduce methane emissions by 30% through waste-to-energy solutions.",
      date: "August 5, 2025",
      source: "Climate Summit"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              News & Media
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Latest updates, press releases, and media coverage
            </p>
          </div>
        </div>
      </div>

      {/* Featured News */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Latest News</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What's Happening at WAStec
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.slice(0, 3).map((news) => (
              <div key={news.id} className="flex flex-col rounded-xl shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                    <span className="text-gray-500">News Image</span>
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{news.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{news.excerpt}</p>
                  </div>
                  <div className="mt-6">
                    <Link to="#" className="text-green-600 hover:text-green-800 font-medium">
                      Read full story →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indian Biogas News and Swachh Bharat */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">India's Biogas Initiative</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Swachh Bharat & National Biogas Programs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Connecting India's cleanliness mission with sustainable energy solutions
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {indianBiogasNews.map((news) => (
                  <li key={news.id}>
                    <Link to="#" className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <p className="text-sm font-medium text-green-600 truncate">{news.title}</p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {news.source}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {news.excerpt}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p>{news.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 sm:p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold">Swachh Bharat & Biogas Integration</h3>
                  <p className="mt-4 text-green-100">
                    India's flagship cleanliness mission is increasingly integrating biogas technology as a sustainable solution for organic waste management. 
                    The program aims to convert waste into energy while maintaining clean and healthy environments in urban and rural areas.
                  </p>
                  <p className="mt-4 text-green-100">
                    Through decentralized biogas systems, households and communities can manage their organic waste effectively while generating clean cooking fuel, 
                    contributing to both sanitation goals and energy security.
                  </p>
                  <div className="mt-6">
                    <Link to="#" className="inline-flex items-center px-4 py-2 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-green-700">
                      Learn More About Swachh Bharat
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white bg-opacity-20 border-2 border-dashed border-white rounded-xl w-full h-48 sm:h-64 flex items-center justify-center">
                    <span className="text-white text-sm">Swachh Bharat & Biogas Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Goals and Indian Connection */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Global Goals & India's Role</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Bridging Local Action with Global Sustainability
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              How India's biogas initiatives contribute to worldwide environmental goals
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Global Sustainability News</h3>
              <div className="bg-gray-50 rounded-lg shadow overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {globalGoalsNews.map((news) => (
                    <li key={news.id}>
                      <Link to="#" className="block hover:bg-gray-100">
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <p className="text-sm font-medium text-green-600 truncate">{news.title}</p>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                {news.excerpt}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                {news.source}
                              </span>
                              <span className="ml-2">{news.date}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">India's Contribution to Global Goals</h3>
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-md border border-green-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-green-100 p-2 rounded-full">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">SDG 7: Affordable and Clean Energy</h4>
                    <p className="mt-2 text-gray-600">
                      India's biogas programs provide clean cooking fuel to millions of households, directly contributing to UN Sustainable Development Goal 7.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mt-6">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">SDG 11: Sustainable Cities</h4>
                    <p className="mt-2 text-gray-600">
                      Urban biogas projects under Swachh Bharat support sustainable city development by managing organic waste effectively.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mt-6">
                  <div className="flex-shrink-0">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">SDG 13: Climate Action</h4>
                    <p className="mt-2 text-gray-600">
                      Biogas reduces methane emissions from organic waste decomposition and provides clean energy, directly supporting climate action goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All News */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">All News</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Archive of Our Updates
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {newsItems.map((news) => (
                  <li key={news.id}>
                    <Link to="#" className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <p className="text-sm font-medium text-green-600 truncate">{news.title}</p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {news.category}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {news.excerpt}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p>{news.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Press Releases */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Press Releases</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Official Announcements
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {pressReleases.map((press) => (
                  <li key={press.id}>
                    <Link to="#" className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-green-600 truncate">{press.title}</p>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p>{press.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="#" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                View All Press Releases
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Media Coverage */}
      <div className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Media Coverage</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              As Featured In
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex justify-center items-center bg-white p-4 sm:p-6 rounded-lg shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded w-24 h-12 sm:w-32 sm:h-16 flex items-center justify-center">
                <span className="text-gray-500 text-xs sm:text-sm">Media Logo</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white p-4 sm:p-6 rounded-lg shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded w-24 h-12 sm:w-32 sm:h-16 flex items-center justify-center">
                <span className="text-gray-500 text-xs sm:text-sm">Media Logo</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white p-4 sm:p-6 rounded-lg shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded w-24 h-12 sm:w-32 sm:h-16 flex items-center justify-center">
                <span className="text-gray-500 text-xs sm:text-sm">Media Logo</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white p-4 sm:p-6 rounded-lg shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded w-24 h-12 sm:w-32 sm:h-16 flex items-center justify-center">
                <span className="text-gray-500 text-xs sm:text-sm">Media Logo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
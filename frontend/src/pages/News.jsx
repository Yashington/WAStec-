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
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {news.category}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">{news.date}</span>
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
                        <div className="flex items-center justify-between">
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

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded w-32 h-16 flex items-center justify-center">
                <span className="text-gray-500">Media Logo</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded w-32 h-16 flex items-center justify-center">
                <span className="text-gray-500">Media Logo</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded w-32 h-16 flex items-center justify-center">
                <span className="text-gray-500">Media Logo</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded w-32 h-16 flex items-center justify-center">
                <span className="text-gray-500">Media Logo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
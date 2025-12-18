// Product data for all products
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product2.jpg'
import product3 from '../assets/images/product3.jpg'
import product4 from '../assets/images/product4.jpg'

// Debugging: log imported images
console.log('Product images imported:', { product1, product2, product3, product4 });

export const products = [
  {
    id: 'portable-biogas-plant',
    slug: 'portable-biogas-plant',
    title: 'Portable Biogas Plant',
    description: 'Compact, efficient systems that convert food waste into clean biogas and nutrient-rich slurry. Ideal for restaurants, hotels, institutions and community kitchens looking to manage waste on-site while generating renewable energy.',
    shortDescription: 'Compact systems to convert food waste into clean energy.',
    image: product1,
    keyDetails: {
      feedstock: 'Food waste, kitchen rejects, pre-consumer waste',
      size: 'Small → Medium',
      maintenance: 'Low maintenance with onsite support',
      frequency: 'Monthly'
    },
    benefits: [
      'Onsite renewable energy for cooking and heating',
      'Reduces organic waste sent to landfill',
      'Produces nutrient-rich slurry for agriculture'
    ],
    features: [
      'Modular design, easy commissioning',
      'Robust operation with minimal downtime',
      'Optional automation and monitoring'
    ],
    applications: 'Restaurants, campuses, hotels, food processing units and community kitchens.',
    ctaButtons: [
      { text: 'Open Biogas Monitoring App', link: 'https://example.com/biogas-monitoring', external: true },
      { text: 'Get a Quote', link: '/contact' }
    ]
  },
  {
    id: 'biomass-briquette',
    slug: 'biomass-briquette',
    title: 'Biomass Briquette',
    description: 'Eco-friendly compressed blocks made from agricultural residues like rice husk, groundnut shells, and coconut shells. These briquettes offer a sustainable alternative to fossil fuels for industrial and domestic heating applications.',
    shortDescription: 'Eco-friendly briquettes from horticultural residues.',
    image: product2,
    keyDetails: {
      feedstock: 'Rice husk, groundnut shells, coconut shells',
      size: 'Various sizes available',
      maintenance: 'No maintenance required',
      frequency: 'N/A'
    },
    benefits: [
      'Renewable energy source',
      'Reduces agricultural waste',
      'Lower carbon emissions compared to fossil fuels'
    ],
    features: [
      'High calorific value',
      'Clean burning with minimal smoke',
      'Uniform size and shape for easy handling'
    ],
    applications: 'Industrial boilers, domestic heating, cooking stoves, and barbecue grills.',
    ctaButtons: [
      { text: 'Get a Quote', link: '/contact' }
    ]
  },
  {
    id: 'coir-products',
    slug: 'coir-products',
    title: 'Coir Products',
    description: 'Natural fiber products derived from coconut husks including cocopeat, coir ropes, coir mats, and coir pots. These products are biodegradable and ideal for horticulture, erosion control, and landscaping applications.',
    shortDescription: 'Cocopeat, bundles, sticks and ropes for agriculture.',
    image: product3,
    keyDetails: {
      feedstock: 'Coconut husks',
      size: 'Various products and sizes',
      maintenance: 'No maintenance required',
      frequency: 'N/A'
    },
    benefits: [
      '100% natural and biodegradable',
      'Improves soil water retention',
      'Provides excellent aeration for plant roots'
    ],
    features: [
      'Available in various forms',
      'Durable and resistant to saltwater',
      'Eco-friendly alternative to synthetic materials'
    ],
    applications: 'Horticulture, gardening, erosion control, landscaping, and hydroponics.',
    ctaButtons: [
      { text: 'Get a Quote', link: '/contact' }
    ]
  },
  {
    id: 'organic-booster',
    slug: 'organic-booster',
    title: 'Organic Fermented Booster',
    description: 'Nutrient-rich liquid fertilizer produced from fermented biogas slurry. This organic booster enhances soil fertility, promotes healthy plant growth, and increases crop yield without harmful chemicals.',
    shortDescription: 'Nutrient-rich biogas slurry for improved soil health.',
    image: product4,
    keyDetails: {
      feedstock: 'Fermented biogas slurry',
      size: 'Liquid concentrate in various packaging',
      maintenance: 'Store in cool, dry place',
      frequency: 'As needed'
    },
    benefits: [
      'Improves soil structure and fertility',
      'Promotes beneficial microbial activity',
      'Increases crop yield naturally'
    ],
    features: [
      'Easy to apply and absorb',
      'Balanced NPK ratio',
      'Compatible with drip irrigation systems'
    ],
    applications: 'Agricultural fields, gardens, nurseries, and greenhouse cultivation.',
    ctaButtons: [
      { text: 'Get a Quote', link: '/contact' }
    ]
  }
]

// Helper function to find a product by slug
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug)
}
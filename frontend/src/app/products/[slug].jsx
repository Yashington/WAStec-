import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductBySlug } from '../../data/products'
import ProductDetailTemplate from '../../components/ProductDetailTemplate'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  
  // Debugging: log slug and product data
  console.log('Slug:', slug);
  console.log('Product from data:', product);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
          <a 
            href="/products" 
            className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Back to Products
          </a>
        </div>
      </div>
    )
  }

  return <ProductDetailTemplate product={product} />
}
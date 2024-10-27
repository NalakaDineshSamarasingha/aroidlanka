import React from 'react'
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { id } = useParams(); 
  return (
    <div>
    <h1>Product Page</h1>
    <p>Showing details for product ID: {id}</p>
    {/* Render product details based on id */}
</div>
  )
}

export default ProductPage
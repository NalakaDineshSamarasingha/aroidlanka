import React from 'react'
import './NewSection.css'
import ProductCard from '../ProductCard/ProductCard'

function NewSection() {
  return (
    <div className='new-main-container'>
        <div className='secound'>
            <p className='sub font-extralight text-center uppercase'>Explore Now</p>
            <p className='collection-title font-extralight text-center pb-8'>New Arrival</p>
            <div className='list'>
                <ProductCard image={'/upload/main_product.webp'} availability={"Out Of Stock"} price={"$100"} disprice={"$120"} description={"Anthurium king of spades x silver blush"}/>
                <ProductCard image={'/upload/main_product.webp'} availability={"Out Of Stock"} price={"$100"} disprice={"$120"} description={"Anthurium king of spades x silver blush"}/>
                <ProductCard image={'/upload/main_product.webp'} availability={"Out Of Stock"} price={"$100"} disprice={"$120"} description={"Anthurium king of spades x silver blush"}/>
                <ProductCard image={'/upload/main_product.webp'} availability={"Out Of Stock"} price={"$100"} disprice={"$120"} description={"Anthurium king of spades x silver blush"}/>
            </div>
          <div className='btn-cont'>
            <button className='all'>All Product</button>
          </div>
        </div>
    </div>
  )
}

export default NewSection
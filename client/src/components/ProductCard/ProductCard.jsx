import React from 'react'
import './ProductCard.css'

function ProductCard({image, availability, price, disprice, description}) {
  return (
    <div className='product-card-cont'>
        <div className='card-image-container'>
            <div className='card-header'>
                <p className="title">{availability}</p>
                <div>
                    <button className="card-btn-on-image">+</button>
                </div>
            </div>
            <img src={image} alt='product Image' className=''/>     
        </div>
        <div className='card-desc '>
            {description}
        </div>
        <div className='price-list'>
            <span className='dis-price'>{disprice}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
  )
}

export default ProductCard
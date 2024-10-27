import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

function ProductCard({id,image, availability, price, disprice, description}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${id}`); 
    };
  return (
    <div className='product-card-cont'>
        <div className='card-image-container'>
            <div className='card-header'>
                <p className="title">{availability}</p>
                <div>
                    <button className="card-btn-on-image">+</button>
                </div>
            </div>
            <img src={image} alt='product' className=''/>     
        </div>
        <div className='card-desc ' onClick={handleClick}>
            {description}
        </div>
        <div className='price-list' onClick={handleClick}>
            <span className='dis-price'>{disprice}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
  )
}

export default ProductCard
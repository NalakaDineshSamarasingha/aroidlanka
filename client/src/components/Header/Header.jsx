import React from 'react'
import Header_image from '../../assets/bannerLast.png'
import './Header.css'

function Header() {
  return (
    <div className='image-container'>
        <div className='header'>
            <p className="title-new">First time in sri lanka</p>
            <p className="description">Welcome to lanka aroid</p>
            <div>
                <button className="btn-on-image">Explore Now</button>
            </div>
        </div>
        <img src={Header_image} alt='Header Image' className='w-screen'/>    
    </div>
  )
}

export default Header
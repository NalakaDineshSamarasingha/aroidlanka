import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <div className='footer-main '>
        <div className='row'>
            <div className='col '>
                <div className='about-cont'>
                    <span className='footer-title'>About Us</span>
                    <p className='about mt-4'>
                        Lanka Aroid is a passionate and dedicated plant shop based in Sri Lanka, 
                        specializing in the cultivation and sale of exotic aroids. Our mission is 
                        to bring the beauty of aroid plants into homes and gardens across the island 
                        and beyond. With a focus on high-quality, sustainably grown plants, we cater 
                        to both seasoned plant collectors and novice gardeners who share a love for greenery.
                    </p>
                    <br/>
                    <p className='about'>
                        We offer a wide variety of aroid species, including Aglaonema, Anthurium, Alocasia, 
                        Monstera, and more. Each plant is hand-selected to ensure it meets our strict quality 
                        standards. Our collection includes rare and variegated varieties that are perfect for 
                        those looking to add something unique to their collection.
                    </p>
                    <br></br>
                    <p className='about'>
                        At Lanka Aroid, we are more than just a plant shop; we are a community. We 
                        provide expert advice on plant care and cultivation to help our customers grow 
                        thriving plants. Whether you're looking for the perfect plant to start your indoor 
                        garden or adding to your existing collection, we're here to help.
                    </p>
                    <br/>
                    <p className='about'>Join us in our mission to make Sri Lanka a greener place, one plant at a time!</p>
                </div>
                <div className='social-links'>
                    
                </div>
            </div>
            <div className='col'>
                <span className='footer-title'>policy</span>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>FAQ</li>
                    <li>Return & Refund Policy</li>
                    <li>Shipping Cost</li>
                </ul>
            </div>
            <div className='col'>
                <span className='footer-title'>Information</span>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Youtube Reviews</li>
                    <li>Testimonial</li>
                </ul>
            </div>
        </div>
        <div className='row '> <p className='copyright'>&copy; Lanka Aroid </p> </div>
    </div>
  )
}

export default Footer
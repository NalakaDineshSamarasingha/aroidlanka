import React, { useState, useEffect } from 'react';
import './ImageGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const getIcon = (platform) => {
  switch (platform) {
    case 'instagram':
      return <FontAwesomeIcon icon={faInstagram} />;
    case 'twitter':
      return <FontAwesomeIcon icon={faTwitter} />;
    case 'facebook':
      return <FontAwesomeIcon icon={faFacebook} />;
    default:
      return null;
  }
};

const getRandomImage = (images, exclude) => {
  const filteredImages = images.filter((image) => !exclude.includes(image));
  const randomIndex = Math.floor(Math.random() * filteredImages.length);
  return filteredImages[randomIndex];
};

function ImageGallery({ images }) {
  const [currentImages, setCurrentImages] = useState(() => {
    // Shuffle and select 8 random images initially
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  });

 

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select one of the displayed images to change
      const newChangingIndex = Math.floor(Math.random() * 10); 
     

      const newImage = getRandomImage(images, currentImages); // Get a new image not in the current display
      setCurrentImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[newChangingIndex] = newImage; // Replace the image at the selected index
        return updatedImages;
      });

    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentImages, images]);

  return (
    <div className='gallery py-16 '>
        <p className='collection-title py-4'>Say Hello to our Customer</p>
        <div className="gallery-container">
        {currentImages.map((image, index) => (
            <a key={index} href={image.link} target="_blank" rel="noopener noreferrer" className="gallery-link">
            <div className="image-wrapper">
                <img
                src={image.src}
                alt={`gallery-img-${index}`}
                className="gallery-image"
                />
                <div className="overlay">
                {getIcon(image.platform)}
                </div>
            </div>
            </a>
        ))}
        </div>
    </div>
  );
}

export default ImageGallery;

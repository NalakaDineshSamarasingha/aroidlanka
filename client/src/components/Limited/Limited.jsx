import React, { useEffect, useState, useCallback } from "react";
import "./Limited.css";

function Limited({ minCount = 1, maxCount = 10 }) {
  const [count, setCount] = useState(minCount);

  const handleIncrement = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };

  const images = [
    "/upload/Offermain.webp",
    "/upload/offer1.webp",
    "/upload/offer2.webp",
    "/upload/offer3.webp",
    "/upload/offer4.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextSlide = useCallback(() => {
    setIsTransitioning(true); // Trigger transition animation
    setTimeout(() => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsTransitioning(false); // Remove transition effect
    }, 500); // Duration of the animation
  }, [currentIndex, images.length]); // Memoize with useCallback to prevent re-creation on each render

  // Auto-scrolling feature
  useEffect(() => {
    const autoScroll = setInterval(() => {
      handleNextSlide();
    }, 10000);

    return () => clearInterval(autoScroll);
  }, [handleNextSlide]); // Use handleNextSlide as a dependency

  const handlePrevSlide = () => {
    setIsTransitioning(true); // Trigger transition animation
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setIsTransitioning(false); // Remove transition effect
    }, 500); // Duration of the animation
  };

  return (
    <div className="">
      <div className="new-main-container py-16">
        <div className="secound">
          <p className="sub font-extralight text-center uppercase">Limited time</p>
          <p className="collection-title font-extralight text-center pb-8">Offer</p>
        </div>
        <div className="product-place">
          <div className="offer-left">
            <div className="slider-container">
              <div className="slider-image-wrapper">
                {/* Image with smooth slide and fade transition */}
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className={`slider-image ${isTransitioning ? "slide-fade-animation" : ""}`}
                />
              </div>

              {/* Navigation Dots and Buttons */}
              <div className="slider-controls">
                {/* Previous Button */}
                <button onClick={handlePrevSlide} className="slider-button">
                  &#10094;
                </button>

                {/* Dots Navigation */}
                <div className="slider-dots">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`dot ${index === currentIndex ? "active" : ""}`}
                    ></button>
                  ))}
                </div>

                {/* Next Button */}
                <button onClick={handleNextSlide} className="slider-button">
                  &#10095;
                </button>
              </div>
            </div>
          </div>
          <div className="offer-right">
            <p className="p-name">alocosia jacklyn veriegated</p>
            <div className="limited-price-list">
              <p className="dis-price">$1,000</p>
              <p className="price">$1,300</p>
            </div>
            <div className="count">
              <div className="count-selector-container font-light">
                <button onClick={handleDecrement} className="count-button">
                  -
                </button>
                <span className="count-display">{count}</span>
                <button onClick={handleIncrement} className="count-button">
                  +
                </button>
              </div>
              <p className="avilble">Only 1 piece in stock!</p>
            </div>
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Limited;

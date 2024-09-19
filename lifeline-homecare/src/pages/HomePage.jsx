import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6'; 
import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import ScrollToTopArrow from '../components/ScrollToTopArrow';

const images = [img1, img2, img3, img4];

const texts = [
  {
    line1: 'Personalized Care in the Comfort of Home',
  },
  {
    line1: 'Comprehensive Home Healthcare Services',
  },
  {
    line1: 'Caring beyond limits',
  },
  {
    line1: 'Affordable healthcare at home',
  },
];

const HomePage = ({ isMobile }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // Change image every 9 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentImageIndex]); // Depend on currentImageIndex to ensure synchronization

  const handleButtonClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        // Swipe left (next image)
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        // Swipe right (previous image)
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    }
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="home" className="mt-20 pt-2 bg-gray-50">
      <div>
        <div className="grid items-center justify-center text-center mt-10">
          <p className="text-3xl font-semibold text-red-500">
            Lifeline Adiss Homecare
          </p>

          {/* Display only line 1 from the text array */}
          <p className="text-xl font-light">
            {texts[currentImageIndex].line1}
          </p>
        </div>

        <div
          className="relative flex flex-col items-center mt-5"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative">
            <button
              onClick={handlePrevClick}
              className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
            >
              &lt;
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              style={{
                height: isMobile ? '350px' : '450px',
                width: isMobile ? '300px' : '450px',
              }}
              className="rounded-2xl shadow-lg transition-transform duration-1000 ease-in-out"
            />
            <button
              onClick={handleNextClick}
              className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
            >
              &gt;
            </button>
          </div>
          <div className="flex justify-center mt-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-5 h-5 mx-2 rounded-full ${
                  currentImageIndex === index ? 'bg-red-500' : 'bg-gray-50'
                } transition-colors duration-300 hover:bg-red-500 border-2 border-black`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center"></div>

      <ScrollToTopArrow />
    </div>
  );
};

export default HomePage;



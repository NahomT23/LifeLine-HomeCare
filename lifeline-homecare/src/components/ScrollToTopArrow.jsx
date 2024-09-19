import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50"> {/* Ensures it's above all elements */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-red-900 text-white p-3 rounded-full shadow-lg hover:bg-red-950 transition-all duration-300"
          style={{ zIndex: 9999 }} // Maximum z-index to ensure it's above everything
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopArrow;

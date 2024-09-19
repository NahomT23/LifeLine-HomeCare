import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import values from '../assets/images/values.jpg';
import commitment from '../assets/images/commitment.jpg';
import vision from '../assets/images/vision.jpg';
import mission from '../assets/images/mission.jpg';
import community from '../assets/images/community.png';

const AboutPage = () => {
  const controls = useAnimation();
  const carouselRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [inView, setInView] = useState(false);

  const images = [
    { 
      src: values, 
      title: "Values", 
      description: "We are built on the foundation of professionalism, compassion, trustworthiness, personalization, and a senior-friendly approach." 
    },
    { 
      src: commitment, 
      title: "Commitment", 
      description: "Our commitment to excellence drives us to continuously enhance our services, ensuring top-tier care for every patient." 
    },
    { 
      src: vision, 
      title: "Vision", 
      description: "Our vision is to lead the way in home-based healthcare, setting the standard across Ethiopia." 
    },
    { 
      src: mission, 
      title: "Mission", 
      description: "We aim to provide comprehensive, affordable, and high-quality healthcare services directly in your home." 
    },
    { 
      src: community, 
      title: "Community", 
      description: "Engaging with communities, we promote well-being and raise awareness for a healthier future for everyone." 
    },
  ];

  useLayoutEffect(() => {
    if (carouselRef.current) {
      setScrollWidth(carouselRef.current.scrollWidth / 3); // Adjust for proper looping
    }
  }, [carouselRef.current]);

  useEffect(() => {
    const startAutoScroll = () => {
      controls.start({
        x: `-${scrollWidth}px`,
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // Adjust duration for speed
          ease: 'linear',
        },
      });
    };

    if (!dragging) {
      startAutoScroll();
    }

    return () => {
      controls.stop();
    };
  }, [dragging, controls, scrollWidth]);

  const handleDragEnd = (event, info) => {
    setDragging(false);
    // Ensure that the dragging stops at the correct position
    controls.start({
      x: `-${scrollWidth}px`,
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="about" className="grid items-center justify-center pt-10 px-5 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-light text-lg text-center">
          <h1 className='font-bold text-red-600 text-xl mb-4'><strong>What Makes Us Unique</strong></h1>
          Founded and operated by medical doctors 
          Senior specialist doctors 
          Multidisciplinary team Comprehensive care including laboratory and pharmacy services
          Innovative health workers registration & deployment
        </p>
        <hr/>
        <p className="font-light text-lg text-center">
          When someone suffers a stroke, the journey to recovery truly begins after hospital discharge,
          bringing new challenges for both the patient and their family. At Lifeline, we provide compassionate 
          home care services that support this transition, helping patients regain independence and improve 
          their quality of life. Our dedicated team is here to make this new chapter as smooth and hopeful as possible.
        </p>
        <p className="font-bold text-xl mt-5 text-center">
          But who is there to guide them through this challenging transition?
        </p>
        <p className="font-light text-lg text-center mb-10">
          Lifeline was created as a quest to answer this question.
        </p>
      </motion.div>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex"
          ref={carouselRef}
          animate={controls}
          initial={{ x: 0 }}
          drag="x"
          dragConstraints={{ right: 0, left: -scrollWidth }}
          onDragStart={() => {
            setDragging(true);
            controls.stop(); // Stop automatic scrolling while dragging
          }}
          onDragEnd={handleDragEnd}
        >
          {[...images, ...images, ...images].map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 border-2 shadow-md shadow-red-400 p-1 mx-4 rounded-lg bg-white"
              style={{ minWidth: '300px', maxWidth: '300px', marginRight: '20px' }}
            >
              <div className="flex justify-center items-center mb-4" style={{ height: '125px' }}>
                <img src={image.src} alt={image.title} style={{ width: '180px', height: '100%' }} />
              </div>
              <p className="text-xl font-bold text-center">{image.title}</p>
              <p className="text-center text-sm">{image.description}</p>
            </div>
          ))}
        </motion.div>
      </div>


      <style jsx>{`
        @media (min-width: 768px) {
          .flex-shrink-0 {
            min-width: 350px;
            max-width: 350px;
          }
          .text-xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

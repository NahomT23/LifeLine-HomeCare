import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialsPage = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
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
    <div id="testimonials" className="bg-gray-50 py-10 px-5">
      <div ref={sectionRef} className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-red-600 font-bold text-4xl mb-4">Testimonials</h1>
          <p className="text-gray-700 text-lg font-semibold">
            Hear directly from our clients about their experiences with Lifeline Home Based Healthcare.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              x: 0,
            }}
            className="bg-white shadow-sm shadow-red-400 rounded-lg border border-gray-200 p-5 flex flex-col justify-between transition-transform duration-85 ease-in-out hover:shadow-md hover:shadow-red-600"
          >
            <p className="text-lg text-gray-800 mb-4">
              "My uncle had a stroke and he was being treated at a private hospital. He had a good recovery and the doctors told us that he can now be discharged. But we couldn't accept it as it was totally unimaginable for us to take care of him at home with a feeding tube in his mouth, a urinary catheter and a complete left side paralysis. Besides, we have to take him back to the hospital every week for physiotherapy. It was at this time that we heard about the service Lifeline Home Based Healthcare provides. Having them changed everything. The doctors visited him once per week at home adjusting his medications, changing his feeding tube and catheter on time and the physiotherapist will visit him three times per week. My uncle is now well and can walk with little support. He owes it to the Lifeline team that he now can eat his favorite food kitfo."
            </p>
            <p className="text-lg font-semibold text-right text-red-800">Mr. Daniel Abera</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              x: 0,
            }}
            className="bg-white shadow-sm shadow-red-400 rounded-lg border border-gray-200 p-5 flex flex-col justify-between transition-transform duration-75 ease-in-out hover:shadow-md hover:shadow-red-600"
          >
            <p className="text-lg text-gray-800 mb-4">
              "I was diagnosed with a brain tumor. Three months back my doctors at a private hospital told me I needed urgent surgery and I would lose a lot of my functions. The surgery was successful, but after that I lost the ability to walk and move my hand. This was very frustrating. With the addition of chemotherapy I was practically bedridden, then I heard the service of Lifeline Home Based Healthcare. I called them and started to receive home care. Then through constant and caring support from physicians, nurses and physiotherapists of Lifeline's team, I started to regain some of my function. I'm very thankful for their services that helped me improve my quality of life. I recommend them to patients with conditions like me."
            </p>
            <p className="text-lg font-semibold text-right text-red-800">Mrs. Aselefech Lema</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;

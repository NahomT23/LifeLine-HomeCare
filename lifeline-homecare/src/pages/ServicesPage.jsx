import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
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
    <div id="services" className="py-10 px-5 bg-gray-50 min-h-screen">
      <div ref={sectionRef} className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-4xl font-bold text-red-600">Our Services</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm shadow-red-600"
          >
            <p className="text-xl font-semibold text-red-700 mb-4">General Services</p>
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-bold">Wellness Package:</span> General checkup and basic routine laboratory tests for Diabetics, Hypertension, and other Chronic Illnesses with consultation for nutrition, diet, and physical activity.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-bold">Family Package:</span> Regular and customized wellness checkup for your family.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-bold">Health Consultation</span>
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-bold">Physiotherapy</span>
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-bold">Nursing Care</span>
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <span className="font-bold">Palliative Care</span>
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-bold">Laboratory Services</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm shadow-red-600"
          >
            <p className="text-xl font-semibold text-red-700 mb-4">Medical Equipment</p>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li><span className="font-bold">Patient Bed</span></li>
              <li><span className="font-bold">Wheelchair</span></li>
              <li><span className="font-bold">Oxygen Cylinder</span></li>
              <li><span className="font-bold">Suction Machine</span></li>
              <li><span className="font-bold">BP Cuff</span></li>
              <li><span className="font-bold">Glucometer</span></li>
              <li><span className="font-bold">Pulse Oximeter</span></li>
              <li><span className="font-bold">Thermometer</span></li>
              <li><span className="font-bold">Weight Scale</span></li>
              <li><span className="font-bold">Referral Linkage to our selected partner hospitals</span></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

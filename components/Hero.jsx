import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const words = ["Secure", "Affordable", "Reliable", "Fast Delivery", "Best Deals"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change words every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.div className="z-10 text-white px-6"
        initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl md:text-7xl font-bold">
          Azela Trading – <motion.span className="text-[#FF6B00]"
            key={index}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {words[index]}
          </motion.span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">Your ultimate marketplace for quality & trust.</p>
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 bg-[#FF6B00] text-white font-bold rounded-md hover:bg-[#D65A00]">
            Shop Now
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

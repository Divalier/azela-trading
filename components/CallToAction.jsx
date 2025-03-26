'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 text-center">
      <div className="container mx-auto px-6">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevate Your Shopping Experience
        </motion.h2>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl mt-4">
          Discover unbeatable deals, top-rated products, and expert services—all in one place.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/shop">
            <motion.button 
              className="px-6 py-3 bg-white text-orange-600 font-bold rounded-lg shadow-md hover:bg-gray-100 transition"
              whileHover={{ scale: 1.1 }}
            >
              Shop Now
            </motion.button>
          </Link>
          <Link href="/services">
            <motion.button 
              className="px-6 py-3 bg-black text-white font-bold rounded-lg shadow-md hover:bg-gray-800 transition"
              whileHover={{ scale: 1.1 }}
            >
              Explore Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

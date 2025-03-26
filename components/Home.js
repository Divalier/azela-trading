'use client';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs';
import HighRatedProducts from './HighRatedProducts';
import Services from './Services';
import AuthSection from './AuthSection';
import ServicesSection from './ServicesSection';
import KitchenSection from './KitchenSection';
import CallToAction from './CallToAction';
import CustomerTestimonials from './CustomerTestimonials';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Navbar (Sticky on Scroll) */}
      <motion.div 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="sticky top-0 z-50"
      >
        <Navbar />
      </motion.div>

      {/* Hero Section - First Impression */}
      <HeroSection />

      {/* Why Choose Us (Fade-in) */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-100"
      >
        <WhyChooseUs />
      </motion.section>

      {/* High Rated Products - Smooth Horizontal Scroll */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white"
      >
        <HighRatedProducts />
      </motion.section>

      {/* Our Services - Expanding 2x2 Grid Layout */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-200"
      >
        <Services />
      </motion.section>

      {/* Login / Join Us - User Interaction Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-50"
      >
        <AuthSection />
      </motion.section>

      {/* High Rated Services (Expanding Album Cards) */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white"
      >
        <ServicesSection />
      </motion.section>

      {/* Kitchen Section (3D Visual with Food Display) */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#FF6B00] text-white"
      >
        <KitchenSection />
      </motion.section>

      {/* Call to Action (Highlighted for Engagement) */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#D65A00] text-white"
      >
        <CallToAction />
      </motion.section>

      {/* Customer Testimonials + Collaborations */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-100"
      >
        <CustomerTestimonials />
      </motion.section>

      {/* Footer - All Company Details */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

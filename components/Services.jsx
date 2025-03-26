'use client';
import { motion } from 'framer-motion';

const services = [
  { name: 'Business Consultancy', description: 'Helping you register, license, and grow your business.' },
  { name: 'Marketing & Branding', description: 'Social media, SEO, and content creation for visibility.' },
  { name: 'IT & Web Development', description: 'Building websites, apps, and cloud solutions.' },
  { name: 'Logistics & Delivery', description: 'Fast shipping, warehousing, and courier services.' }
];

const Services = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-500 mt-2">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

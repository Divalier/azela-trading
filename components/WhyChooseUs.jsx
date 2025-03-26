import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaClock, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { icon: <FaCheckCircle />, title: 'Guaranteed Quality', desc: 'Only top-rated products & trusted vendors.' },
    { icon: <FaShieldAlt />, title: 'Secure Payments', desc: 'We ensure 100% secure transactions.' },
    { icon: <FaClock />, title: 'Fast & Reliable', desc: 'On-time delivery, every time.' },
    { icon: <FaUsers />, title: 'Trusted by Thousands', desc: 'A growing community of happy customers.' },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <motion.h2 className="text-3xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Why Choose Us?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {features.map((feature, index) => (
          <motion.div key={index} className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}>
            <div className="text-4xl text-[#FF6B00] mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

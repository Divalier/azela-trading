'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

// Sample Collaborating Companies
const companies = [
  { id: 1, name: 'Amazon', logo: '/images/amazon.png' },
  { id: 2, name: 'Google', logo: '/images/google.png' },
  { id: 3, name: 'Tesla', logo: '/images/tesla.png' },
  { id: 4, name: 'Microsoft', logo: '/images/microsoft.png' },
  { id: 5, name: 'Shopify', logo: '/images/shopify.png' }
];

// Sample Testimonials
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: '/images/customer1.jpg',
    review: 'Azela Trading transformed my business with its seamless services!',
    rating: 5
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '/images/customer2.jpg',
    review: 'Their logistics and delivery system is top-notch!',
    rating: 4.5
  },
  {
    id: 3,
    name: 'David Johnson',
    image: '/images/customer3.jpg',
    review: 'Fantastic customer support and great selection of products.',
    rating: 5
  },
  {
    id: 4,
    name: 'Emily Brown',
    image: '/images/customer4.jpg',
    review: 'I love the quality of products from Azela Trading!',
    rating: 4.8
  },
  {
    id: 5,
    name: 'Michael Lee',
    image: '/images/customer5.jpg',
    review: 'Highly recommend! Great prices and fast shipping.',
    rating: 4.9
  }
];

// Sample Market Influence Data
const marketStats = [
  { id: 1, label: 'Total Customers', value: '500K+' },
  { id: 2, label: 'Active Partnerships', value: '200+' },
  { id: 3, label: 'Successful Deliveries', value: '1M+' },
  { id: 4, label: 'Countries Served', value: '30+' }
];

const MarketImpactSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2 
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Market Influence & Customer Trust
        </motion.h2>

        {/* Collaborating Companies */}
        <div className="grid grid-cols-3 lg:flex justify-center gap-6 mt-6">
          {companies.map((company) => (
            <motion.div key={company.id} className="bg-white shadow-md p-4 rounded-lg flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={company.logo} alt={company.name} width={100} height={50} />
            </motion.div>
          ))}
        </div>

        {/* Market Influence Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {marketStats.map((stat) => (
            <motion.div key={stat.id} className="bg-orange-500 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Customer Testimonials - Now in a Grid Layout */}
        <div className="mt-12">
          <motion.h3 className="text-2xl font-semibold text-gray-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            ⭐ Customer Testimonials
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={80} height={80} 
                  className="rounded-full mx-auto"
                />
                <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
                <div className="flex justify-center mt-2 text-yellow-500">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-600 mt-4">{testimonial.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketImpactSection;

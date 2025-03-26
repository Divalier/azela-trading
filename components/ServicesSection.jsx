'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Service data with sub-services
const services = [
  {
    id: 1,
    title: "Business Consultancy",
    image: "/images/consulting.jpg",
    subServices: [
      { name: "Business Registration", description: "Register your business legally.", image: "/images/business-reg.jpg" },
      { name: "Market Research", description: "Analyze market trends for success.", image: "/images/market-research.jpg" },
      { name: "Financial Planning", description: "Plan finances efficiently.", image: "/images/finance.jpg" }
    ]
  },
  {
    id: 2,
    title: "Marketing & Branding",
    image: "/images/marketing.jpg",
    subServices: [
      { name: "Social Media Marketing", description: "Boost your online presence.", image: "/images/social-media.jpg" },
      { name: "SEO Services", description: "Rank higher on search engines.", image: "/images/seo.jpg" },
      { name: "Content Creation", description: "Engaging content for your brand.", image: "/images/content.jpg" }
    ]
  },
  {
    id: 3,
    title: "IT & Web Development",
    image: "/images/it.jpg",
    subServices: [
      { name: "Website Development", description: "Modern websites & apps.", image: "/images/web-dev.jpg" },
      { name: "Cybersecurity", description: "Protect your data & privacy.", image: "/images/cybersecurity.jpg" },
      { name: "Cloud Computing", description: "Scalable cloud solutions.", image: "/images/cloud.jpg" }
    ]
  },
  {
    id: 4,
    title: "Logistics & Delivery",
    image: "/images/logistics.jpg",
    subServices: [
      { name: "Transportation", description: "Fast & reliable delivery.", image: "/images/transport.jpg" },
      { name: "Warehouse Storage", description: "Secure & affordable storage.", image: "/images/warehouse.jpg" },
      { name: "Inventory Management", description: "Track & manage stock.", image: "/images/inventory.jpg" }
    ]
  }
];

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default expanded service
  const [activeSubIndex, setActiveSubIndex] = useState(0); // Active sub-service slide
  const [autoSlide, setAutoSlide] = useState(true); // Auto-slide state

  // Auto-slide effect
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setActiveSubIndex((prev) =>
          prev === services[expandedIndex].subServices.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoSlide, expandedIndex]);

  return (
    <section className="py-4 w-full h-[80%] md:h-auto bg-gray-700">
      <div className="container grid grid-cols-1 md:grid-cols-2  h-[100%] px-2 md:px-6  gap-6">
        {/* Left Side: 2x2 Grid (Service Cards) */}
        <div className="absolute md:relative z-10 md:z-0 grid grid-cols-2 md:grid-cols-2 gap-1 md:gap-4 md:6 p-4 md:p-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative container h-7 md:h-auto bg-white rounded-lg shadow-md p-1 md:p-4 cursor-pointer transition-all duration-500 ${
                expandedIndex === index ? 'scale-105 shadow-xl' : 'hover:scale-105'
              }`}
              onClick={() => setExpandedIndex(index)}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={service.image} alt={service.title} width={300} height={200} className="rounded-lg hidden  md:flex" />
              <h3 className="text-sm md:text-lg font-semibold mt-0 md:mt-2">{service.title}</h3>

              {/* View More Button */}
              {expandedIndex !== index && (
                <button className="mt-2 text-blue-500 underline"> <span className='hidden md:flex'>View More</span></button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Side: Expanded View (Sub-Service Slideshow) */}
        <motion.div
          className=" flex flex-col justify-between w-full bg-white h-[95vh] md:h-auto rounded-lg shadow-md relative  "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Sub-Service Image */}
          <Image
            src={services[expandedIndex].subServices[activeSubIndex].image}
            alt="Expanded"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <div>
          {/* Sub-Service Details */}
          <h3 className="text-xl font-bold mt-4">{services[expandedIndex].subServices[activeSubIndex].name}</h3>
          <p className="text-gray-600 mt-2">{services[expandedIndex].subServices[activeSubIndex].description}</p>

          {/* Controls */}
          <div className="m-4 flex justify-between">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={() => setAutoSlide(!autoSlide)}
            >
              {autoSlide ? 'Pause' : 'Resume'}
            </button>

            <div className="flex gap-4">
              <button
                className="bg-gray-600 text-white px-2 py-2 md:rounded-md rounded-full"
                onClick={() =>
                  setActiveSubIndex((prev) =>
                    prev === 0 ? services[expandedIndex].subServices.length - 1 : prev - 1
                  )
                }
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="bg-gray-600 text-white px-2 py-2 md:rounded-md rounded-full"
                onClick={() =>
                  setActiveSubIndex((prev) =>
                    prev === services[expandedIndex].subServices.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button className="bg-green-600 text-white px-4 py-2 rounded-md" onClick={() => setExpandedIndex(null)}>
              visit
            </button>
          </div> </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

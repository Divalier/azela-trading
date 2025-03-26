'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample Food Data (Replace with API data later)
const foodItems = [
  { id: 1, name: 'Juicy Cheeseburger 🍔', image: '/products/burger.jpg', desc: 'Grilled to perfection with melted cheddar, fresh lettuce, and secret sauce.', category: 'Fast Food' },
  { id: 2, name: 'Wood-Fired Pizza 🍕', image: '/products/henesy.jpg', desc: 'Crispy crust, fresh mozzarella, basil, and a touch of olive oil.', category: 'Fast Food' },
  { id: 3, name: 'Chocolate Lava Cake 🍫', image: '/products/henesy.jpg', desc: 'Rich chocolate with a warm, gooey center that melts in your mouth.', category: 'Dessert' },
  { id: 4, name: 'Refreshing Mojito 🍹', image: '/products/coke.jpg', desc: 'Minty, citrusy, and perfectly chilled to refresh your senses.', category: 'Drinks' },
];

const categories = ['All', 'Fast Food', 'Dessert', 'Drinks'];

const KitchenSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    }, 5000); // Slower Auto-Sliding (5 seconds per item)
    return () => clearInterval(interval);
  }, []);

  // Filtered Food Items
  const displayedItems = selectedCategory === 'All'
    ? foodItems
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 bg-[#fff5e5] text-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute w-[300px] h-[300px] bg-orange-300 opacity-30 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[250px] h-[250px]  bg-yellow-300 opacity-30 rounded-full bottom-20 right-10 animate-pulse"></div>

      {/* Section Title */}
      <motion.h2 className=" text-4xl font-extrabold text-gray-900 px-6 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        🍽️ **Experience the Taste of Azela Kitchen**
      </motion.h2>
      <p className=" text-gray-600 mb-8 text-lg">**Delightful meals crafted to perfection. Taste the magic today!**</p>

      {/* Category Filters */}
      <div className="grid grid-cols-2 md:flex gap-3 justify-center px-6 md:p-0 space-x-4 mb-6">
        {categories.map((category, index) => (
          <motion.button key={index}
            className={`md:px-4 md:py-2 z-10 rounded-full transition text-lg font-semibold ${selectedCategory === category ? 'bg-[#FF6B00] text-white shadow-lg' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedCategory(category)}>
            {category}
          </motion.button>
        ))}
      </div>

      {/* Food Carousel */}
      <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto">
        {/* Left Button */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:scale-110 transition"
          onClick={() => setActiveIndex((prev) => (prev === 0 ? foodItems.length - 1 : prev - 1))}>
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Food Items */}
        <motion.div className="relative container flex items-center justify-center h-[520px] md:h-[450px]  w-100 md:1/2 overflow-hidden">
          {displayedItems.map((item, index) => (
            <motion.div key={item.id}
              className={`absolute flex justify-center flex-col rounded-xl shadow-xl p-6 bg-white transition-all duration-700 cursor-pointer hover:scale-105 hover:shadow-2xl ${index === activeIndex ? 'scale-110 z-10' : 'scale-75 opacity-50'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Image with Hover Effect */}
              <div className="relative flex self-center w-[250px] h-[250px] overflow-hidden rounded-lg">
                <Image src={item.image} alt={item.name} width={250} height={250} className="rounded-lg transform transition-all duration-500 hover:scale-110" />
                <motion.div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-40 transition-all duration-500"></motion.div>
              </div>

              {/* Food Info */}
              <p className="text-2xl font-bold text-wrap mt-4 text-gray-900">{item.name}</p>
              <p className="text-gray-600 text-lg">{item.desc}</p>

              {/* CTA Button */}
              <button className="mt-4 px-6 py-2 bg-[#FF6B00] text-white rounded-md hover:bg-[#D65A00] transition text-lg font-semibold">
                Savor the Flavor 🍽️
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Button */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:scale-110 transition"
          onClick={() => setActiveIndex((prev) => (prev + 1) % foodItems.length)}>
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default KitchenSection;

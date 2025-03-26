"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Product Data
const products = [
  { id: 1, image: "/products/coke.jpg", title: "Product 1", desc: "Best quality", price: "$49.99", rating: 4.5 },
  { id: 2, image: "/products/henesy.jpg", title: "Product 2", desc: "Limited edition", price: "$59.99", rating: 5 },
  { id: 3, image: "/products/headphones.jpg", title: "Product 3", desc: "New arrival", price: "$39.99", rating: 4 },
  { id: 4, image: "/products/laptop.jpg", title: "Product 4", desc: "Top rated", price: "$69.99", rating: 5 },
  { id: 5, image: "/products/nike.jpg", title: "Product 5", desc: "Customer favorite", price: "$79.99", rating: 4.8 },
  { id: 6, image: "/products/perfume.jpg", title: "Product 6", desc: "Trending now", price: "$89.99", rating: 4.2 },
  { id: 7, image: "/products/Smartphone.jpg", title: "Product 7", desc: "On sale", price: "$29.99", rating: 4.7 },
  { id: 8, image: "/products/speaker.jpg", title: "Product 8", desc: "Must-have item", price: "$99.99", rating: 5 },
  { id: 9, image: "/products/watch.jpg", title: "Product 9", desc: "Bestseller", price: "$44.99", rating: 4.6 },
];

const autoSlideInterval = 5000; // Auto-slide interval (5 seconds)

const HighRatedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const [showp, setShowp] = useState(5); // Default to 5 visible cards

  useEffect(() => {
    const updateShowp = () => {
      if (window.innerWidth < 768) {
        setShowp(1);
      } else if (window.innerWidth < 1200) {
        setShowp(5);
      } else {
        setShowp(7);
      }
    };

    // Set initial value
    updateShowp();

    // Listen for window resize
    window.addEventListener("resize", updateShowp);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateShowp);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getVisibleCards = () => {
    let visible = [];
    for (let i = -Math.floor(showp / 2); i <= Math.floor(showp / 2); i++) {
      const newIndex = (activeIndex + i + products.length) % products.length;
      visible.push(newIndex);
    }
    return visible;
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-[550px] w-full overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 p-8">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-white mb-6"
      >
        ⭐ High-Rated Products ⭐
      </motion.h2>

      <div className="relative flex items-center w-full justify-center">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="absolute z-10 left-4 bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 border-2 border-yellow-600"
        >
          ◀
        </motion.button>

        {/* Product Cards */}
        <motion.div className="flex items-center gap-10 overflow-hidden">
          {getVisibleCards().map((index) => {
            const isActive = index === activeIndex;
            const width = isActive ? "w-62" : "w-43";
            const height = isActive ? "h-76" : "h-59";
            const brightness = isActive ? "brightness-125 scale-110" : "brightness-75";
            const zIndex = isActive ? 10 : 5;

            return (
              <motion.div
                key={products[index].id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                onClick={() => handleCardClick(index)}
                className={`relative ${width} ${height} bg-gray-400 rounded-lg shadow-lg flex flex-col items-center justify-center text-white overflow-hidden cursor-pointer ${brightness}`}
              >
                <Image
                  src={products[index].image}
                  alt={products[index].title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0"
                />

                {/* Text Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative float-end z-10 bg-black/60 p-4 rounded-lg text-center w-full"
                >
                  <h3 className="text-lg font-semibold">{products[index].title}</h3>
                  <p className="text-sm">{products[index].desc}</p>

                  {/* Price & Rating */}
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-lg font-bold">{products[index].price}</span>
                    <span className="text-yellow-400 text-lg">
                      {"★".repeat(Math.round(products[index].rating))}
                    </span>
                  </div>

                  {/* Buy Now Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition-transform duration-300"
                  >
                    Buy Now
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="absolute right-4 bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 border-2 border-yellow-600"
        >
          ▶
        </motion.button>
      </div>
    </div>
  );
};

export default HighRatedProducts;

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slideshow Data
const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Welcome to Azela Trading",
    text: "Your one-stop marketplace for everything.",
    ctaText: "Explore Now",
    ctaLink: "/shop",
  },
  {
    image: "/images/slide2.jpg",
    title: "Unbeatable Deals on Electronics",
    text: "Find the latest tech gadgets at the best prices.",
    ctaText: "Shop Electronics",
    ctaLink: "/category/electronics",
  },
  {
    image: "/images/slide3.jpg",
    title: "Expand Your Business with Azela",
    text: "Join us to grow your business and reach more customers.",
    ctaText: "Join as a Vendor",
    ctaLink: "/vendor-signup",
  },
];

// Floating Shapes with Images
const floatingShapes = [
  {
    src: "/products/headphones.jpg",
    size: "w-20 h-20",
    top: "top-10",
    left: "left-5",
    zIndex: "z-10",
  },
  {
    src: "/products/laptop.jpg",
    size: "w-32 h-32",
    top: "top-1/3",
    right: "right-10",
    zIndex: "z-20",
  },
  {
    src: "/products/Smartphone.jpg",
    size: "w-16 h-16",
    bottom: "bottom-10",
    left: "left-1/4",
    zIndex: "z-5",
  },
  {
    src: "/products/speaker.jpg",
    size: "w-14 h-14",
    top: "top-1/2",
    right: "right-20",
    zIndex: "z-30",
  },
];

// Mission & Vision Data
const infoSections = [
  {
    title: "🌟 Our Mission",
    content:
      "At Azela Trading, we aim to connect buyers and businesses while delivering top-quality products and services.",
  },
  {
    title: "🚀 Our Vision",
    content:
      "To become the most trusted and innovative marketplace, empowering businesses and customers worldwide.",
  },
  {
    title: "💡 Our Values",
    content:
      "We prioritize integrity, customer satisfaction, and continuous growth in everything we do.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentInfo, setCurrentInfo] = useState(0);

  // Auto-change slideshow every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Auto-change Mission/Vision/Values every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfo((prev) => (prev + 1) % infoSections.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Manual Navigation
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevInfo = () =>
    setCurrentInfo((prev) => (prev === 0 ? infoSections.length - 1 : prev - 1));
  const nextInfo = () =>
    setCurrentInfo((prev) => (prev + 1) % infoSections.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <Image
                    src={slide.image}
                    alt="Slideshow"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-700 ease-in-out"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Floating Animated Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(5)
          .fill()
          .map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500 opacity-20 w-16 h-16 md:w-24 md:-24 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
              }}
            />
          ))}
      </div>

      {/* Overlay & Content */}
      <div className="absolute inset-0  w-full flex flex-col justify-center items-center text-white text-center px-6">
        <motion.h1
          key={slides[currentSlide].title}
          className="text-2xl -mt-15 w-full md:text-4xl md:-mt-5 lg:text-7xl lg:-mt-0 font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p
          key={slides[currentSlide].text}
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {slides[currentSlide].text}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href={slides[currentSlide].ctaLink}
          className="mt-6 bg-orange-500  px-6 py-3 text-white font-bold rounded-md hover:bg-orange-600 transition text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {slides[currentSlide].ctaText}
        </motion.a>

        {/* Navigation Buttons */}
        <div className="absolute flex justify-between w-full px-2 lg:p-8 opacity-80 lg:opacity-100">
          <button
            onClick={prevSlide}
            className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mission/Vision/Values Section */}
      <motion.div
        className="absolute bottom-1 md:bottom-5 lg:bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 p-4 rounded-lg shadow-md w-[95%]  box-border lg:w-1/2 text-black text-center"
        key={infoSections[currentInfo].title}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-lg font-bold">{infoSections[currentInfo].title}</h2>
        <p className="text-sm mt-1">{infoSections[currentInfo].content}</p>
        <div className="mt-2 flex justify-between space-x-4">
          <button
            onClick={prevInfo}
            className="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
            ← Previous
          </button>
          <button
            onClick={nextInfo}
            className="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Next →
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

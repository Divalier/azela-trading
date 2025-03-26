"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  ChevronDown,
  Store,
  Filter,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Categories from "./navbar/categories.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const dropdownRef = useRef(null);

  // ✅ Handle navbar visibility on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Get screen width (Prevents window error in SSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    }
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) => setDropdown(dropdown === menu ? null : menu);
  const closeMessage = () => setShowMessage(false);

  return (
    <nav className="absolute w-full">
      {/* ✅ Section 1: System Update */}
      {showMessage && (
        <div className="hidden bg-red-500 text-center text-sm py-2 justify-between px-4 items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 lg:flex md:flex">
          <p className="flex-grow text-white">
            🚀 System Update: Our new collection is live!{" "}
            <Link href="/new-arrivals" className="underline">
              Check it out
            </Link>
          </p>
          <button onClick={closeMessage} className="text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      <div className={`${showMessage ? "mt-8" : "mt-0"}`}></div>

      {/* ✅ Section 2: Fixed Navbar */}
      <div
        className="fixed left-0 w-full bg-gray-800 text-white shadow-md z-40 transition-all duration-300"
        style={{
          top: showMessage ? (screenWidth >= 768 ? "32px" : "0px") : "0px",
        }}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* ✅ Logo */}
          <Link href="/" className="text-xl font-bold flex items-center whitespace-nowrap">
            <Image src="/azela-sem.png" alt="Azela Trading Logo" width={32} height={32} className="mr-2" priority />
            <span className="hidden lg:block hover:text-[#D65A00]">Azela Trading</span>
          </Link>

          {/* ✅ Search Bar */}
          <div className="flex items-center bg-white text-black m-1 md-m0 p-1 md:p-2 rounded-md w-auto">
            <input type="text" placeholder="Search for products..." className="flex-grow outline-none" />
            <button className="bg-gray-300 px-2 py-1 rounded-md flex items-center">
              <Filter className="w-4 h-4 mr-1" />
              <span className="hidden lg:flex">All Categories</span>
            </button>
          </div>

          {/* ✅ Contact & Socials */}
          <div className="hidden md:flex flex-col items-center">
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md mb-1">Contact Us</button>
            <p className={`text-xs text-gray-400 md:hidden lg:flex ${showNavbar ? " duration-700" : "hidden duration-700"}`}>
              Available: Mon-Fri, 9 AM - 6 PM
            </p>
            <div className={`flex space-x-2 mt-1 md:hidden lg:flex ${showNavbar ? " duration-700" : "hidden duration-700"}`}>
              <Link href="https://facebook.com"><FaFacebookF className="w-5 h-5" /></Link>
              <Link href="https://instagram.com"><FaInstagram className="w-5 h-5" /></Link>
              <Link href="https://twitter.com"><FaTwitter className="w-5 h-5" /></Link>
              <Link href="https://linkedin.com"><FaLinkedinIn className="w-5 h-5" /></Link>
              <Link href="https://tiktok.com"><FaTiktok className="w-5 h-5" /></Link>
              <Link href="https://whatsapp.com"><FaWhatsapp className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* ✅ Explore Us Dropdown */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative dropdown-container">
              <button onClick={() => toggleDropdown("explore")} className="hover:text-gray-400 flex items-center">
                Explore Us <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdown === "explore" && (
                <div className="absolute bg-white text-black shadow-md mt-2 rounded-md w-40 p-2">
                  <Link href="/about-us" className="block p-2 hover:bg-gray-200">About Us</Link>
                  <Link href="/careers" className="block p-2 hover:bg-gray-200">Careers</Link>
                  <Link href="/testimonials" className="block p-2 hover:bg-gray-200">Testimonials</Link>
                  <Link href="/contact" className="block p-2 hover:bg-gray-200">Contact Us</Link>
                  <Link href="/faqs" className="block p-2 hover:bg-gray-200">FAQs</Link>
                </div>
              )}
            </div>
            <Link href="/cart" className="hover:text-gray-400"><ShoppingCart className="w-6 h-6" /></Link>
            <button onClick={() => toggleDropdown("user")} className="hover:text-gray-400 flex items-center"><User className="w-6 h-6" /></button>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ✅ Section 3: Categories Navigation */}
      <div className={`${showNavbar ? "duration-700" : "hidden duration-700"} hidden w-full bg-gray-900 p-2 text-center text-sm fixed z-10 transition-all duration-300 lg:block md:block`}>
        <Categories />
      </div>
    </nav>
  );
};

export default Navbar;

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok, FaWhatsapp, FaCcVisa, FaCcMastercard, FaCcPaypal, FaLock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* 1️⃣ Company Info */}
        <div>
          <h3 className="text-xl font-semibold">About Azela Trading</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Azela Trading is committed to providing high-quality products and services. Our mission is to connect businesses and individuals with reliable solutions.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><Link href="/about" className="hover:underline">Our Story</Link></li>
            <li><Link href="/mission" className="hover:underline">Mission & Vision</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><Link href="/services" className="hover:underline">Our Services</Link></li>
            <li><Link href="/categories" className="hover:underline">Shop by Category</Link></li>
            <li><Link href="/business-solutions" className="hover:underline">Business Solutions</Link></li>
            <li><Link href="/investment" className="hover:underline">Investment & Opportunities</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Customer Support */}
        <div>
          <h3 className="text-xl font-semibold">Customer Support</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><Link href="/help" className="hover:underline">Help Center</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/returns" className="hover:underline">Returns & Refunds</Link></li>
            <li><Link href="/shipping" className="hover:underline">Shipping Information</Link></li>
          </ul>
        </div>

        {/* 4️⃣ Payment & Security */}
        <div>
          <h3 className="text-xl font-semibold">Payment & Security</h3>
          <p className="text-gray-400 text-sm mt-2">We accept multiple payment options and ensure secure transactions.</p>
          <div className="flex gap-3 mt-3">
            <FaCcVisa className="w-8 h-8 text-gray-300" />
            <FaCcMastercard className="w-8 h-8 text-gray-300" />
            <FaCcPaypal className="w-8 h-8 text-gray-300" />
            <FaLock className="w-8 h-8 text-gray-300" />
          </div>
        </div>
      </div>

      {/* 🌍 Social Media & Newsletter */}
      <div className="mt-12 border-t border-gray-700 pt-6 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Social Links */}
        <div className="flex gap-4">
          <Link href="https://facebook.com" className="hover:text-gray-400"><FaFacebookF className="w-5 h-5" /></Link>
          <Link href="https://instagram.com" className="hover:text-gray-400"><FaInstagram className="w-5 h-5" /></Link>
          <Link href="https://twitter.com" className="hover:text-gray-400"><FaTwitter className="w-5 h-5" /></Link>
          <Link href="https://linkedin.com" className="hover:text-gray-400"><FaLinkedinIn className="w-5 h-5" /></Link>
          <Link href="https://tiktok.com" className="hover:text-gray-400"><FaTiktok className="w-5 h-5" /></Link>
          <Link href="https://whatsapp.com" className="hover:text-gray-400"><FaWhatsapp className="w-5 h-5" /></Link>
        </div>

        {/* Newsletter Subscription */}
        <form className="mt-4 md:mt-0 flex">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 border-2 border-amber-600 rounded-l-md text-black focus:outline-none" />
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
            Subscribe
          </button>
        </form>
      </div>

      {/* 📌 Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Azela Trading. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

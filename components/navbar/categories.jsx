'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SectionThree = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Stores last scroll position

  // Handle Menu Toggles
  const toggleMenu = () => setIsOpen(!isOpen);
  const togglemove = (menu) => setmove(dropdown === menu ? null : menu);

  // Detect Scroll Direction (Show on Scroll Up, Hide on Scroll Down)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  // Function to toggle main dropdown
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenSubDropdown(null); // Reset sub-dropdown when changing main category
  };

  // Function to toggle sub-dropdown
  const toggleSubDropdown = (submenu) => {
    setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-menu')) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`${showNavbar ? ' duration-700' : 'hidden duration-700'}`}>
      <div className="container mx-auto flex justify-between items-center text-white">

        {/* 🏬 Shop by Category (Two-Level Dropdown) */}
        <div className="relative dropdown-menu">
          <button onClick={() => toggleDropdown('shop')} className="flex items-center px-4 py-2 hover:bg-gray-800 rounded">
            🏬 Shop by Category <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          {openDropdown === 'shop' && (
            <div className="absolute bg-white text-black shadow-lg mt-2 w-64 p-3 rounded-md">
              {/* Electronics */}
              <div className="relative">
                <button onMouseEnter={() => toggleSubDropdown('electronics')} className="flex justify-between w-full p-2 hover:bg-gray-200">
                  📱 Electronics & Gadgets <ChevronRight className="w-4 h-4" />
                </button>
                {openSubDropdown === 'electronics' && (
                  <div className="absolute left-full top-0 bg-white shadow-md w-64 p-2 rounded-md">
                    <Link href="#" className="block p-2 hover:bg-gray-200">📱 Smartphones</Link>
                    <Link href="#" className="block p-2 hover:bg-gray-200">💻 Laptops</Link>
                    <Link href="#" className="block p-2 hover:bg-gray-200">📺 TVs & Audio</Link>
                  </div>
                )}
              </div>
              {/* Fashion */}
              <div className="relative">
                <button onMouseEnter={() => toggleSubDropdown('fashion')} className="flex justify-between w-full p-2 hover:bg-gray-200">
                  👗 Fashion & Accessories <ChevronRight className="w-4 h-4" />
                </button>
                {openSubDropdown === 'fashion' && (
                  <div className="absolute left-full top-0 bg-white shadow-md w-64 p-2 rounded-md">
                    <Link href="#" className="block p-2 hover:bg-gray-200">👕 Men’s Wear</Link>
                    <Link href="#" className="block p-2 hover:bg-gray-200">👗 Women’s Wear</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 📢 Services */}
        <div className="relative dropdown-menu">
          <button onClick={() => toggleDropdown('services')} className="flex items-center px-4 py-2 hover:bg-gray-800 rounded">
            📢 Services <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          {openDropdown === 'services' && (
            <div className="absolute bg-white text-black shadow-lg mt-2 w-64 p-3 rounded-md">
              <div className="relative">
                <button onMouseEnter={() => toggleSubDropdown('business')} className="flex justify-between w-full p-2 hover:bg-gray-200">
                  💼 Business Consultancy <ChevronRight className="w-4 h-4" />
                </button>
                {openSubDropdown === 'business' && (
                  <div className="absolute left-full top-0 bg-white shadow-md w-64 p-2 rounded-md">
                    <Link href="#" className="block p-2 hover:bg-gray-200">📄 Business Registration</Link>
                    <Link href="#" className="block p-2 hover:bg-gray-200">📊 Market Research</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 🚗 Land & Vehicles */}
        <div className="relative dropdown-menu">
          <button onClick={() => toggleDropdown('land')} className="flex items-center px-4 py-2 hover:bg-gray-800 rounded">
            🚗 Land & Vehicles <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          {openDropdown === 'land' && (
            <div className="absolute bg-white text-black shadow-lg mt-2 w-64 p-3 rounded-md">
              <div className="relative">
                <button onMouseEnter={() => toggleSubDropdown('cars')} className="flex justify-between w-full p-2 hover:bg-gray-200">
                  🚘 New & Used Cars <ChevronRight className="w-4 h-4" />
                </button>
                {openSubDropdown === 'cars' && (
                  <div className="absolute left-full top-0 bg-white shadow-md w-64 p-2 rounded-md">
                    <Link href="#" className="block p-2 hover:bg-gray-200">🚗 Sedans</Link>
                    <Link href="#" className="block p-2 hover:bg-gray-200">🚙 SUVs</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 🤝 Business Solutions */}
        <div className="relative dropdown-menu">
          <button onClick={() => toggleDropdown('businessSolutions')} className="flex items-center px-4 py-2 hover:bg-gray-800 rounded">
            🤝 Business Solutions <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          {openDropdown === 'businessSolutions' && (
            <div className="absolute bg-white text-black shadow-lg mt-2 w-64 p-3 rounded-md">
              <Link href="#" className="block p-2 hover:bg-gray-200">🏢 Company Partnerships</Link>
              <Link href="#" className="block p-2 hover:bg-gray-200">💰 Bulk Purchases</Link>
            </div>
          )}
        </div>

        {/* 💰 Investment & Opportunities */}
        <div className="relative dropdown-menu">
          <button onClick={() => toggleDropdown('investment')} className="flex items-center px-4 py-2 hover:bg-gray-800 rounded">
            💰 Investment & Opportunities <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          {openDropdown === 'investment' && (
            <div className="absolute bg-white text-black shadow-lg mt-2 w-64 p-3 rounded-md">
              <Link href="#" className="block p-2 hover:bg-gray-200">🏪 Franchise & Licensing</Link>
              <Link href="#" className="block p-2 hover:bg-gray-200">💳 Business Financing</Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SectionThree;

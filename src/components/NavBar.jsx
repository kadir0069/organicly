import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import MainLogo from '../assets/image 1.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="bg-[#067950] text-white px-6 py-4 sticky top-0 z-[100] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
        >
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center overflow-hidden">
            <img src={MainLogo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span>Organicly</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li
            onClick={() => scrollToSection('problem-section')}
            className="hover:text-gray-200 cursor-pointer transition"
          >
            আমাদের গল্প
          </li>
          <li
            onClick={() => scrollToSection('benefits-section')}
            className="hover:text-gray-200 cursor-pointer transition"
          >
            উপকারিতা
          </li>
          <li
            onClick={() => scrollToSection('review-section')}
            className="hover:text-gray-200 cursor-pointer transition"
          >
            রিভিউ
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/8801877016763"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#FFB84D] hover:bg-[#ffa726] text-black font-bold rounded-full transition-all duration-300 active:scale-95 shadow-lg whitespace-nowrap"
          >
            <FaWhatsapp size={20} />
            <span>যোগাযোগ</span>
          </a>
          <button
            onClick={() => scrollToSection('checkout-section')}
            className="bg-white text-[#067950] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 active:scale-95 shadow-md whitespace-nowrap border border-gray-100"
          >
            এখনই অর্ডার করুন
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#067950] border-t border-green-700 p-6 flex flex-col gap-6 items-center shadow-lg z-50">
          <ul className="flex flex-col items-center gap-4 text-lg">
            <li onClick={() => scrollToSection('problem-section')} className="cursor-pointer">আমাদের গল্প</li>
            <li onClick={() => scrollToSection('benefits-section')} className="cursor-pointer">উপকারিতা</li>
            <li onClick={() => scrollToSection('review-section')} className="cursor-pointer">রিভিউ</li>
          </ul>
          <div className="flex flex-col w-full gap-3">
            <a
              href="tel:+8801877016763"
              className="w-full"
              onClick={(e) => {
                console.log("Calling...");
              }}
            >
              <button
                type="button"
                className="bg-[#FFB84D] text-black w-full py-3 rounded-full font-bold flex justify-center items-center gap-2 active:scale-95 transition hover:bg-[#ffa726]"
              >
                <FaWhatsapp size={20} /> যোগাযোগ
              </button>
            </a>
            <button
              onClick={() => scrollToSection('checkout-section')}
              className="bg-white text-[#067950] w-full py-3 rounded-full font-bold"
            >
              এখনই অর্ডার করুন
            </button>
          </div>
        </div>
      )
      }
    </nav >
  );
};

export default Navbar;
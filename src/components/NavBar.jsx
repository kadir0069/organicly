import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // react-icons ইনস্টল থাকতে হবে
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import MainLogo from '../assets/image 1.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#067950] text-white px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl font-bold cursor-pointer">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <span className="text-sm">
                <img src={MainLogo} alt="##" />
            </span>
          </div>
          <span>Organicly</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li className="hover:text-gray-200 cursor-pointer transition">আমাদের গল্প</li>
          <li className="hover:text-gray-200 cursor-pointer transition">উপকারিতা</li>
          <li className="hover:text-gray-200 cursor-pointer transition">রিভিউ</li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#FFB84D] text-black px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-[#ffa726] transition">
            <FaWhatsapp size={18} /> যোগাযোগ
          </button>
          <button className="bg-white text-[#067950] px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition">
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
            <li onClick={() => setIsOpen(false)}>আমাদের গল্প</li>
            <li onClick={() => setIsOpen(false)}>উপকারিতা</li>
            <li onClick={() => setIsOpen(false)}>রিভিউ</li>
          </ul>
          <div className="flex flex-col w-full gap-3">
            <button className="bg-[#FFB84D] text-black w-full py-3 rounded-full font-bold flex justify-center items-center gap-2">
              <FaWhatsapp size={20} /> যোগাযোগ
            </button>
            <button className="bg-white text-[#067950] w-full py-3 rounded-full font-bold">
              এখনই অর্ডার করুন
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React from 'react';
import FooterImg from '../assets/image 1.svg';

const Footer = () => {
  return (
    <footer className="bg-[#067E51] text-white py-12 md:py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-center md:text-left">
        
        {/* Left Brand Name */}
        <div className="flex items-center justify-center md:justify-start gap-2">
            <img src={FooterImg} alt="Organicly Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-2xl font-bold tracking-tight">Organicly</span>
        </div>

        {/* Center Footer */}
        <div className="text-base md:text-xl font-medium opacity-90 order-3 md:order-2">
          ১০০% ক্যাশ অন ডেলিভারি গ্যারান্টি
        </div>

        {/* Right Footer */}
        <div className="flex items-center justify-center md:justify-end gap-4 text-sm md:text-base opacity-80 order-2 md:order-3">
          <a href="#" className="hover:text-[#FFB84D] transition-all underline-offset-4 hover:underline">
            রিটার্ন পলিসি
          </a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:text-[#FFB84D] transition-all underline-offset-4 hover:underline">
            কন্টাক্ট আস
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React from 'react'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-16'>
      {/* Top Divider */}
      <div className="h-0.5 bg-primary max-w-full mt-8"></div>
      
      {/* Title */}
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary text-center mt-4'>
        Let's Stay Connected
      </h1>   

      {/* Social Media Links */}
      <div className='flex gap-6 sm:gap-8 justify-center mt-6 sm:mt-8 text-primary mb-12'>
        <a href="https://www.linkedin.com/in/elisa-irasubiza-5a3808256/" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:text-white hover:bg-secondary text-primary'>
            <FaLinkedinIn className='text-xl sm:text-2xl' />
          </div>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:text-white hover:bg-secondary text-primary'>
            <FaInstagram className='text-xl sm:text-2xl' />
          </div>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:text-white hover:bg-secondary text-primary'>
            <FaXTwitter className='text-xl sm:text-2xl' />
          </div>
        </a>
      </div>

      {/* Bottom Divider */}
      <div className="h-0.5 bg-primary max-w-full mt-4 mb-6"></div>

      {/* Copyright Text */}
      <h1 className='text-center text-secondary text-sm sm:text-base lg:text-lg mb-2'>
        © 2024 Elisa Irasubiza. All Rights Reserved
      </h1>
    </div>
  );
};

export default Footer;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-white duration-200 relative z-10 top-2'>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 py-2'> {/* Reduced padding */}
        
        {/* Logo and Name Section */}
        <div className="flex items-center gap-2">
          <img src='../E12.png' className='w-[100px] h-[100px]' alt="Logo" /> {/* Reduced size */}
        </div>

        {/* Hamburger menu for mobile */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle Menu'>
            {isMenuOpen ? <FaTimes className='text-2xl text-primary' /> 
            : <FaBars className='text-3xl text-primary' />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`absolute md:static top-full left-0 right-0 bg-white md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col md:flex-row text-right gap-1 md:gap-4 py-2 md:py-0'> {/* Reduced gap and padding */}
            <li className='p-1 text-secondary hover:text-primary text-lg md:text-base'><a href='#home'>Home</a></li>
            <li className='p-1 text-secondary text-lg md:text-base hover:text-primary'><a href='#About'>About Me</a></li>
            <li className='p-1 text-secondary text-lg md:text-base hover:text-primary'><a href='#Skills'>Skills</a></li>
            <li className='p-1 text-secondary text-lg md:text-base hover:text-primary'><a href='#Services'>Services</a></li>
            <li className='p-1 text-secondary text-lg md:text-base hover:text-primary'><a href='#about'>Resume</a></li>
            <li className='p-1 text-secondary text-lg md:text-base hover:text-primary'><a href='#Contact'>Contact Me</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

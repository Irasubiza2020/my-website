import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-white duration-200 relative z-20 top-6'>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12 py-4'>
        
        {/* Logo and Name Section */}
        <div className="flex items-center gap-2">
          <img src='../images/logo1.png' className='w-[60px]' alt="Logo" />
          <h1 className='font-bold text-2xl sm:text-3xl text-secondary'>Irasubiza</h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle Menu'>
            {isMenuOpen ? <FaTimes className='text-3xl text-primary' /> 
            : <FaBars className='text-3xl text-primary' />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`absolute md:static top-full left-0 right-0 bg-white md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col md:flex-row text-right gap-4 py-4 md:py-0'>
            <li className='p-5 text-primary font-bold text-xl sm:text-2xl md:text-lg'><a href='#home'>Home</a></li>
            <li className='p-5  text-secondary font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#space'>About Me</a></li>
            <li className='p-5 text-secondary font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#about'>Skills</a></li>
            <li className='p-5 text-secondary font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#contact'>sevices</a></li>
            <li className='p-5 text-secondary font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#about'>Resume</a></li>
            <li className='p-5 text-secondary font-bold text-xl sm:text-2xl md:text-lg hover:text-primary'><a href='#contact'>Contact Me</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import heroImage from '../../assets/hero1.jpg';

const Hero = () => {
  return (
    <div
      className='relative min-h-[400px] sm:min-h-[650px] bg-cover bg-center flex justify-center items-center'
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-secondary opacity-80 flex flex-col items-center justify-center px-4 sm:px-10'>
        {/* Hero Heading */}
        <h1 className='text-center  mt-[70px] sm:mt-[150px] lg:mt-[200px] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight ml-16'>
          Elisa Irasubiza || UI/UX Designer & Front-End Developer
        </h1>

        {/* Hero Paragraph */}
        <p className='text-center text-white mt-4 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed px-6'>
          I specialize in creating intuitive user experiences and turning designs into clean, efficient code. With expertise in HTML, CSS, JavaScript, React, and Tailwind CSS, I bring creative ideas to life, ensuring they are functional, responsive, and accessible.
        </p>

        {/* Button */}
        <div className='flex items-center justify-center mt-6 sm:mt-8'>
          <button className='bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 text-sm sm:text-base lg:text-lg'>
            Explore My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

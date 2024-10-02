import React from 'react';

const AboutMe = () => {
  return (
    <div id='About' className='relative justify-center text-center mt-6 px-4'>
      <h1 className='text-secondary font-bold text-3xl sm:text-4xl lg:text-5xl'>About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 p-4">
        {/* Image */}
        <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-4 shadow-lg mx-auto">
          <img src="../images/elisa.png" className="w-full h-full object-cover" alt="Elisa" />
        </div>

        {/* Paragraph */}
        <div className="md:w-[50%] mt-8 md:mt-0 text-center md:text-left px-4">
          <p className="text-secondary text-[18px] leading-relaxed">
            I’m Elisa Irasubiza, a passionate UI/UX Designer & Front-End Developer based in Kigali, Rwanda.
            With a background in Business Information Technology, I have honed my skills in crafting
            intuitive, user-centered designs and translating them into functional, responsive websites.
            My love for design stems from the desire to create seamless digital experiences that are both
            visually appealing and easy to navigate. As a front-end developer, I’m skilled in turning creative
            concepts into clean, efficient code.
            <br />
            I specialize in UI/UX design, focusing on wireframing, prototyping, and user research, as well
            as front-end development, where I build responsive and interactive websites. My toolkit includes
            Figma for design, and I work with HTML, CSS, JavaScript, React, and Tailwind CSS for development.
            I also manage my projects using Git and GitHub, ensuring that my work is well-organized and collaborative.
          </p>
        </div>
      </div>

      {/* Buttons */}
      
      <div className='flex flex-col md:flex-row justify-center mt-8 space-x-0 md:space-x-6'>
      <a href='#'>
        <button className='font-semibold p-4 mt-6 mb-6 rounded-md bg-primary text-white hover:bg-secondary'>
          Download My Resume
        </button></a>
        <a href='#Contact'>
        <button  className='font-semibold p-4 mt-6 mb-6 rounded-md bg-secondary text-white hover:bg-primary'>
          Let’s Work Together 
        </button></a>
      </div>
    </div>
  );
};

export default AboutMe;

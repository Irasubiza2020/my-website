import React from 'react';
import { FaUniversity, FaReact, FaNodeJs, FaHtml5, FaFigma, FaCss3, FaGithub } from 'react-icons/fa';
import { IoMdSchool, IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss, SiPostman, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <div className='flex flex-col items-center mt-6 px-4 mb-6'>
      <h1 className='text-secondary font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-9'>Skills & Education</h1>
      
      {/* Skills and Education Cards */}
      <div className='flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16'>
        
        {/* Skills card */}
        <div className='w-full md:w-[500px] h-auto bg-tertiary shadow-xl p-6 flex flex-col justify-between'>
          <h1 className='text-center font-bold text-secondary text-2xl sm:text-3xl mb-6'>Skills</h1>
          
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center'>
            <FaReact size={50} className='text-primary'/>
            <SiTailwindcss size={50} className='text-primary'/>
            <FaNodeJs size={50} className='text-primary'/>
            <FaHtml5 size={50} className='text-primary'/>
            <FaFigma size={50} className='text-primary'/>
            <FaCss3 size={50} className='text-primary'/>
            <IoLogoJavascript size={50} className='text-primary'/>
            <SiPostman size={50} className='text-primary'/>
            <FaGithub size={50} className='text-primary'/>
            <SiMysql size={50} className='text-primary'/>
          </div>
        </div>

        {/* Education card */}
        <div className='w-full md:w-[500px] h-auto bg-tertiary shadow-xl p-6 flex flex-col'>
          <h1 className='text-center font-bold text-secondary text-2xl sm:text-3xl mb-6'>Education</h1>
          
          <div className='grid grid-cols-1 gap-8 mt-6'>
            <div className='flex items-center gap-4'>
              <IoMdSchool size={50} className='text-primary'/>
              <div>
                <h2 className='font-semibold text-secondary'>University of Rwanda</h2>
                <p className='text-secondary'>Business Information Technology</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <FaUniversity size={50} className='text-primary'/>
              <div>
                <h2 className='font-semibold text-secondary'>GS Remera Rukoma</h2>
                <p className='text-secondary'>Mathematics, Computer Science, and Economics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

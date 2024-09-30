import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className='bg-tertiary rounded-lg p-6 relative w-full max-w-[400px]'>
      <div className='flex flex-col items-center'>
        <img src={image} alt='Project Mockup' className='w-full h-auto rounded-md' />
        
        {/* Button on Image */}
        <div className='absolute bottom-[24px] w-[90%] py-4 px-2 rounded-[25px] gap-6 bg-secondary  hover:bg-primary flex justify-center items-center font-semibold text-white'>
          <div className='text-center '>
            <h1>{title}</h1>
            <h3>{description}</h3>
          </div>
          <MdArrowOutward size={38} className='text-white' />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react';
import { FaUniversity, FaReact, FaNodeJs, FaHtml5, FaFigma, FaCss3, FaGithub } from 'react-icons/fa';
import { IoMdSchool, IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss, SiPostman, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <div id="Skills" className="flex flex-col items-center px-4 py-10 bg-gray-100">
      <h1 className="text-secondary text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-12">
        Skills & Education
      </h1>
      
      {/* Skills and Education Cards */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 max-w-6xl">
        
        {/* Skills Card */}
        <div className="w-full md:w-[500px] bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-center text-secondary text-2xl sm:text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-center">
            <div className="flex flex-col items-center gap-2">
              <FaReact size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">React</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTailwindcss size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">Tailwind</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaNodeJs size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">Node.js</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaHtml5 size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">HTML5</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaFigma size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">Figma</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaCss3 size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">CSS3</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IoLogoJavascript size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">JavaScript</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiPostman size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">Postman</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaGithub size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">GitHub</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiMysql size={50} className="text-primary" />
              <p className="text-sm font-medium text-gray-700">MySQL</p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="w-full md:w-[500px] bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-center text-secondary text-2xl sm:text-3xl font-semibold mb-6">Education</h2>
          <div className="flex flex-col gap-8">
            {/* University */}
            <div className="flex items-center gap-4">
              <IoMdSchool size={50} className="text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-secondary">University of Rwanda</h3>
                <p className="text-gray-700">Bachelor's in Business Information Technology</p>
              </div>
            </div>
            {/* High School */}
            <div className="flex items-center gap-4">
              <FaUniversity size={50} className="text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-secondary">GS Remera Rukoma</h3>
                <p className="text-gray-700">Mathematics, Computer Science & Economics</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

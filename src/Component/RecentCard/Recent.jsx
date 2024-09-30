import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDataCard from '../RecentCard/ProjectDataCard'

const Recent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  
  const filteredProjects = selectedCategory === 'All' 
    ? ProjectDataCard 
    : ProjectDataCard.filter(project => project.category === selectedCategory);

  return (
    <div className='flex flex-col items-center '>
      {/* Title */}
      <h1 className="font-bold text-center text-3xl sm:text-4xl lg:text-5xl text-secondary mt-16 mb-6">
        Recent projects worked on
      </h1>

      {/* Buttons and Card Container */}
      <div className='flex flex-col gap-6 mb-6 items-center w-full'>
        {/* Buttons */}
        <div className='flex justify-center gap-6 flex-wrap'>
          <button 
            onClick={() => setSelectedCategory('All')}
            className={`font-semibold h-[48px] px-4 py-2 rounded-[25px] ${selectedCategory === 'All' ? 'bg-primary text-white' : 'bg-transparent border-2 border-secondary text-secondary hover:text-primary hover:border-primary'}`}
          >
            All
          </button>
          <button 
            onClick={() => setSelectedCategory('UI/UX Design')}
            className={`font-semibold h-[48px] px-4 py-2 rounded-[25px] ${selectedCategory === 'UI/UX Design' ? 'bg-primary text-white' : 'bg-transparent border-2 border-secondary text-secondary hover:text-primary hover:border-primary'}`}
          >
            UI/UX Design
          </button>
          <button 
            onClick={() => setSelectedCategory('Web Development')}
            className={`font-semibold h-[48px] px-4 py-2 rounded-[25px] ${selectedCategory === 'Web Development' ? 'bg-primary text-white' : 'bg-transparent border-2 border-secondary text-secondary hover:text-primary hover:border-primary'}`}
          >
            Web Development
          </button>
        </div>

        {/* Project Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;

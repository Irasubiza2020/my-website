import React from 'react';
import Slider from 'react-slick';
import mockup1 from '../../assets/images/mockup1.png';
import mockup2 from '../../assets/images/mockup2.png';
import mockup3 from  '../../assets/images/mockup3.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Function to return an array of card data
const CardData = () => [
  {
    id: 1,
    img: mockup1,
    title: 'UI/UX',
    disc: 'HR and attendance mobile app',
  },
  {
    id: 2,
    img: mockup2,
    title: 'UI/UX',
    disc: 'HR and attendance mobile app',
  },
  {
    id: 3,
    img: mockup3,
    title: 'UI/UX',
    disc: 'HR and attendance mobile app',
  },
 
];

const Project = () => {
  const cards = CardData(); // Call the function to get data

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Number of cards to show per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-center font-bold text-secondary text-3xl mb-14 mt-5 sm:mt-0 lg:text-5xl sm:text-4xl'>
        Recent Projects
      </h1>

      {/* Slider for recent projects */}
      <Slider {...settings} className='space-x-2'>
        {cards.map(({ id, img, title, disc }) => (
          <div key={id} className='p-4'>
            <div className='text-secondary shadow-md rounded-lg overflow-hidden relative group max-w-xs mx-auto'>
              <img
                src={img}
                alt={title}
                className='w-full h-[450px] object-cover rounded-t-lg'
              />

              {/* Overlay section */}
              <div className='absolute left-0 top-0 w-full h-full bg-secondary/60 opacity-0 group-hover:opacity-100 p-4 backdrop-blur-sm duration-500 flex flex-col items-center justify-center'>
                {/* Title */}
                <h2 className='text-white font-bold text-lg text-center mb-2'>
                  {title}
                </h2>

                {/* Description */}
                <p className='text-white text-sm text-center'>{disc}</p>

                {/* Explore Button */}
                <button className='mt-4 bg-white text-secondary py-1 px-3 rounded-lg text-sm hover:bg-gray-200 transition'>
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;

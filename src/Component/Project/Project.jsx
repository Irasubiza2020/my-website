import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import mockup1 from '../../assets/images/mockup1.png';
import mockup7 from '../../assets/images/mockup7.jpeg';
import mockup3 from '../../assets/images/mockup3.png';
import mockup6 from '../../assets/images/mockup6.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Function to return an array of card data
const CardData = () => [
  {
    id: 1,
    img: mockup1,
    title: 'UI/UX',
    disc: 'E-Commerce Mobile App',
  },
  {
    id: 2,
    img: mockup7,
    title: 'UI/UX',
    disc: 'Innovation Construction Website',
  },
  {
    id: 3,
    img: mockup3,
    title: 'UI/UX',
    disc: 'HR and Attendance Mobile App',
  },
  {
    id: 4,
    img: mockup6,
    title: 'UI/UX',
    disc: 'Travel App',
  },
];

const Project = () => {
  const cards = CardData();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Removed arrows for a cleaner look
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10 bg-gray-100">
      <h1 className="text-center text-secondary text-3xl lg:text-5xl sm:text-4xl font-bold mb-12">
        Recent Projects
      </h1>

      {/* Slider for recent projects */}
      <Slider {...settings} className="space-x-4">
        {cards.map(({ id, img, title, disc }) => (
          <div key={id} className="p-4">
            <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
              <img
                src={img}
                alt={title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-t-lg"
              />

              {/* Overlay Section */}
              <div className="absolute left-0 top-0 w-full h-full bg-secondary/60 opacity-0 group-hover:opacity-100 p-6 flex flex-col items-center justify-center backdrop-blur-sm transition duration-300">
                {/* Title */}
                <h2 className="text-white font-bold text-lg text-center mb-2">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-white text-sm text-center">{disc}</p>

                {/* Explore Button */}
                <Link to="/recent-projects">
                  <button className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-white hover:text-primary border border-primary transition duration-300">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;

import React from 'react';
import backgroundImage from '../assets/images/mountain.avif'; // from src

const TravelBanner = () => {
  return (
    <div
      className="relative w-full h-auto lg:h-[800px] bg-gradient-to-br from-blue-600 to-blue-900 text-black overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Flex container for layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full pt-10 lg:pt-0 lg:absolute lg:top-0">

        {/* Circle with video (increased size) */}
        <div className="w-[600px] h-[600px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border-[8px] sm:border-[10px] lg:border-[12px] border-gray-300 overflow-hidden mb-6 lg:mb-0 lg:absolute lg:left-52 lg:top-28">
          <video
            src="/Mountains.mp4"  // video path from public folder
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-[90%] sm:w-[80%] lg:w-[500px] text-center lg:text-left lg:absolute lg:top-24 lg:right-30 lg:ml-auto">
          <h2 className="text-2xl sm:text-3xl font-light">Get there!</h2>
          <h1 className="text-4xl sm:text-6xl font-bold text-orange-400">EXPLORE</h1>
          <h2 className="text-2xl sm:text-3xl font-light">THE WORLD</h2>

          <p className="mt-4 text-sm sm:text-lg text-black-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
            BOOK NOW ✈️
          </button>
        </div>
      </div>

      {/* Plane icons */}
      <div className="absolute top-8 right-1/2 transform translate-x-1/2 text-white text-2xl">✈️</div>
      <div className="absolute bottom-20 right-10 text-black text-2xl">✈️</div>
    </div>
  );
};

export default TravelBanner;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCode from "./videoCode";

// import TravelBanner from './TravelBanner';
import Plan from "./Plan";
import { MapPin } from "lucide-react";
import Testimonials from './Testimonials';
import React from 'react';
import SpecialTours from './SpecialTours';
import TourDetails from './TourDetails';



>>>>>>>>> Temporary merge branch 2

const HomePage = () => {
  const navigate = useNavigate();
  const destinations = [
    { id: 1, title: "Delhi Tours", subtitle: "Capital - City of Monuments", image: "https://www.kalitravel.net/blog/wp-content/uploads/delhi-itinerary-india-gate-sunset-new-delhi.webp" },
    { id: 2, title: "Golden Triangle", subtitle: "Delhi, Agra, Jaipur with 100+ options", image: "https://www.ghumindiaghum.com/images/Package/ag6pMT2YDG/amritsar.jpg" },
    { id: 3, title: "Rajasthan Tours", subtitle: "Visit, Royal Fort & Palaces", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMdzD01WH8nZhldG826EZaCzZcQQ7SSWLCQ&s" },
    { id: 4, title: "Kerala Packages", subtitle: "The God's own Country", image: "https://www.keralatourpackages.com/wp-content/uploads/2024/03/kumarakom.jpg" },
    { id: 5, title: "South India", subtitle: "The Historical Temples", image: "https://img.etimg.com/thumb/94556667/94556667.jpg?height=746&width=420&resizemode=76&imgsize=284526" },
    { id: 6, title: "Mumbai Tours", subtitle: "The Bollywood City", image: "https://cdn.tripspoint.com/uploads/photos/13758/full-day-mumbai-city-tour-with-bollywood-tour_qub3g.jpeg" },
    { id: 7, title: "Goa Packages", subtitle: "Best Beach Holidays", image: "https://www.setmytrip.in/wp-content/uploads/2024/09/licensed-image-2024-09-14T112445.452.jpeg" },
    { id: 8, title: "Himachal Packages", subtitle: "Snow-capped Himalayan peaks", image: "https://mtgtravels.com/wp-content/uploads/2023/05/A-Complete-Itinerary-for-a-7-Day-Tour-Package7-min.jpg" },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>

      <VideoCode/>

    <SpecialTours/>
    <TourDetails/>
      {/* <TravelBanner /> */}
      <VideoCode />
      <Plan />

      <div className="w-full min-h-screen bg-white px-4 py-8 sm:px-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-center mb-8 text-center px-2">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Explore India for Yourself</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative overflow-hidden rounded-lg shadow-md h-80 sm:h-96 cursor-pointer transition-transform duration-300 hover:shadow-xl group"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{ backgroundImage: `url(${destination.image})`, transform: hoveredCard === destination.id ? 'scale(1.05)' : 'scale(1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1">{destination.title}</h3>
                <div className="flex items-center text-sm sm:text-base">
                  <MapPin size={14} className="mr-1" />
                  <span>{destination.subtitle}</span>
                </div>
              </div>
              {hoveredCard === destination.id && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button className="bg-[#FF8C00] hover:bg-orange-700 text-white text-xs sm:text-sm px-4 py-2 rounded shadow-lg transition-all duration-300">
                    View Details
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/indiatours")}
            className="flex items-center bg-[#FF8C00] hover:bg-orange-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M12 3v18" />
            </svg>
            Browse all Destinations
          </button>
        </div>
      </div>

      <Testimonials />
    </>
  );
};

export default HomePage;



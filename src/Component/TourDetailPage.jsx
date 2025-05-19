import React from 'react';
import { useParams } from 'react-router-dom';
import tourData from './tourData'; // Move your tourData to a separate file and export it

const TourDetailPage = () => {
  const { place } = useParams();
  const filteredTours = tourData.filter(tour =>
    tour.title.toLowerCase().includes(place.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Tours in {place}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTours.map((tour, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <img src={tour.image} alt={tour.title} className="w-full h-60 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold">{tour.title}</h3>
            <p className="text-sm text-gray-600">{tour.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourDetailPage;

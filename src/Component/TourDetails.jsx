import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from './SpecialTours';

const renderStars = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const TourDetails = () => {
  const { id } = useParams();
  const tour = toursData.find(t => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Tour Not Found</h2>
        <Link to="/" className="text-blue-500 underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 underline">← Back to Tours</Link>
      <h2 className="text-3xl font-bold mt-4 mb-2">{tour.title}</h2>
      <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-yellow-500 text-lg mb-2">{renderStars(tour.rating)}</p>
      <p><strong>Route:</strong> {tour.locations}</p>
      <p><strong>Duration:</strong> {tour.duration}</p>
      <p className="mt-3">{tour.description}</p>
    </div>
  );
};

export default TourDetails;

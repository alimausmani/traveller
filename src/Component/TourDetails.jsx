import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from './SpecialTours';

const renderStars = (rating) => {
  return "★".repeat(rating || 4) + "☆".repeat(5 - (rating || 4)); // fallback if rating is missing
};

const TourDetails = () => {
  const { id } = useParams();
  const tour = toursData.find(t => t.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);

  if (!tour) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Tour Not Found</h2>
        <Link to="/" className="text-blue-500 underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Link to="/" className="text-blue-500 underline">← Back to Tours</Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Left - Tour Details */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{tour.title}</h2>
          <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover rounded mb-4 shadow-lg" />
          <p className="text-yellow-500 text-lg mb-2">{renderStars(tour.rating)}</p>
          <p><strong>Route:</strong> {tour.locations}</p>
          <p><strong>Duration:</strong> {tour.duration}</p>
          <p className="mt-3 text-gray-700">{tour.description}</p>

          <button
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setShowModal(true)}
          >
            Book Now
          </button>
        </div>

        {/* Right - Booking Form */}
        <div className="bg-white shadow-lg p-6 rounded border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">Book This Tour</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
            <input type="date" className="w-full border p-2 rounded" />
            <input type="number" placeholder="Number of People" className="w-full border p-2 rounded" />
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Submit</button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">Book Tour: {tour.title}</h3>
            <form className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
              <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
              <input type="date" className="w-full border p-2 rounded" />
              <input type="number" placeholder="Number of People" className="w-full border p-2 rounded" />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetails;


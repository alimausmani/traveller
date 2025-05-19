import React from 'react';
import { Link } from 'react-router-dom';

// const toursData = [
//     {
//       title: "North India Temples and Nepal Tour",
//       image: "/images/nepal.jpg",
//       locations: "NEW DELHI - JAIPUR - AGRA - KHAJURAHO - VARANASI - KATHMANDU - DELHI",
//       duration: "15 Days / 14 Nights",
//       description: "A spiritual journey through India and Nepal covering temples, ancient cities, and heritage spots."
//     },
//     {
//       title: "Golden Triangle Tour with Haridwar",
//       image: "/images/haridwar.jpg",
//       locations: "DELHI - AGRA - JAIPUR - HARIDWAR - RISHIKESH - DELHI",
//       duration: "8 Days / 7 Nights",
//       description: "Experience the divine vibes of Haridwar and Rishikesh with the historic Golden Triangle."
//     },
//     {
//       title: "Special Golden Triangle Tour",
//       image: "/images/taj.jpg",
//       locations: "DELHI - AGRA - FATEHPUR SIKRI - JAIPUR - DELHI",
//       duration: "5 Days / 4 Nights",
//       description: "Cover the three most visited cities in North India, rich with culture and architecture."
//     },
//     {
//       title: "Golden Triangle Tour with Pushkar",
//       image: "/images/pushkar.jpg",
//       locations: "DELHI - AGRA - FATEHPUR SIKRI - JAIPUR - PUSHKAR - JAIPUR - DELHI",
//       duration: "7 Days / 6 Nights",
//       description: "Visit the sacred town of Pushkar along with Delhi, Agra, and Jaipur."
//     },
//     {
//       title: "Golden Triangle Tour With Mumbai",
//       image: "/images/mumbai.jpg",
//       locations: "DELHI - AGRA - FATEHPUR SIKRI - JAIPUR - MUMBAI",
//       duration: "7 Days / 6 Nights",
//       description: "Explore the charm of Mumbai with the cultural trio of Delhi, Agra, and Jaipur."
//     },
//     {
//       title: "Goa Beach Tour Packages",
//       image: "/images/goa.jpg",
//       locations: "GOA",
//       duration: "5 Days / 4 Nights",
//       description: "Relax on the sunny beaches of Goa and enjoy its nightlife, food, and heritage."
//     },
//     {
//       title: "Splendour Of Orissa Tour",
//       image: "/images/orissa.jpg",
//       locations: "BHUBANESWAR - PURI - KONARK - BHUBANESWAR",
//       duration: "5 Days / 4 Nights",
//       description: "Discover the temples, beaches, and traditions of Odisha in this compact tour."
//     },
//     {
//       title: "The Jewel of Kashmir: A Paradise on Earth",
//       image: "/images/kashmir.jpg",
//       locations: "SRINAGAR - SONMARG - GULMARG - PAHALGAM - SRINAGAR",
//       duration: "6 Days / 5 Nights",
//       description: "Experience snow-clad peaks, valleys, and shikara rides in heaven on earth - Kashmir."
//     }
//   ];


const toursData = [
  {
    id: 1,
    title: "North India Temples and Nepal Tour",
    image: "/images/nepal.jpg",
    locations: "NEW DELHI - JAIPUR - AGRA - KHAJURAHO - VARANASI - KATHMANDU - DELHI",
    duration: "15 Days / 14 Nights",
    description: "A spiritual journey through India and Nepal covering temples, ancient cities, and heritage spots.",
    rating: 5
  },
  {
    id: 2,
    title: "Golden Triangle Tour with Haridwar",
    image: "/images/haridwar.jpg",
    locations: "DELHI - AGRA - JAIPUR - HARIDWAR - RISHIKESH - DELHI",
    duration: "8 Days / 7 Nights",
    description: "Experience the divine vibes of Haridwar and Rishikesh with the historic Golden Triangle.",
    rating: 4
  },
  {
    id: 3,
    title: "Special Golden Triangle Tour",
    image: "/images/taj.jpg",
    locations: "DELHI - AGRA - FATEHPUR SIKRI - JAIPUR - DELHI",
    duration: "5 Days / 4 Nights",
    description: "Cover the three most visited cities in North India, rich with culture and architecture.",
    rating: 4
  },
  {
    id: 4,
    title: "Golden Triangle Tour with Pushkar",
    image: "/images/pushkar.jpg",
    locations: "DELHI - AGRA - FATEHPUR SIKRI - JAIPUR - PUSHKAR - JAIPUR - DELHI",
    duration: "7 Days / 6 Nights",
    description: "Visit the sacred town of Pushkar along with Delhi, Agra, and Jaipur.",
    rating: 4
  },
  {
    id: 5,
    title: "Golden Triangle Tour With Mumbai",
    image: "/images/mumbai.jpg",
    locations: "DELHI - AGRA - FATEHPUR SIKRI - JAIPUR - MUMBAI",
    duration: "7 Days / 6 Nights",
    description: "Explore the charm of Mumbai with the cultural trio of Delhi, Agra, and Jaipur.",
    rating: 4
  },
  {
    id: 6,
    title: "Goa Beach Tour Packages",
    image: "/images/goa.jpg",
    locations: "GOA",
    duration: "5 Days / 4 Nights",
    description: "Relax on the sunny beaches of Goa and enjoy its nightlife, food, and heritage.",
    rating: 5
  },
  {
    id: 7,
    title: "Splendour Of Orissa Tour",
    image: "/images/orissa.jpg",
    locations: "BHUBANESWAR - PURI - KONARK - BHUBANESWAR",
    duration: "5 Days / 4 Nights",
    description: "Discover the temples, beaches, and traditions of Odisha in this compact tour.",
    rating: 3
  },
  {
    id: 8,
    title: "The Jewel of Kashmir: A Paradise on Earth",
    image: "/images/kashmir.jpg",
    locations: "SRINAGAR - SONMARG - GULMARG - PAHALGAM - SRINAGAR",
    duration: "6 Days / 5 Nights",
    description: "Experience snow-clad peaks, valleys, and shikara rides in heaven on earth - Kashmir.",
    rating: 5
  }
];


  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };
  
  const SpecialTours = () => {
    return (
      <div className="p-12">
        <h2 className="text-3xl font-bold text-center mb-6">🌟 Special Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {toursData.map((tour) => (
            <div key={tour.id} className="relative group shadow-lg rounded overflow-hidden">
              <img src={tour.image} alt={tour.title} className="w-full h-100 object-cover" />
              <div className="absolute bottom-0 bg-black/60 text-white p-3 w-full h-20">
                <h3 className="font-semibold text-lg">{tour.title}</h3>
                <p className="text-sm">{tour.locations}</p>
                <p className="text-xs mb-1">{tour.duration}</p>
                <p className="text-yellow-400 text-sm">{renderStars(tour.rating)}</p>
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Link
                  to={`/tour/${tour.id}`}

                  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SpecialTours;
  export { toursData };
  
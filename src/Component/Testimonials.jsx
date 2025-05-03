import React from "react";

const testimonials = [
    {
      id: 1,
      name: "Jessica Brown",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "This is due to their best service, pricing, and customer support. It's thoroughly refreshing to receive such a personal touch. Duis aute irure ipsum reprehenderit.",
    },
    {
      id: 2,
      name: "Shirley Smith",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "This is due to their best service, pricing, and customer support. It's thoroughly refreshing to receive such a personal touch. Duis aute irure ipsum reprehenderit.",
    },
    {
      id: 3,
      name: "Kevin Martin",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "This is due to their best service, pricing, and customer support. It's thoroughly refreshing to receive such a personal touch. Duis aute irure ipsum reprehenderit.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-12 bg-white text-center">
        <p className="text-2xl italic text-red-500 font-handwriting">Testimonials & Reviews</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">What They're Saying</h2>
  
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white px-6 py-8 rounded-lg shadow-sm border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-red-400 mb-4"
              />
              <div className="text-yellow-500 text-xl mb-3">★★★★★</div>
              <p className="text-gray-600 mb-4">{item.review}</p>
              <h3 className="font-bold text-gray-800">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  
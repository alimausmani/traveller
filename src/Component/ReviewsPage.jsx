import React, { useState } from "react";

const teamMembers = [
  {
    name: "Nasrina Khatun",
    role: "Senior Web developer",
    phone: "+000 123 000 77 88",
    email: "nasrina@navgurukul.org",
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Alima Usmani",
    role: "Full Stack developer",
    phone: "+000 123 000 77 88",
    email: "alimausmani@navgurukul.org",
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Aayusi Sharma",
    role: "Mern Stack developer",
    phone: "+000 123 000 77 88",
    email: "aayusisharma@navgurukul.org",
    image: "data:image/jpeg;base64,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",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    rating: "",
  });

  const [submittedMessages, setSubmittedMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, rating } = formData;
    if (name && email && message && rating) {
      setSubmittedMessages((prev) => [...prev, formData]);
      setFormData({ name: "", email: "", phone: "", message: "", rating: "" });
    } else {
      alert("Please fill all required fields!");
    }
  };

  return (
    <>
      <hr className="border-t-2 border-gray-200 mb-4" />

      <div className="min-h-screen p-10 bg-white flex flex-col md:flex-row justify-between">
        {/* Left Section - Contact Form */}
        <div className="w-full md:w-2/3">
          <h4 className="text-sm text-gray-500 font-semibold uppercase mb-2">Leave a Message</h4>
          <h2 className="text-2xl font-bold mb-6">We love to hear from you</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />

            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            >
              <option value="">Select Rating</option>
              <option value="1">1 - ⭐</option>
              <option value="2">2 - ⭐⭐</option>
              <option value="3">3 - ⭐⭐⭐</option>
              <option value="4">4 - ⭐⭐⭐⭐</option>
              <option value="5">5 - ⭐⭐⭐⭐⭐</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 bg-teal-800 text-white rounded hover:bg-teal-900 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Team Members + Submitted Messages */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0 md:pl-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm"><strong>Phone:</strong> {member.phone}</p>
                <p className="text-sm"><strong>Email:</strong> {member.email}</p>
              </div>
            </div>
          ))}

          {submittedMessages.length > 0 && (
            <div className="mt-10 border-t pt-6">
              <h3 className="text-lg font-bold mb-4">Submitted Messages</h3>
              {submittedMessages.map((msg, i) => (
                <div key={i} className="mb-4 p-3 border border-gray-200 rounded">
                  <p><strong>Name:</strong> {msg.name}</p>
                  <p><strong>Email:</strong> {msg.email}</p>
                  {msg.phone && <p><strong>Phone:</strong> {msg.phone}</p>}
                  <p className="text-sm">
                    <strong>Review:</strong> {"⭐".repeat(parseInt(msg.rating))} {msg.rating}/5
                  </p>
                  <p><strong>Message:</strong> {msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
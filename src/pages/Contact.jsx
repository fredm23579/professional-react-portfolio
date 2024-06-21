import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission logic
    alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormSubmitted(true);

    // Reset form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="p-4 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Send
        </button>
        {formSubmitted && <p className="mt-4 text-green-500">Thank you for your message!</p>}
      </form>
    </section>
  );
};

export default Contact;

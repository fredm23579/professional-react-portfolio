import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-left mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-left mb-2 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-2xl transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

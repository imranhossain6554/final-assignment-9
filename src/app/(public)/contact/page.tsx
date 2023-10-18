"use client";
import Footer from "@/components/ui/Footer/Footer";
import { Button } from "antd";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full py-6 px-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl text-center font-semibold mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
                required
              />
            </div>
            <div className="text-center">
              <Button className="w-full" type="primary">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

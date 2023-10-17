import React from "react";
import avatar from "../../../assets/images/avatar.jpg";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Company A",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CFO, Company B",
      testimonial:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      position: "CTO, Company C",
      testimonial:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded shadow-md"
            >
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <div className="flex gap-6 items-center">
                <div>
                  <Image src={avatar} height={40} width={40} alt="" />
                </div>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

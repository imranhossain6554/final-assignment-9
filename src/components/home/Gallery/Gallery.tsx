import React from "react";

const images = [
  "https://i.ibb.co/P5R8JGY/luxiry-room.jpg",
  "https://i.ibb.co/b27T4KL/family.jpg",
  "https://i.ibb.co/HptW0bK/common-room.jpg",
  "https://i.ibb.co/w6kXzjX/Bed-1.jpg",
  "https://i.ibb.co/Bt77gF6/bed-2.png",
  "https://i.ibb.co/bQKzCQ1/bedromm-1.jpg",
  "https://i.ibb.co/9HJQHGZ/Bed-Room-3.jpg",
  "https://i.ibb.co/Wt1G0bq/Dining-2.jpg",
  "https://i.ibb.co/wQM0kWN/Dining-Set.jpg",
  // Add more image URLs here
];

const Gallery = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h5 style={{ color: "green", fontWeight: "bold" }}>Gallery</h5>
        <h2>See Our Hotel View</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

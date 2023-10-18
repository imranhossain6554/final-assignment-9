/* eslint-disable @next/next/no-img-element */
import React from "react";

const images = [
  "https://i.ibb.co/P5R8JGY/luxiry-room.jpg",
  "https://i.ibb.co/b27T4KL/family.jpg",
  "https://i.ibb.co/HptW0bK/common-room.jpg",
  "https://i.ibb.co/w6kXzjX/Bed-1.jpg",
  "https://i.ibb.co/r61JSqW/katarzyna-pracuch-mgl-Haz5-Pj-Lg-unsplash.jpg",
  "https://i.ibb.co/StGgmsL/alev-takil-lw3-Lqe2-K7xc-unsplash.jpg",
  "https://i.ibb.co/Bq43HLq/albert-vincent-wu-Akqn-ZZR1o-L4-unsplash.jpg",
  "https://i.ibb.co/r61JSqW/katarzyna-pracuch-mgl-Haz5-Pj-Lg-unsplash.jpg",
  "https://i.ibb.co/d6FHYFz/alev-takil-3sy-TDi-VAc7w-unsplash.jpg",
  "https://i.ibb.co/Y0WTfWq/reisetopia-a-I6-Su7-Mu9-Ro-unsplash.jpg",
  "https://i.ibb.co/Bt77gF6/bed-2.png",
  "https://i.ibb.co/wQM0kWN/Dining-Set.jpg",
  "https://i.ibb.co/QDBrtnz/visualsofdana-T5p-L6ci-En-I-unsplash.jpg",
  // Add more image URLs here
];

const Gallery = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 style={{ fontWeight: "bold" }}>Gallery</h2>
        {/* <h3>See Our Hotel View</h3> */}
      </div>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:px-44 md:px-10">
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

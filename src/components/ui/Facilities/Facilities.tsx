import React from "react";

import swm from "./../../../assets/facilities/swimming-pool.png";
import gym from "./../../../assets/facilities/weights.png";
import res from "./../../../assets/facilities/restaurant.png";
import spa from "./../../../assets/facilities/massage.png";
import pla from "./../../../assets/facilities/panel.png";
import wifi from "./../../../assets/facilities/wi-fi.png";
import fac from "./../../../assets/facilities/fac-1.png";
import Image from "next/image";

const facilities = [
  { name: "Swimming Pool", icon: swm },
  { name: "Gym", icon: gym },
  { name: "Restaurant", icon: res },
  { name: "Spa", icon: spa },
  { name: "Playing Ground", icon: pla },
  { name: "Wi-Fi", icon: wifi },
  // Add more facilities as needed
];

const Facilities = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-4">
        {/* Left Column - Facilities Categories and Icons */}
        <div className="md:w-1/2 p-4">
          <h4 className="text-green">Facilities</h4>
          <h2>Core Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {facilities.map((faci) => (
              <>
                <div className="single-facilities text-center my-4">
                  <Image src={faci.icon} width={60} height={60} alt="icon" />
                  <h4>{faci.name}</h4>
                </div>
              </>
            ))}
          </div>
          {/* Add icons for each facility here */}
        </div>

        {/* Right Column - Hotel Images */}
        <div className="md:w-1/2 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image src={fac} alt="facilities" width={600} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;

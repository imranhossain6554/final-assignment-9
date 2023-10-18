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
    <div className="flex flex-col lg:flex-row justify-center items-center ">
      <div className="md:w-1/2 p-4 text-center">
        <h4 className="text-green ">Facilities</h4>
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
      </div>

      <div className="p-4">
        <div className="">
          <Image
            src={fac}
            alt="facilities"
            width={600}
            height={400}
            className="hidden lg:block md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Facilities;

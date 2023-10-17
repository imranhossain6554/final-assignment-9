import React from "react";
import hotelImg1 from "../../../assets/images/hotel-1.webp";
import hotelImg from "../../../assets/images/hotel-2.webp";
import Image from "next/image";
import { Button } from "antd";

const Welcome = () => {
  return (
    <div id="welcome-section">
      <section>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Accommodations</h2>

              <h2>Welcome Our Hotels And Resorts</h2>
              <p>
                Savvy travelers are looking for more than just the next
                destination on the map. They are looking for a memorable
                experience and to make new friends along the way.
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr{" "}
              </p>
              <a href="tour-search.html" className="btn btn_theme btn_md">
                <Button type="primary">Find tours</Button>
              </a>
            </div>
            <div className="bg-white rounded-lg p-4 w-2/3 welcome-img-part">
              <Image src={hotelImg1} alt="img" />
              <div>
                <Image src={hotelImg} className="hotelTwoImg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;

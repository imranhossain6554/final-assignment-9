import Footer from "@/components/ui/Footer/Footer";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div>
        <div className="flex justify-center bg-[#D2E0FB] py-10 mt-5">
          <div className="flex justify-between items-center w-full lg:w-[70%] mx-3 lg:m-0 bg-slate-100 px-5 py-3 rounded-xl">
            <h2 className="text-2xl">About Us</h2>
            <div className="flex justify-center items-center gap-3">
              <Link href={"/"}>Home</Link>
              <p>
                <RightOutlined />
              </p>
              <p>About</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 ">
          <div className="text-center mt-10 w-full lg:w-[30%]">
            <h2 className="text-2xl">About Beyond Hotel</h2>
            <p className="text-center py-5 text-xl font-thin text-slate-500 ">
              But I must explain to you how all this mistake idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

import React from "react";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-16 sm:px-5">
        <div className="flex flex-col lg:flex-row justify-center items-center  gap-56 p-0 sm:px-5">
          <div className="">
            <Image src={logo} alt={""} className=" md:w-56 sm:w-28 " />
            <p className="py-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit <br /> officia consequat duis enim velit.
            </p>

            <div className="flex flex-col md:flex-row lg:flex-row gap-5">
              <div className="flex items-center gap-5">
                <PhoneOutlined
                  style={{ width: "40px", height: "40px" }}
                  className="bg-white text-orange-500 rotate-90 pl-3 rounded-full h-10 w-10 hover:bg-orange-500 hover:text-white"
                />
                <div>
                  <p>Have a question?</p>
                  <p className="font-bold text-white">310-437-2766</p>
                </div>
                <div />
              </div>
              <div className="flex  items-center gap-5">
                <MailOutlined
                  style={{ width: "40px", height: "40px" }}
                  className="bg-white text-orange-500 pl-3 rounded-full h-10 w-10 hover:bg-orange-500 hover:text-white"
                />
                <div>
                  <p>Have a question?</p>
                  <p className="font-bold text-white">unreal@example.com</p>
                </div>
                <div />
              </div>
            </div>
          </div>

          <hr className="h-0 lg:h-40 md:h-0" />

          <div className="">
            <h2>Discounts, Newsletters</h2>
            <p className="py-7">
              Get discounts and newsletters on our hotels in your email. We
              promise to <br /> not spam. Unsubscribe anytime
            </p>
            <div className="flex justify-center  items-center gap-5">
              <Input
                placeholder="Enter Your Email"
                className="rounded-2xl p-3 bg-white border-orange-500"
              />
              <Button className="rounded-xl bg-orange-500 text-white font-bold">
                Primary
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

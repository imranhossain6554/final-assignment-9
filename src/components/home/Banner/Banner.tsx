"use client";
import { Button, Col, Input, Row } from "antd";
import bannerImg from "../../../assets/banner-3.png";
import Image from "next/image";
import Search from "antd/es/input/Search";
const Banner = () => {
  return (
    <div className=" bg-gray-900 lg:-mt-40 max-h-[800px]">
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Image
            src={bannerImg}
            className="w-full max-w-[500px] h-auto lg:-mb-60  lg:bg-white rounded-xl shadow-sm md:p-3"
            alt="banner"
          />
        </Col>
        <Col sm={12} md={11} lg={8} xs={{ span: 22, offset: 0 }}>
          <h1 className="text-5xl font-bold text-yellow-50 mt-16 ">
            Book our Hotels, Stays for your next tour.
          </h1>
          <p className="my-8 text-lg text-yellow-50">
            shapesshapes Book our Hotels, Stays for your next tour Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim.
          </p>
          <div style={{}}>
            <Search placeholder="Search..." enterButton size="large" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;

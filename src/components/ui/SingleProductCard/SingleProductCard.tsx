"use client";
import { Col } from "antd";
import Image from "next/image";
import React from "react";

const SingleProductCard = ({ product }: any) => {
  const { title, img } = product;
  console.log("Product:", product);
  return (
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      <h2>Single Hotel booking Details</h2>
      <h4>{title}</h4>
      <Image src={img} width={500} height={400} alt="product img" />
    </Col>
  );
};

export default SingleProductCard;

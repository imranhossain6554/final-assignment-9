import { Button, Col, Row } from "antd";
import React from "react";
import SingleProductCard from "../SingleProductCard/SingleProductCard";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: any) => {
  // console.log(product);
  const { _id, title, images, description, price, guest, bed } = product;
  // console.log(images);
  return (
    <div className=" mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 text-center">
        <img
          style={{
            width: "100%",
            borderRadius: "10px",
            height: "auto",
          }}
          src={images}
          alt="room image"
        />
        {/* <img src={img} alt="product image" /> */}
        <div className="text-start">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p>{description}</p>
          <div className="flex justify-between item-center">
            <div>
              <h4>{bed} Bed</h4>
            </div>
            <div>
              <h4>{guest} Guest</h4>
            </div>
          </div>
          <div className="text-center">
            <Link href={`/details/${_id}`}>
              <Button type="primary">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

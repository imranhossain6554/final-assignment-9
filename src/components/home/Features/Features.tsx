import ProductCard from "@/components/ui/ProductCard/ProductCard";
import { useGetPostDataQuery } from "@/redux/api/postApi";
import Link from "next/link";
import React from "react";

const Features = () => {
  const { data } = useGetPostDataQuery({});
  // console.log("Post data: ", data?.data);

  return (
    <div
      style={{
        padding: "60px 0",
      }}
    >
      <h2 style={{ textAlign: "center" }} className="text-2xl py-3">
        This is Features Service
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-28">
        {data?.data.map((product: any) => {
          return (
            <ProductCard
              key={product._id}
              params={product._id}
              product={product}
            />
          );
        })}
      </div>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Link href="allrooms">
          <button
            style={{
              background: "transparent",
              border: "1px solid #000",
              color: "#000",
              margin: "0 auto",
              fontWeight: "bold",
              padding: "15px 20px",
              display: "block",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              transition: "color 0.3s",
            }}
            className="hover:bg-black hover:text-white hover:after:bg-black hover:after:scale-x-0 hover:after:absolute hover:after:transform hover:after:translate-x-0 hover:after:origin-left cursor-pointer"
          >
            Rooms & Suites
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Features;

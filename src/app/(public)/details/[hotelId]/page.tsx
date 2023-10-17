"use client";
import SingleProductCard from "@/components/ui/SingleProductCard/SingleProductCard";
import { useSinglePostDataQuery } from "@/redux/api/postApi";
import { useRouter } from "next/navigation";

import React from "react";

type IParams = {
  params: string;
};

const HotelDetailsPage = ({ params }: any) => {
  const { data, isLoading, isError } = useSinglePostDataQuery(undefined);
  console.log("data", data);
  const router = useRouter();
  const paramsAsNumber = Number(params);

  return (
    <div>
      {/* {data?.data?.map((product: any) => {
        if (product?._id == params?._id) {
          return <SingleProductCard key={product._id} product={product} />;
        }
      })} */}

      {isNaN(paramsAsNumber) ? (
        <p>Invalid or missing parameter{params._id}</p>
      ) : (
        <div>
          <SingleProductCard key={paramsAsNumber} product={data} />
          <h2>This is dynamic data route - {paramsAsNumber}</h2>
        </div>
      )}
      <h2>This is dynamic data route- {params._id}</h2>
    </div>
  );
};

export default HotelDetailsPage;

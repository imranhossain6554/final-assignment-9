import React from "react";
import { Card } from "antd";
const BannerCard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center py-10 mt-32 w-full space-x-3">
        <h2 className="text-4xl w-60">
          What makes our hotels best than others?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <Card className=" w-60 text-gray-900 bg-white rounded-lg border border-green-500 hover:bg-green-500 hover:text-white">
            <h2 className="text-xl">Hassle Free Booking</h2>
            <p>Book hotels from our website without any hassle.</p>
          </Card>
          <Card className=" w-60 text-gray-900 bg-white rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white">
            <h2 className="text-xl">28,000 Reviews</h2>
            <p>Book hotels from our website without any hassle.</p>
          </Card>
          <Card className=" w-60 text-gray-900 bg-white rounded-lg border border-blue-500 hover:bg-blue-500 hover:text-white">
            <h2 className="text-xl">24/7 Support</h2>
            <p>Book hotels from our website without any hassle.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;

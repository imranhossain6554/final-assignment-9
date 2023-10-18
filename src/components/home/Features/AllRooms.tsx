import ProductCard from "@/components/ui/ProductCard/ProductCard";
import PublicHeader from "@/components/view/Header/PublicHeader";
import { useGetPostDataQuery } from "@/redux/api/postApi";
import { setSearchTerm } from "@/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IHotels } from "@/types/globalTypes";
import { Input } from "antd";
import React from "react";

const AllRooms = () => {
  const { data, isLoading, error } = useGetPostDataQuery({});
  console.log(isLoading, error);

  const searchTerm = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  const filteredData = data?.data?.filter(
    (item: { title: string; author: string; genre: string }) => {
      const itemValues = Object.values(item).map((value) =>
        value.toString().toLowerCase()
      );

      return itemValues.some((value) =>
        value.includes(searchTerm.toLowerCase())
      );
    }
  );
  return (
    <div>
      <div>
        <div className="grid grid-cols-12 max-w-7xl mx-auto relative mt-4">
          {/* Search Bar (1/3 part) */}
          <div
            style={{
              borderRight: "5px solid green",
            }}
            className="col-span-3 z-10 mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]"
          >
            <h4 className="text-xl text-secondary text-center border-2">
              Total Hotels / Rooms : {data?.data?.length}
            </h4>
            <div>
              <h1 className="text-xl text-orange-600 uppercase mb-1">
                Search Hotel Rooms
              </h1>
              <div className="form-control mb-2">
                <input
                  type="text"
                  style={{
                    padding: "10px 12px",
                    borderRadius: "5px",
                  }}
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          {/* Product Display (2/3 part) */}
          <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
            {filteredData?.map((product: IHotels) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;

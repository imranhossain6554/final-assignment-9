/* eslint-disable @next/next/no-img-element */

interface IOrder {
  _id?: string;
  title: string;
  images: string;
  price: string;
  category: string;
  guest: string;
  rating: string;
  status: boolean;
  description: string;
  features: string[];
  reviews: string[];
  isPaid: boolean;
  userEmail: string;
}

const Cart = ({ order }: { order: IOrder }) => {
  const { title, price, category, images } = order;
  return (
    <div className="py-2 mb-4 border-t border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-4">
        <div className="w-full px-4 mb-4 md:w-4/6 lg:w-6/12 md:mb-0">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 mb-3 md:w-1/3">
              <div className="w-full h-96 md:h-24 md:w-24">
                <img
                  src={images}
                  alt="order items"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="w-2/3 px-4">
              <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                {title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 ">{category}</p>
            </div>
          </div>
        </div>
        <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
          <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
            &#2547; {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

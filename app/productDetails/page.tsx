import React from "react";
import Header from "../components/Header";
import Categorycard from "../components/CategoryCard";
import Footer from "../components/Footer";
import { MdOutlineStarBorderPurple500, MdOutlineStarPurple500 } from "react-icons/md";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

const ProductDetails = () => {
  return (
    <>
      <Header />

      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row">
        <Sidebar />

        <div className="w-full md:w-3/4 p-4 md:p-10 flex flex-col md:flex-row border-b-2">
          {/* Product Image and Gallery */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="w-full mt-4 md:mt-0">
              <Image
                src="/images/pd1.svg"
                alt="Product"
                width={492}
                height={360}
                className="w-full object-cover"
              />
            </div>

            <div className="w-full flex flex-wrap md:flex-nowrap gap-2 mt-4">
              <Image
                src="/images/View 1.svg"
                alt="Product"
                width={148}
                height={124}
                className="w-1/3 md:w-20 object-cover"
              />
              <Image
                src="/images/View 2 (1).svg"
                alt="Product"
                width={148}
                height={124}
                className="w-1/3 md:w-20 object-cover"
              />
              <Image
                src="/images/View 3.svg"
                alt="Product"
                width={148}
                height={124}
                className="w-1/3 md:w-20 object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 bg-white mt-6 md:mt-0 md:ml-12 p-4">
            <div>
              <h3 className="font-semibold text-2xl md:text-4xl leading-6">
                Nissan GT-R
              </h3>
              <div className="flex items-center mt-8 gap-2">
                <MdOutlineStarPurple500 className="fill-amber-400 text-xl" />
                <MdOutlineStarPurple500 className="fill-amber-400 text-xl" />
                <MdOutlineStarPurple500 className="fill-amber-400 text-xl" />
                <MdOutlineStarPurple500 className="fill-amber-400 text-xl" />
                <MdOutlineStarBorderPurple500 className="text-xl" />
                <p className="text-sm text-[#9F9F9F]">| 440+ Reviews</p>
              </div>

              <p className="text-sm md:text-base text-justify text-[#9F9F9F] leading-[25px] mt-4">
                NISMO has become the embodiment of Nissans outstanding performance,
                inspired by the most unforgiving proving ground, the race track.
              </p>
            </div>

            {/* Product Specifications */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-gray-400 text-sm">Type Car:</h2>
                  <h2 className="text-gray-500 text-sm">Sport</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-gray-400 text-sm">Capacity:</h2>
                  <h2 className="text-gray-500 text-sm">2 Persons</h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <p className="bg-gray-100 text-gray-400 px-2 py-1 rounded-md text-sm">
                    Steering
                  </p>
                  <p className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-sm">
                    Manual
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="bg-gray-100 text-gray-400 px-2 py-1 rounded-md text-sm">
                    Gasoline
                  </p>
                  <p className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-sm">
                    70L
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing and Button */}
            <div className="mt-6">
              <h2 className="text-lg md:text-xl font-medium">
                $80.00 / <span className="text-gray-400">day</span>
              </h2>
              <p className="text-sm text-gray-400 mt-2">$100.00</p>
              <button className="bg-blue-600 text-white rounded px-4 py-2 mt-4 text-sm md:text-lg">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="w-full flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/4 bg-white"></div>
        <div className="w-full md:w-3/4">
          <Categorycard />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;

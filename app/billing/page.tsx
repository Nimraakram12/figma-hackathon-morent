import React from "react";
import Footer from "../components/Footer";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Image from "next/image";
const Billing = () => {
  return (
    <>
      
      <div className="w-full p-4 flex flex-col md:flex-row justify-around items-center gap-2">
        <div className="w-full md:w-2/3">
          <div className=" bg-white">
            <h3 className="leading-[30px] text-xl font-bold p-2">
              Billing Info
            </h3>
            <div className="w-full flex justify-between p-2">
              <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
                Please enter your billing info
              </h5>
              <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
                Step 1 to 4
              </h5>
            </div>

            <div className="w-full flex justify-around items-center gap-2 p-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 bg-[#F6F7F9] rounded-lg"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-4 bg-[#F6F7F9] rounded-lg"
                />
              </div>
            </div>

            <div className="w-full flex justify-around items-center gap-2 p-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="p-4 bg-[#F6F7F9] rounded-lg"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="">Town / city</label>
                <input
                  type="text"
                  placeholder="Town / city"
                  className="p-4 bg-[#F6F7F9] rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white">
          <h3 className="leading-[30px] text-xl font-bold p-2">Rental Info</h3>
          <div className="w-full flex justify-between p-2">
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
              Please select your rental date
            </h5>
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
              Step 2 to 4
            </h5>
          </div>
          <h5 className="p-2">
            <input type="radio" name="" id="" /> Pick Of
          </h5>
          <div className="w-full flex justify-around items-center gap-2 p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Location</label>
              <input
                type="text"
                placeholder="Enter Your City"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Date</label>
              <input
                type="text"
                placeholder="Enter Current Date"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>

          <div className="w-full p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Time</label>
              <input
                type="text"
                placeholder="Enter Current Time"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>

          <h5 className="p-2">
            <input type="radio" name="" id="" /> Drop Of
          </h5>
          <div className="w-full flex justify-around items-center gap-2 p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Location</label>
              <input
                type="text"
                placeholder="Enter Your City"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Date</label>
              <input
                type="text"
                placeholder="Enter Current Date"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>

          <div className="w-full p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Time</label>
              <input
                type="text"
                placeholder="Enter Current Time"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white">
          <h3 className="leading-[30px] text-xl font-bold p-2">
            Payment Method
          </h3>
          <div className="w-full flex justify-between p-2">
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
              Please enter your payment method
            </h5>
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
              Step 3 to 4
            </h5>
          </div>

          <div className="w-full flex justify-center items-center gap-2 p-4">
            <div className="w-full flex justify-between items-center bg-[#F6F7F9]">
              <h5 className="p-6">
                <input type="radio" name="" id="" /> Credit Card
              </h5>
              <RiVisaLine className="text-5xl fill-blue-600" />
            </div>
          </div>

          <div className="w-full flex justify-around items-center gap-2 p-4 ">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">CardNumber</label>
              <input
                type="text"
                placeholder="CardNumber"
                className="p-4  bg-[#F6F7F9] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Expiration Date</label>
              <input
                type="text"
                placeholder="DD/MM/YY"
                className="p-4  bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>

          <div className="w-full flex justify-around items-center gap-2 p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">CardHolder</label>
              <input
                type="text"
                placeholder="CardHolder"
                className="p-4  bg-[#F6F7F9] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className="p-4  bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>

          <div className="w-full flex justify-center items-center gap-2 p-4 ">
            <div className="w-full flex justify-between items-center bg-[#F6F7F9]">
              <h5 className="p-6">
                <input type="radio" name="" id="" /> PayPal
              </h5>
              <FaCcPaypal className="text-5xl fill-blue-600" />
            </div>
          </div>

          <div className="w-full flex justify-center items-center gap-2 p-4 ">
            <div className="w-full flex justify-between items-center bg-[#F6F7F9]">
              <h5 className="p-6">
                <input type="radio" name="" id="" /> Bitcoin
              </h5>
              <FaBitcoin className="text-5xl fill-blue-600" />
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white">
          <h3 className="leading-[30px] text-xl font-bold p-2">Confirmation</h3>
          <div className="w-full flex justify-between p-2">
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
              We are getting to the end. Just few clicks and your rental is
              ready!
            </h5>
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
              Step 4 to 4
            </h5>
          </div>

          <div className="w-full flex justify-start gap-2 p-4">
  <div className="flex items-start gap-2 bg-[#F6F7F9] w-full p-4 rounded-md">
    <input type="checkbox" name="" id="" className="mt-1" />
    <h5 className="text-sm leading-relaxed">
      I agree with sending Marketing and newsletter emails. No spam, promised!
    </h5>
  </div>
</div>
<div className="w-full flex justify-start gap-2 p-4">
  <div className="flex items-start gap-2 bg-[#F6F7F9] w-full p-4 rounded-md">
    <input type="checkbox" name="" id="" className="mt-1" />
    <h5 className="text-sm leading-relaxed">
      I agree with our terms and conditions and privacy policy.
    </h5>
  </div>
</div>

          <div className="w-full flex p-6 items-center">
            <Link
              href="/"
              className="border bg-[#3563E9] text-white p-4 rounded-lg"
            >
              <button>Rent Now</button>
            </Link>
          </div>
        </div>
        </div>
        <div className="w-full md:w-1/3 bg-white mt-0 md:mt-[-1600px]">
          <h3 className="leading-[30px] text-xl font-bold px-2 py-2">
            Rental Summary
          </h3>
          <p className="font-medium leading-[21px] text-sm text-[#90A3BF] px-2">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>

          <div className="w-full flex">
            <div>
              <Image
                src={"/images/view1.svg"}
                alt="Product"
                width={100}
                height={100}
                className="w-[120px] h-[120px] md:h-24 p-2"
              />
            </div>
            <div>
              <h2 className="font-bold leading-[48px] text-lg md:text-[32px]">
                Nissan GT - R
              </h2>
              <div className="flex justify-around items-center w-full">
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarBorderPurple500 />|
                <p className="text-[#9F9F9F] font-medium text-[10px] md:text-sm text-wrap">
                  440+ Customer Review
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-4 flex justify-between items-center">
              <span className="font-medium text-[#90A3BF] text-base leading-6">Subtotal</span>
              <span>$80.00</span>
            </div>

            <div className="w-full p-4 flex justify-between items-center">
              <span className="font-medium text-[#90A3BF] text-base leading-6">Tax</span>
              <span>$0</span>
            </div>

            <div className="w-full p-4 flex justify-between items-center">
              <div>
            <h2 className="font-bold text-xl leading-[30px]">Total Rental Price</h2>
              <span className="font-medium text-[#90A3BF] text-sm leading-6">Overall price and includes rental discount</span>
              </div>
              <h1 className="text-[32px] leading-[40.32px] font-bold">$80.00</h1>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Billing;
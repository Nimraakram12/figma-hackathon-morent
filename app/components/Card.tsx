import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaGasPump, FaCogs, FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

const card = () => {
  return (
    <>
    
    
      <div className="w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-around items-center gap-6 mb-4">
        <div className="w-full md:w-1/4 p-8 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>Koenigsegg</h2>
              <h3 className="text-[#13131399] font-bold text-sm">Sport</h3>
            </div>
            <FaHeart />
          </div>
          <Image
            src={"/images/p1.svg"}
            alt="p1"
            width={100}
            height={100}
            className="m-auto w-80 h-40"
          />

          <div className="flex justify-around items-center">
            <div className="text-gray-400 flex items-center gap-2">
              <FaGasPump /> 90L
            </div>
            <div className="text-gray-400 flex items-center gap-2">
              <FaCogs /> Manual
            </div>
            <div className="text-gray-400 flex items-center gap-2">
              <FaUserFriends /> 2 Peoples
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <h2 className="font-bold text-xl">$99.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/4 p-8 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>Nissan GT - R</h2>
              <h3 className="text-[#13131399] font-bold text-sm">Sport</h3>
            </div>
            <FaRegHeart />
            </div>
          <Image
            src={"/images/p2.svg"}
            alt="p2"
            width={100}
            height={100}
            className="m-auto w-80 h-40"
          />

          <div className="flex justify-around items-center">
            <div className="text-gray-400 flex items-center gap-2">
              <FaGasPump /> 90L
            </div>
            <div className="text-gray-400 flex items-center gap-2">
              <FaCogs /> Manual
            </div>
            <div className="text-gray-400 flex items-center gap-2">
              <FaUserFriends /> 2 Peoples
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <h2 className="font-bold text-xl">$80.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>


        <div className="w-full md:w-1/4 p-8 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>Rolls - Royce</h2>
              <h3 className="text-[#13131399] font-bold text-sm">Sport</h3>
            </div>
            <FaHeart />
            </div>
          <Image
            src={"/images/p3.svg"}
            alt="p3"
            width={100}
            height={100}
            className="m-auto w-80 h-40"
          />

          <div className="flex justify-around items-center">
            <div className="text-gray-400 flex items-center gap-2">
              <FaGasPump /> 90L
            </div>
            <div className="text-gray-400 flex items-center gap-2">
              <FaCogs /> Manual
            </div>
            <div className="text-gray-400 flex items-center gap-2">
              <FaUserFriends /> 2 Peoples
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <h2 className="font-bold text-xl">$96.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/4 p-8 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>Nissan GT - R</h2>
              <h3 className="text-[#13131399] font-bold text-sm">Sport</h3>
            </div>
            <FaRegHeart />
            </div>
          <Image
            src={"/images/p4.svg"}
            alt="p4"
            width={100}
            height={100}
            className="m-auto w-80 h-40"
          />

          <div className="flex justify-around items-center">
            <div className="text-gray-400 flex items-center gap-2">
              <FaGasPump /> 90L
            </div>
            <div className="text-gray-400 flex items-center gap-2">
              <FaCogs /> Manual
            </div>
            <div className="text-gray-400 flex items-center gap-2">
              <FaUserFriends /> 2 Peoples
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <h2 className="font-bold text-xl">$80.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="/">Rent Now</Link>
            </button>
            
          </div>
        </div>
        
       


    
      
          
          </div>
    </>
  );
};

export default card;
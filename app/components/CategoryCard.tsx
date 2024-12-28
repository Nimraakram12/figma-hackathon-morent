import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaGasPump, FaCogs, FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
const categorycard = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-4 mb-4">
        <div className="w-11/12 md:w-1/3 p-4 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>Koenigsegg</h2>
              <h3 className="text-[#13131399] font-bold text-sm">Sport</h3>
            </div>
            <FaHeart className='text-red-500' />
          </div>
          <Image
            src={"/images/p1.svg"}
            alt="p1"
            width={100}
            height={100}
            className="m-auto w-80 h-40"
          />

          <div className="flex justify-around items-center text-xs">
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
              <h2 className="font-bold text-lg">$99.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>

        <div className="w-11/12 md:w-1/3 p-4 bg-white">
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

          <div className="flex justify-around items-center text-xs">
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
              <h2 className="font-bold text-lg">$80.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>


        <div className="w-11/12 md:w-1/3 p-4 bg-white">
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

          <div className="flex justify-around items-center text-xs">
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
              <h2 className="font-bold text-lg">$96.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>
      </div>


      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-4">
        <div className="w-11/12 md:w-1/3 p-4 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>All New Rush</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaHeart />
          </div>
          <Image
            src={"/images/r1.svg"}
            alt="R1"
            width={100}
            height={100}
            className="m-auto w-80 h-40"
          />

          <div className="flex justify-around items-center text-xs">
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
              <h2 className="font-bold text-lg">$72.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>

        <div className="w-11/12 md:w-1/3 p-4 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>CR -V</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaHeart className='text-red-500'/>
            </div>
          <Image
            src={"/images/r2.svg"}
            alt="R2"
            width={100}
            height={100}
            className="m-auto w-80 h-40"
          />

          <div className="flex justify-around items-center text-xs">
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
              <h2 className="font-bold text-lg">$80.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>


        <div className="w-11/12 md:w-1/3 p-4 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>All New Terios</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaHeart />
            </div>
          <Image
            src={"/images/r3.svg"}
            alt="R3"
            width={100}
            height={100}
            className="m-auto w-80 h-40"
          />

          <div className="flex justify-around items-center w-full text-xs">
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
              <h2 className="font-bold text-lg">$74.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default categorycard
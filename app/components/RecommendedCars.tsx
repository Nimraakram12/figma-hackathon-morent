import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaGasPump, FaCogs, FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
const recommededcars = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-6 mt-4">
        <div className="w-full md:w-1/4 p-8 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>All New Rush</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaHeart />
          </div>
          <Image
            src={"/images/R1.svg"}
            alt="R1"
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
              <h2 className="font-bold text-xl">$72.00/</h2>
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
              <h2>CR -V</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaRegHeart />
            </div>
          <Image
            src={"/images/R2.svg"}
            alt="R2"
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
              <h2>All New Terios</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaHeart />
            </div>
          <Image
            src={"/images/R3.svg"}
            alt="R3"
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
              <h2 className="font-bold text-xl">$74.00/</h2>
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
              <h2>CR- V</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaRegHeart />
            </div>
          <Image
            src={"/images/R4.svg"}
            alt="R4"
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
      </div>

      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-6 mt-4">
        <div className="w-full md:w-1/4 p-8 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h2>MG ZX Exclusice</h2>
              <h3 className="text-[#13131399] font-bold text-sm">Hatchback</h3>
            </div>
            <FaRegHeart />
          </div>
          <Image
            src={"/images/R5.svg"}
            alt="R5"
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
              <h2 className="font-bold text-xl">$76.00/</h2>
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
              <h2>New MG ZS</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaHeart />
            </div>
          <Image
            src={"/images/R6.svg"}
            alt="R6"
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
              <h2>MG ZX Excite</h2>
              <h3 className="text-[#13131399] font-bold text-sm">Hatchback</h3>
            </div>
            <FaRegHeart />
            </div>
          <Image
            src={"/images/R7.svg"}
            alt="R7"
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
              <h2 className="font-bold text-xl">$74.00/</h2>
              <span className="text-[#13131399] font-bold text-sm">day</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Link href="">Rent Now</Link>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/4 p-8 ">
          <div className="flex justify-between items-center">
            <div>
              <h2>New MG ZS</h2>
              <h3 className="text-[#13131399] font-bold text-sm">SUV</h3>
            </div>
            <FaHeart />
            </div>
          <Image
            src={"/images/R8.svg"}
            alt="R8"
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
              <Link href="#productCategory">Rent Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default recommededcars
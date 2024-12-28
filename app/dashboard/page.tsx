"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const transactions = [
    { image: "/images/rt.svg", carName: "Nissan GT - R", carType: "Sport Car", date: "20 July", price: "$80.00" },
    { image: "/images/rt1.svg", carName: "Koenigsegg", carType: "Sport Car", date: "19 July", price: "$99.00" },
    { image: "/images/rt2.svg", carName: "Rolls - Royce", carType: "Sport Car", date: "18 July", price: "$96.00" },
    { image: "/images/rt3.svg", carName: "CR-V", carType: "Sport Car", date: "17 July", price: "$80.00" },
  ];

  return (

    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      
      {/* Hamburger Button */}
      <button
        className="p-4 text-blue-600 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white h-auto w-64 p-4 fixed z-50 top-0 left-0 shadow-md transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0`}
      >
        {/* Logo */}
        <div className="font-bold text-2xl mb-10 text-blue-600">Car Rental</div>

        {/* Menu Items */}
        <ul className="space-y-6 leading-loose text-gray-400">
          <li className="flex items-center space-x-2 bg-blue-600 border rounded text-white font-semibold">
            <Image src="/images/home.svg" alt="dashboard icon" height={24} width={24} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/car.svg" alt="dashboard icon" height={24} width={24} />
            <span>Car Rent</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/in.svg" alt="dashboard icon" height={24} width={24} />
            <span>Insight</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/wallet.svg" alt="dashboard icon" height={24} width={24} />
            <span>Reimburse</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/message.svg" alt="dashboard icon" height={24} width={24} />
            <span>Inbox</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/calendar.svg" alt="dashboard icon" height={24} width={24} />
            <span>Calendar</span>
          </li>
        </ul>

        {/* Preferences */}
        <div className="mt-32 leading-loose space-y-4 text-gray-400">
          <div>Preferences</div>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/setting.svg" alt="dashboard icon" height={24} width={24} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/info-circle.svg" alt="dashboard icon" height={24} width={24} />
            <span>Help & Center</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/briefcase.svg" alt="dashboard icon" height={24} width={24} />
            <span>Dark Mode</span>
            <Image src="/images/group.svg" alt="dashboard icon" height={50} width={50} />
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/logout.svg" alt="dashboard icon" height={24} width={24} />
            <span>Logout</span>
          </li>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Rental Details */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Details Rental</h2>
            {/* Map Placeholder */}
            <div className="mb-6">
              <Image src="/images/map.svg" alt="map" width={786} height={272} className="rounded-md" />
            </div>

            {/* Car Details */}
            <div className="flex items-center space-x-4 mb-6">
              <Image src="/images/view1.svg" alt="car" width={132} height={72} className="rounded-md" />
              <div>
                <h2 className="font-bold text-lg">Nissan GT - R</h2>
                <span className="text-gray-500 text-sm">Sport Car</span>
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

            {/* Total Rental Price */}
            <div className="mt-6 font-bold text-xl md:text-[30px]">
              Total Rental Price:
              <div className="flex items-center justify-between mt-2 text-sm md:text-[15px] text-gray-400 font-normal">
                <span>Overall price and includes rental discount</span>
                <span className="text-[30px] text-black font-bold">$80:00</span>
              </div>
            </div>
          </div>

          {/* Right-side Content (Top 5 Car Rentals and Recent Transactions) */}
          <div className="space-y-6">
            {/* Top 5 Car Rentals */}
            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="font-bold mb-4">Top 5 Car Rental</h2>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                {/* Chart */}
                <div className="relative flex-1">
                  <img src="/images/chart.svg" alt="chart"  className=" w-[220px] h-[220px] rounded-md"/>
                  <div className="ml-20 md:ml-20 absolute inset-0 flex items-center text-center font-bold text-2xl  mr-12 text-gray-800">
                    72,030
                  </div>
                </div>

                {/* Car List */}
                <div className="flex">
                  <ul className="list-disc pl-4 leading-loose text-[20px] space-y-6 text-2xl">
                    <li>Sport Car - 17,439</li>
                    <li>SUV - 9,478</li>
                    <li>Coupe - 18,197</li>
                    <li>Hatchback - 12,510</li>
                    <li>MPV - 14,406</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="font-bold mb-4">Recent Transactions</h2>
              <ul className="space-y-4">
                {transactions.map((transaction, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image src={transaction.image} alt="car" width={80} height={50} />
                      <div>
                        <span className="text-gray-700 font-bold">{transaction.carName}</span>
                        <div className="text-gray-400 text-sm">{transaction.carType}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm">{transaction.date}</div>
                      <span className="text-gray-800 font-bold">{transaction.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )}
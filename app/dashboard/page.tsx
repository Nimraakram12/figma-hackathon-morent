"use client"
import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Header/>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform lg:translate-x-0 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-white shadow-md w-64 p-4 z-40`}
      >
        {/* Logo */}
        <div className="font-bold text-2xl mb-10 text-blue-600">Car Rental</div>

        {/* Menu Items */}
        <ul className="space-y-6 leading-loose text-gray-400">
          <li className="flex items-center space-x-2 bg-blue-600 border rounded text-white font-semibold px-4 py-2">
            <Image src="/images/home.png" alt="Dashboard icon" height={24} width={24} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/car.png" alt="Car Rent icon" height={24} width={24} />
            <span>Car Rent</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/chart.png" alt="Insight icon" height={24} width={24} />
            <span>Insight</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/wallet.png" alt="Reimburse icon" height={24} width={24} />
            <span>Reimburse</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/message.png" alt="Inbox icon" height={24} width={24} />
            <span>Inbox</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/calendar.png" alt="Calendar icon" height={24} width={24} />
            <span>Calendar</span>
          </li>
        </ul>

        {/* Preferences */}
        <div className="mt-auto leading-loose space-y-4 text-gray-400">
          <div>Preferences</div>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/setting.png" alt="Settings icon" height={24} width={24} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/info-circle.png" alt="Help & Center icon" height={24} width={24} />
            <span>Help & Center</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/dark.png" alt="Dark Mode icon" height={34} width={68} />
            <span>Dark Mode</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold px-4 py-2">
            <Image src="/images/logout.png" alt="Logout icon" height={24} width={24} />
            <span>Logout</span>
          </li>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-4 left-4 lg:hidden p-2 bg-blue-500 text-white rounded-md z-50"
      >
        ☰
      </button>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-0 lg:ml-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Rental Details */}
          <section className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Details Rental</h2>

            {/* Map Placeholder */}
            <div className="mb-6">
              <Image
                src="/images/Maps.svg"
                alt="map"
                width={786}
                height={272}
                className="rounded-md"
              />
            </div>

            {/* Car Details */}
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/images/d1.svg"
                alt="car"
                width={132}
                height={72}
                className="rounded-md"
              />
              <div>
                <h2 className="font-bold text-lg">Nissan GT - R</h2>
                <span className="text-gray-500 text-sm">Sport Car</span>
              </div>
            </div>

            {/* Total Rental Price */}
            <div className="mt-6 font-bold text-2xl">
              Total Rental Price:
              <div className="flex items-center justify-between mt-2 text-sm text-gray-400 font-normal">
                <span>Overall price and includes rental discount</span>
                <span className="text-black font-bold text-lg">$80:00</span>
              </div>
            </div>
          </section>

          {/* Top 5 Car Rentals */}
          <section className="p-6 bg-white shadow rounded-lg">
            <h2 className="font-bold mb-4">Top 5 Car Rental</h2>
            <div className="flex gap-4 items-start">
              {/* Chart */}
              <div className="relative mx-auto">
  {/* Background Circle */}
  <img
    src="/images/chart.svg" 
    alt="chart" 
    className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]"
  />

  {/* Centered Text/Image */}
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src="/images/chart2.svg" 
      alt="text" 
      className="w-[80px] h-[20px] sm:w-[100px] sm:h-[25px] md:w-[120px] md:h-[30px] lg:w-[140px] lg:h-[35px] xl:w-[160px] xl:h-[40px]"
    />
  </div>



              </div>

              {/* Car List */}
              <div className="flex-1">
                <ul className="list-disc pl-4 leading-loose">
                  <li>Sport Car - 17,439</li>
                  <li>SUV - 9,478</li>
                  <li>Coupe - 18,197</li>
                  <li>Hatchback - 12,510</li>
                  <li>MPV - 14,406</li>
                </ul>
              </div>
            </div>
           
    

          {/* Recent Transactions */}
          <div className="p-6 bg-white shadow rounded-lg col-span-2 mt-6">
  <h2 className="font-bold mb-4">Recent Transactions</h2>
  <ul className="space-y-4">
    {/* Transaction Items */}
    {[
      {
        image: "images/rt1.svg",
        carName: "Nissan GT - R",
        carType: "Sport Car",
        date: "20 July",
        price: "$80.00",
      },
      {
        image: "images/rt2.svg",
        carName: "Koenigsegg",
        carType: "Sport Car",
        date: "19 July",
        price: "$99.00",
      },
      {
        image: "images/rt3.svg",
        carName: "Rolls - Royce",
        carType: "Sport Car",
        date: "18 July",
        price: "$96.00",
      },
      {
        image: "images/rt4.svg",
        carName: "CR-V",
        carType: "Sport Car",
        date: "17 July",
        price: "$80.00",
      },
    ].map((transaction, index) => (
      <li key={index} className="flex items-center justify-between">
        {/* Image and Car Info */}
        <div className="flex items-center gap-4">
          <Image src={transaction.image} alt="car" width={80} height={50} />
          <div>
            <span className="text-gray-700 font-bold">{transaction.carName}</span>
            <div className="text-gray-400 text-sm">{transaction.carType}</div>
          </div>
        </div>

        {/* Date and Price */}
        <div className="text-right">
          <div className="text-gray-400 text-sm">{transaction.date}</div>
          <span className="text-gray-800 font-bold">{transaction.price}</span>
        </div>
      </li>
    ))}
  </ul>
</div>
</section>
        </div>
      </main>
        </div>
      
  );
}

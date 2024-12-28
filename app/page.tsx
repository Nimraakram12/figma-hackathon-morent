

import Bookingform from "./components/Bookingform"
import Card from "./components/Card"
import Recommededcars from "./components/RecommendedCars"
import Footer from "./components/Footer"
import Image from "next/image"
import Link from "next/link"
import React from "react"
export default function Home() {
  return (
    <>


    <div className="w-full flex justify-around items-center gap-4 p-4 md:p-12">
      <div className="w-full md:w-1/2 bg-[#54A6FF] h-auto md:h-96">
      <div className="w-full md:w-3/4 text-white px-6 md:px-14 pt-6 md:pt-14 pb-0">
      <h2 className="font-bold text-2xl md:text-[32px] leading-[48px]">The Best Platform for Car Rental</h2>
      <p className="font-medium leading-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
      <button className="bg-[#3563E9] mt-4 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>

      </div>
            <Image src={"/images/HERO1.svg"} alt="Car1" width={100} height={100} className="w-96 m-auto mt-4 md:mt-0"/>
      </div>
      <div className="w-full md:w-1/2 bg-[#3563E9] hidden md:block h-96">
      <div className="w-full md:w-3/4 text-white p-14 pb-0">
      <h2 className="font-bold text-[32px] leading-[48px]">Easy way to rent a car at a low price</h2>
      <p className="font-medium leading-6">Providing cheap car rental services and safe and comfortable facilities.</p>
      <button className="bg-[#54A6FF] mt-4 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>

      </div>
            <Image src={"/images/HERO2.svg"} alt="Car2" width={100} height={100} className="w-96 m-auto"/>
      </div>    </div>

      <Bookingform/>
      <div className="w-full px-6 flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-400">Popular Cars</h2>
          <Link href="/productCategory">
          <button className="text-blue-500 hover:underline">View All</button>
        </Link>
        </div>
        <Card />
       
        <div className="w-full px-6 flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-400">Recommended Cars</h2>
          <Link href="/productCategory">
          <button className="text-blue-500 hover:underline">View All</button>
        </Link>
        </div>
      
<Recommededcars />  

<div className="w-full flex justify-center items-center mt-6">
  <Link href="/productCategory" className="border bg-[#3563E9] text-white p-4 rounded-lg">
  <button>Show More Cars</button></Link>
</div>
    <Footer />

    </>
  );
}
import React from "react";

import Categorycard from "../components/CategoryCard";
import Footer from "../components/Footer";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { MdOutlineStarPurple500 } from "react-icons/md";
const page = () => {
  return (
    <>
    
      <div className="w-full flex flex-col md:flex-row ">
        
        <Sidebar/>

        <div className="w-full h-1/2 md:w-3/4 p-4 md:p-10 flex flex-col md:flex-row gap-4 border-b-2">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="w-full mt-4 md:mt-0">
              <Image
                src={"/images/view.svg"}
                alt="Product"
                width={600}
                height={500} 
                className="w-full"
              />
            </div>

            <div
              className="w-full p-0 flex flex-wrap md:flex-nowrap flex-row 
            justify-around items-center gap-2 mt-4"
            >
              <Image
                src={"/images/view1.svg"}
                alt="Product"
                width={100}
                height={100}
                className="w-[120px] h-[120px] md:h-20 "
              />

              <Image
                src={"/images/view2.svg"}
                alt="Product"
                width={100}
                height={100}
                className="w-[120px] h-[100px] md:h-20 "
              />

              <Image
                src={"/images/view3.svg"}
                alt="Product"
                width={100}
                height={100}
                className="w-[120px] h-[100px] md:h-20 "
              />
            </div>
          </div>
          <div className="w-full h-auto md:h-1/2 bg-white shadow-2xl rounded-lg md:w-1/2 p-4">
            <div className="w-full">
              <h3 className="font-semibold leading-6 text-3xl text-wrap md:text-[42px]">
                Nissan GT-R
              </h3>
              <div className="flex justify-around items-center w-full md:w-2/3 mt-4">
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarBorderPurple500 />|
                <p className="text-[#9F9F9F] text-base text-wrap">440+ Customer Review</p>
              </div>
              <p className="w-full text-justify mt-4">
                NISMO has become the embodiment of Nissans outstanding
                performance, inspired by the most unforgiving proving ground,
                the race track.
              </p>
            </div>

            <div className="w-full gap-2 flex items-center flex-wrap md:flex-nowrap">
              <div className="w-1/2 flex justify-between items-center">
                <p className="text-[#9F9F9F] mt-4">TypeCar</p>
                <p className="mt-4">Sport</p>
              </div>

              <div className="w-1/2 flex justify-between items-center">
                <p className="text-[#9F9F9F] mt-4">Capacity</p>
                <p className="mt-4">2Person</p>
              </div>
            </div>

            <div className="w-full gap-2 flex items-center flex-wrap md:flex-nowrap">
              <div className="w-1/2 flex justify-between items-center">
                <p className="text-[#9F9F9F] mt-4">Steering</p>
                <p className="mt-4">Manual</p>
              </div>

              <div className="w-1/2 flex justify-between items-center">
                <p className="text-[#9F9F9F] mt-4">Gasoline </p>
                <p className="mt-4">70L</p>
              </div>
            </div>

            <div className="w-full flex items-center flex-wrap md:flex-nowrap justify-between mt-6">
              <div className="w-1/2 ">
                <p className="leading-[20.16px] text-base font-bold text-[#90A3BF]">
                  <span className="leading-[40.32px] text-[32px] font-bold text-black">
                    $80.00/</span>days <span className="line-through">$100.00
                      </span></p>
              </div>
            

            <div className="w-1/2 flex justify-end">
            <Link href="billing" className="border bg-[#3563E9] text-white p-4 rounded-lg">
            <button>Rent Now</button></Link>
            </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <div className="w-1/4 bg-white border-r-2"></div>
        <div className="w-full md:w-3/4 p-4">
          <div className="w-full bg-white mb-10 mt-0 md:mt-[-24px]">
            <div className="flex items-center">
              <h1 className="leading-[25.2px] font-semibold text-xl px-8 pt-4">Reviews</h1>
              <p className="w-10 h-6 bg-[#3563E9] text-white text-center mt-3">13</p>
            </div>
        <div className="w-full p-4 flex gap-4">
          <div>
            <Image src={"/images/re1.svg"} alt="" width={40} height={40} className="rounded"/>
          </div>
          <div className="w-full">
            <h4 className="font-bold text-xl leading-[30px]">Alex Stanton</h4>
            <div className="w-full flex justify-between">
              <p className="w-1/2 font-medium text-sm leading-[21px] text-[#90A3BF]">CEO at Bukalapak</p>
              <div className="w-full">
                <p className="flex justify-end">21 July 2022</p>
                <div className="w-full flex justify-end">
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarBorderPurple500 />
                </div>
              </div>
            </div>
                <p className="text-[#596780] leading-[28px] text-sm text-justify">We are very happy with the service from the MORENT App. Morent has a low price and 
                  also a large variety of cars with good and comfortable facilities. In addition, the 
                  service provided by the officers is also very friendly and very polite.</p>
          </div>
        </div>
        <div className="w-full p-4 flex gap-4">
          <div>
            <Image src={"/images/re2.svg"} alt="" width={40} height={40} className="rounded"/>
          </div>
          <div className="w-full">
            <h4 className="font-bold text-xl leading-[30px]">Skylar Dias</h4>
            <div className="w-full flex justify-between">
              <p className="w-1/2 font-medium text-sm leading-[21px] text-[#90A3BF]">CEO at Amazon</p>
              <div className="w-full">
                <p className="flex justify-end">20 July 2022</p>
                <div className="w-full flex justify-end">
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarPurple500 className="fill-amber-400" />
                <MdOutlineStarBorderPurple500 />
                </div>
              </div>
            </div>
                <p className="text-[#596780] leading-[28px] text-sm text-justify">We are very happy with the service from the MORENT App. Morent has a low price and 
                  also a large variety of cars with good and comfortable facilities. In addition, the 
                  service provided by the officers is also very friendly and very polite.</p>
          </div>
        </div>

        </div>
        <div className="w-full">
        
          <Categorycard />
        </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default page;

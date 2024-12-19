import React from 'react'
import { FaSquareCheck } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Image from "next/image"
const sidebar = () => {
  return (
    <>
      <div className='w-full md:w-1/4 border-r-2 bg-white'>
      <div className='px-10 py-6'>
      <h2 className='font-semibold text-xs leading-[25.12px] text-[#90A3BF]'>T Y P E</h2>

      <div className='flex items-center gap-2 mt-4'>
      <FaSquareCheck className='fill-blue-600'/>
      <h5>Sport (10)</h5>
      </div>

      <div className='flex items-center gap-2 mt-4'>
      <FaSquareCheck className='fill-blue-600'/>
      <h5>SUV (12)</h5>
      </div>

      <div className='flex items-center gap-2 mt-4'>
      <MdOutlineCheckBoxOutlineBlank  />
      <h5>MPV (16)</h5>
      </div>

      <div className='flex items-center gap-2 mt-4'>
      <MdOutlineCheckBoxOutlineBlank  />
      <h5>Sedan (20)</h5>
      </div>

      <div className='flex items-center gap-2 mt-4'>
      <MdOutlineCheckBoxOutlineBlank />
      <h5>Coupe (14)</h5>
      </div>

      <div className='flex items-center gap-2 mt-4'>
      <MdOutlineCheckBoxOutlineBlank />
      <h5>Hatchback (14)</h5>
      </div>
      </div>

      <div className='px-10'>
      <h2 className='font-semibold text-xs leading-[25.12px] text-[#90A3BF]'>C A P A C I T Y</h2>

      <div className='flex items-center gap-2 mt-4'>
      <FaSquareCheck className='fill-blue-600'/>
      <h5>2 Person (10)</h5>
      </div>

      <div className='flex items-center gap-2 mt-4'>
      <MdOutlineCheckBoxOutlineBlank />
      <h5>4 Person (14)</h5>
      </div>

      <div className='flex items-center gap-2 mt-4'>
      <MdOutlineCheckBoxOutlineBlank  />
      <h5>6 Person (12)</h5>
      </div>

      <div className='flex items-center gap-2 mt-4'>
      <FaSquareCheck className='fill-blue-600'/>
      <h5>8 Person (16)</h5>
      </div>

      
      </div>

      <div className='px-10 py-6'>
      <h2 className='font-semibold text-xs leading-[25.12px] text-[#90A3BF]'>P R I C E</h2>

      <Image  src={"/images/price range.svg"} alt='price-range' width={100} height={100} className='w-56'/>
      <h5 className='text-[#596780]'>Max. $100.00</h5>
      </div>
        </div>
    </>
  )
}

export default sidebar
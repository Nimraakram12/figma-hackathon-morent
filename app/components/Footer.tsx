import React from 'react'
import Link from "next/link"
const footer = () => {
  return (
    <>
      <div className='w-full flex flex-col flex-wrap md:flex-nowrap md:flex-row border-b-2 bg-white'>
        <div className='w-full md:w-1/4 p-10'>
        <h1 className="text-2xl font-bold text-blue-600">MORENT</h1>
            <p className="text-sm text-gray-600 mt-2 w-[250px]">
              Our vision is to provide convenience and help increase your sales business.
            </p>
        </div>
        <div className='w-full md:w-1/4 p-10 flex justify-center items-center flex-col gap-8'>
        <h2 className='font-semibold text-xl leading-[30px]'>About</h2>
        <Link href="/" className='text-[#13131399] font-medium'>How it works</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Featured</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Partnership</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Business Relations</Link>
        </div>
        <div className='w-full md:w-1/4 p-10 flex justify-center items-center flex-col gap-8'>
        <h2 className='font-semibold text-xl leading-[30px]'>Community</h2>
        <Link href="/" className='text-[#13131399] font-medium'>Events</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Blog</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Podcast</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Invite a friend</Link>
        </div>
        <div className='w-full md:w-1/4 p-10 flex justify-center items-center flex-col gap-8'>
        <h2 className='font-semibold text-xl leading-[30px]'>Social</h2>
        <Link href="/" className='text-[#13131399] font-medium'>Discord</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Instagram</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Twitter</Link>
        <Link href="/" className='text-[#13131399] font-medium'>Facebook</Link>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between itmes-center p-4 md:p-10">
        <h2>©2022 MORENT. All rights reserved</h2>
        <div>
            <Link href="/" className='mr-4 md:mr-10'>Privacy & Policy</Link>
            <Link href="/">Terms & Condition</Link>
        </div>
      </div>
    </>
  )
}

export default footer
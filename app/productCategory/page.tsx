import React from 'react'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Categorycard from '../components/CategoryCard'
import Footer from "../components/Footer"
const ProductCategory = () => {
  return (
    <>
<Header />
    <div className='w-full flex flex-col md:flex-row'>
        
<Sidebar />
<div className='w-full md:w-3/4'>
      <Categorycard /></div>
    </div>


    <Footer />
    </>
  )
}

export default ProductCategory;
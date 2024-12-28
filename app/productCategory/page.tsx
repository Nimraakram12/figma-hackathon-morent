import React from "react";
import Form from  "../components/Bookingform"
import Sidebar from "../components/Sidebar";
import Categorycard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
          <Sidebar />
        <div className="w-full md:w-3/4">
        <Form />
          <Categorycard />
          <div className="w-full flex justify-center items-center mt-6">
            <Link
              href="productcategory"
              className="border bg-[#3563E9] text-white p-4 rounded-lg"
            >
              <button>Show More Cars</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;

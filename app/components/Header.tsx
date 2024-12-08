import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="border-b border-gray-300 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 lg:px-6 lg:py-4 lg:h-[141px] h-[288px] lg:w-[1440px] w-[375px] mx-auto">

        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
            <span className="text-sm font-semibold">
              <Image
                src="/images/logo.svg"
                alt="logo"
                height={24}
                width={24}
                className="lg:h-[24px] lg:w-[24px] h-[18px] w-[18px]"
              />
            </span>
          </div>
          <h1 className="text-sm lg:text-lg font-semibold text-gray-800 text-center">
            High Fidelity Dashboard - Home Rent
          </h1>
        </div>

        
        <div className="text-xs lg:text-sm text-gray-500 text-center">
          Last Updated:{" "}
          <span className="font-medium text-gray-800">8 Aug 2022</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

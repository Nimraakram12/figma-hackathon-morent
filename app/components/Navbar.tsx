import { FaSearch, FaBell, FaCog, FaHeart } from "react-icons/fa";
import Image from "next/image";

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[141px] lg:w-[1440px] w-[375px] h-[288px] mx-auto px-4 py-4 lg:px-6 lg:py-0">
    
        <div className="text-2xl font-bold text-blue-600 mb-4 lg:mb-0">
          MORENT
        </div>

  
        <div className="relative flex items-center w-full lg:w-1/2 mb-4 lg:mb-0">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 px-4 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="absolute right-3 text-gray-500">
            <FaSearch />
          </button>
        </div>

        
        <div className="flex items-center space-x-4">
          <button className="relative text-gray-600 hover:text-blue-600">
            <FaHeart size={20} />
          </button>
          <button className="relative text-gray-600 hover:text-blue-600">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <FaCog size={20} />
          </button>
          <Image
            src="/images/profile.svg"
            alt="Profile"
            height={44}
            width={44}
            className="rounded-full border border-gray-300"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

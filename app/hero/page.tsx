import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="container mx-auto px-4  mt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div
            className="bg-blue-500 p-6 rounded-lg shadow-md"
            
          >
            <h2 className="text-3xl w-[272px] font-bold text-[#FFFFFF]  mb-2">
              The Best Platform for Car Rental
            </h2> <br />
            <p className="text-white mb-6 w-[284px]">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <img
              src="/images/hero-1.svg" 
              alt="Car"
              className="mt-4 w-[340px] h-[108px] ml-40 object-cover"
            />
          </div>


          <div
            className="bg-blue-700 p-6 rounded-lg shadow-md"
            
          >
            <h2 className="text-3xl font-bold text-[#FFFFFF] w-[272px] mb-2">
              Easy way to rent a car at a low price
            </h2> <br />
            <p className="text-white mb-6 w-[284px]">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <img
              src="/images/hero-2.svg" 
              alt="Car"
              className="mt-4 w-[340px] h-[108px] ml-40 object-cover"
            />
          </div>
        </div>

    
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
    
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
                
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>

    
          <div>
            <button className="bg-blue-500 text-white  p-4 rounded-full shadow-md hover:bg-blue-600">
              ↔
            </button>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
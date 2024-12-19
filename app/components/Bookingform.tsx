import React from 'react'

const Bookingform = () => {
  return (
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
  )
}

export default Bookingform
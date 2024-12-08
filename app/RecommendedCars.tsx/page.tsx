

import Image from "next/image";
import { FaGasPump, FaCogs, FaUserFriends } from "react-icons/fa"; 

 function RecommendedCars() {
  const cars = [
    {
      name: "All New Rush",
      type: "SUV",
      image: "/images/R1.svg",
      price: "$72.00/day",
      specs: { fuel: "70L", transmission: "Manual", passengers: "6 People" },
    },
    {
      name: "CR-V",
      type: "SUV",
      image: "/images/R2.svg",
      price: "$80.00/day",
     
      specs: { fuel: "80L", transmission: "Manual", passengers: "6 People" },
    },
    {
      name: "All New Terios",
      type: "SUV",
      image: "/images/R3.svg",
      price: "$74.00/day",
      specs: { fuel: "90L", transmission: "Manual", passengers: "6 People" },
    },
    {
        name: "CR-V",
        type: "SUV",
        image: "/images/R4.svg",
        price: "$80.00/day",
       
        specs: { fuel: "80L", transmission: "Manual", passengers: "6 People" },
      },
    {
        name: "MGZXExclusive",
        type: "Hachback",
        image: "/images/R5.svg",
        price: "$76.00/day",
        specs: { fuel: "70L", transmission: "Manual", passengers: "4 People" },
      },
      {
        name: "NewMGZS",
        type: "SUV",
        image: "/images/R6.svg",
        price: "$80.00/day",
        specs: { fuel: "80L", transmission: "Manual", passengers: "6 People" },
      },
      {
        name: "MGZXExclusive",
        type: "Hachback",
        image: "/images/R7.svg",
        price: "$76.00/day",
        specs: { fuel: "70L", transmission: "Manual", passengers: "4 People" },
      },
      {
        name: "NewMGZS",
        type: "SUV",
        image: "/images/R8.svg",
        price: "$80.00/day",
        specs: { fuel: "80L", transmission: "Manual", passengers: "6 People" },
      },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-400">Recommended Cars</h2>
          <button className="text-blue-500 hover:underline">View All</button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold text-start">{car.name}</h2>
                <p className="text-gray-500 text-sm">{car.type}</p>
                <Image
                  src={car.image}
                  alt={car.name}
                  width={224}
                  height={100}
                  className="w-full object-cover"
                />
                <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                  
                  <span className="flex items-center space-x-1">
                    <FaGasPump className="text-gray-400" />
                    <span>{car.specs.fuel}</span>
                  </span>
            
                  <span className="flex items-center space-x-1">
                    <FaCogs className="text-gray-400" />
                    <span>{car.specs.transmission}</span>
                  </span>
        
                  <span className="flex items-center space-x-1">
                    <FaUserFriends className="text-gray-400" />
                    <span>{car.specs.passengers}</span>
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-4">
                  
                    <span className="text-blue-500 font-bold">{car.price}</span>
                
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Show more cars
          </button>
        </div>
      </div>
    </section>
  );
}

export default RecommendedCars;


import Image from "next/image";
import { FaGasPump, FaCogs, FaUserFriends } from "react-icons/fa"; 

function PopularCars() {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      image: "/images/p1.svg",
      price: "$99.00/day",
      specs: { fuel: "90L", transmission: "Manual", passengers: "2 People" },
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      image: "/images/p2.svg",
      price: "$80.00/day",
      discountPrice: "$100.00",
      specs: { fuel: "80L", transmission: "Manual", passengers: "2 People" },
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/images/p3.svg",
      price: "$96.00/day",
      specs: { fuel: "70L", transmission: "Manual", passengers: "4 People" },
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      image: "/images/p4.svg",
      price: "$80.00/day",
      discountPrice: "$100.00",
      specs: { fuel: "80L", transmission: "Manual", passengers: "2 People" },
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-400">Popular Cars</h2>
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
                  width={232}
                  height={72}
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
                  {car.discountPrice ? (
                    <div>
                      <span className="text-gray-400 line-through mr-2">
                        {car.discountPrice}
                      </span>
                      <span className="text-blue-500 font-bold">{car.price}</span>
                    </div>
                  ) : (
                    <span className="text-blue-500 font-bold">{car.price}</span>
                  )}
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

export default PopularCars;





import Card from "./PopularCars.tsx/page";
import RecommendedCars from "./RecommendedCars.tsx/page";
import Hero from "./hero/page";


      

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
     
     <Hero/>
     <Card/>
     <RecommendedCars/>
      
      
           
          
           
        
    </div>
  );
}
  
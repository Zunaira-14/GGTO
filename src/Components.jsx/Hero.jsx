import { Search } from "lucide-react";
import CenterSection from "./CenterSection";
import Stay from "./Stay";
import Package from "./Package";
import Value from "./Value";
import Blogs from "./Blogs";
function Hero() {
// const Cards=[
//   {  image:"/skardu1.svg", name:"Skardu" },
//           { image:"/naran.svg"},
//           { image:"/Babosar.svg" },
//           { image:"/skardu2.svg" }
//  ]

// const  Card =[
//    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
//         {<PlaceCard image="/skardu1.svg" name="Skardu" />}
//          {<PlaceCard image="/naran.svg" name="Naran" />}
//           {<PlaceCard image="/Babosar.svg" name="Babosar Top" />}
//           {<PlaceCard image="/skardu2.svg" name="Skardu" />}
//         </div>
//         ]
  return (
    <div>
      {/* Background image with search bar */}
      <div
        className="h-[400px] bg-cover bg-center     justify-center"
        style={{ backgroundImage: "url('image.png')" }}
      >
        <h1 className="text-white text-3xl font-bold text-center ">
          Explore the beautiful Pakistan <br /> and enjoy its beauty
        </h1>
        <br />
        {/* Search Bar */}
        <div className=" bg-white rounded-full w-3/4   max-w-xl shadow-md px-4 py-2 flex items-center  ml-80 cursor-pointer hover:text-amber-500">
          <Search className="text-black mr-2 cursor-pointer  hover:text-amber-500" />
        <input type="text" placeholder="Search"/>
          
        </div>
      </div>
      {/* Booking Tabs */}
      <div className="bg-white shadow-md p-6 mt-[-60px] rounded-xl max-w-5xl mx-auto">
        <div className="bg-blue-300   p-6 space-x-4  text-sm font-medium border-b pb-2  shadow-emerald-300  rounded-xl ">
          {/* <button className="text-blue-700 border-b-2 border-blue-700 pb-1">Flight Booking</button> */}
          <button className="text-amber-50 border-b-2 pb-1 ">
            Flight Booking
          </button>
          <button>Hotel Booking</button>
          <button>Vehicle Booking</button>
          <button>Package Trip Booking</button>
          <button>Package Calculator</button>
        </div>
        <div>
          <div className="px-4 br-2 rounded-2xl">Leaving Form</div>
          <div>Going TO</div>
          <div>Dates</div>
          <div>Travels</div>
        </div>
        {/* Favourite Places */}
        <h2 className="text-xl font-bold px-4 mt-4">
          Discover your new favourite places
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {/* <div className='grid md:grid-cols-4 p-4 gap-4 '> */}
          <PlaceCard image="/skardu1.svg" name="Skardu" />
          <PlaceCard image="/naran.svg" name="Naran" />
          <PlaceCard image="/Babosar.svg" name="Babosar Top" />
          <PlaceCard image="/skardu2.svg" name="Skardu" />
        </div>
        <span>Recent Search</span>
        <h2 className="text-xl font-bold px-4 mt-4">Your recent search</h2>
        <div className="pt-4">
          <div className="border p-2 rounded bg-blue-500">
            <p className="font-semibold">Stays in Kumurat Valley Hotel</p>
            <p className="text-sm">Stays in Kumurat Valley Hotel</p>
          </div>
        </div>
         <CenterSection/>
         <Stay/>
         <Package/>
         <Value/>
         <Blogs/>
          <div>
      <h2>Hero Section</h2>
      {/* <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">
        Send to Services
      </button> */}
    </div>
      </div>
    </div>
  );
}
function PlaceCard({ image, name }) {
  return (
    <div className="bg-white shadow rounded-lg p-2 text-center">
      <img src={image} alt={name} className="rounded object-cover" />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">
        4.6 ★ (528) <br /> Tourist attraction
        
      </p>
    </div>
  );
}
export default Hero;

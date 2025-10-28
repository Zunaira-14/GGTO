import {  HeartIcon, Search,  ShoppingCart, Star } from 'lucide-react'
// import { CardContext } from './Context'

function Services() {
 
  //  const  Card =[
  //  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
  //       {<PlaceCard image="/skardu1.svg" name="Skardu" />}
  //        {<PlaceCard image="/naran.svg" name="Naran" />}
  //         {<PlaceCard image="/Babosar.svg" name="Babosar Top" />}
  //         {<PlaceCard image="/skardu2.svg" name="Skardu" />}
  //       </div>
  //       ]
  return (
    <div>
    <div className=' bg-emerald-800 mr-10 ml-10'>
      <div className='ml-6 mt-10 flex items-center gap-2 '>
      <img src='a1.svg' alt='' className='h-7 w-7'/>
      <span className=' text-3xl font-bold pl-2 '>Pindeast</span>
    
      <ul className='space-x-10 ml-20   text-2xl'>
        <er>Home</er>
        <er> Real Estate </er>
        <er> Gifts</er>
      </ul>
      
  <div className='pl-37 '>
    < div className='flex   rounded-full bg-blue-50 fill-white drop-shadow-xl/50 ... pr-40 space-x-1 p-3 '>
    <Search className='flex justify-items-start  ml-3 w-4 h-4 mt-1'/>
    <input type="text"
    placeholder='Search.....'
  className=''
    />
      </div>
      </div>
      <div className=' bg-orange-500 rounded-full p-4  ml-20  '>
        <HeartIcon className='text-amber-50'/>
      </div>

       <div className='ml-5   bg-orange-500 rounded-full p-4 '>
        <ShoppingCart className=' text-amber-50' />
      </div>
      <div className='ml-10 mr-3'>
        <img src='grl.svg'/>
      </div>
         </div>
   </div>
   <hr className='mt-4 mb-5'/>
   <div className='h-[400px] bg-cover bg-center justify-center'
   style={{ backgroundImage: "url('a2.svg')" }}
   >
    <div className='pl-15 pt-40'>
   <p className='text-orange-500 text-4xl font-bold'>Featured Restaurants</p>
   <p className='text-amber-50 underline underline-offset-7'>Discover the most loved places to eat in your city.</p>
   </div>
   </div>
   <div>
<h1 className='bg-orange-400 h-[789px] w-[343px] top-[773px] mr-[-900px] ml-[94px] mt-10 rounded-4xl text-4xl font-bold
 '><span className='text-amber-50 pl-30  '>Filter</span></h1>
<h1 className='w-[-130px] h-[-35px] top-[-814px] left-[-123px] '>Filter</h1>
</div>

{/* <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Services Page</h1>
      {placeCardGrid ? placeCardGrid : <p>No data received.</p>}
    </div> */}

{/* {
  CardContext.map((CardContext,index) => (
      <div className='border-[1px solid gray] p-2   m-[10px] ml-96 mr-[1000px]
       bg-amber-600  space-x-3 
       '>
      <img src={Card.image} className='w-[200px]'/>
      <h3>{item.name}</h3>
      <p><Star className='h-4 w-4'/> {Card.name}</p>
    </div> 
  ))} */}
  
  
  
</div>
   
 )
}

// function PlaceCard({ image, name }) {
//   return (
//     <div className="bg-white shadow rounded-lg p-2 text-center">
//       <img src={image} alt={name} className="rounded object-cover" />
//       <h3 className="mt-2 font-semibold">{name}</h3>
//       <p className="text-sm text-gray-500">
//         4.6 ★ (528) <br /> Tourist attraction
        
//       </p>
//     </div>
//   );
// }
export default Services

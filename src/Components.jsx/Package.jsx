

import { Clock10Icon, } from 'lucide-react'
import React from 'react'

function Package() {
  return (
  
    <div className='  flex flex-1/4 justify-between  '> 
    <div className=' pr-96 '>
    <div className=' pr-50'>
      <PlaceCard   className="" image="/bas.svg"/>
      <div className='   parent pr-20   pt-3 '>
      <h1 className=  'absolute  font-bold w-3xs '>Honemoon on Heaven on Earth Nealum Vally<br/><Clock10Icon ></Clock10Icon>4Days</h1>
      <PlaceCard   className="grid justify-items-stretch" image="/2pic.svg" />
          
</div>
<div className=' parent pr-20 pt-3'>
  <h1 className=' absolute w-3xs font-bold '>4 Days to night tour to kashmir heaven<Clock10Icon></Clock10Icon>4Days</h1>
      <PlaceCard className="" image="/3pic.svg"/>
      </div>
      <div className=' parent pr-20 pt-3'>
        <h1 className=' absolute font-bold  '>HoneyMoon Tour to naran Kagan<Clock10Icon></Clock10Icon>4Days</h1>
      <PlaceCard className="" image="/4pic.svg"/> 
      </div>
    <div className=' parent pr-20 pt-3'>
        <h1 className='  absolute   font-bold w-3xs'>4 Days 3 Night By Bus Hanza Tour Pacakage<Clock10Icon></Clock10Icon>4Days|Rs:6500</h1>
     <PlaceCard className="" image="/5pic.svg"/>
      </div>
    </div>
   </div>
    </div>
   )
} 
function PlaceCard({ image,name}){
  return (
    <div className="bg-white shadow rounded-lg p-2 text-center">
      <img src={image} alt={name} className="rounded object-cover" />
      <h3 className="mt-2 font-semibold">{name}</h3>
    </div>
  )
  }

export default Package

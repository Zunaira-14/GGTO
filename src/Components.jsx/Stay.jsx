import { HeartIcon,  } from 'lucide-react'
import React from 'react'

function Stay() {
  return (
    <div>
        <div>
       <h1  className='text-black text-3xl mt-2  px-4'>Explor stays in popular destination </h1>

    </div>
    <div className=' h-[400px]  bg-cover  bg-center  rounded-4xl  py-4 text-start '>
    <PlaceCard image="/hotel.svg" name=""/>
    <h1 className='text-2xl font-bold'>Top Honeymoon Pacages</h1> <HeartIcon className=' text-red-950 '/>
    </div>
    </div>
  )
}
function PlaceCard({ image, name }) {
  return (
    <div className="bg-white shadow rounded-lg p-2 text-center">
      <img src={image} alt={name} className="rounded object-cover" />
      <h3 className="mt-2 font-semibold">{name}</h3>
    </div>
  )}
export default Stay




import React from 'react'

function Value() {
  return (
<div className='bg-blue-950 rounded-4xl  grid grid-cols-1   md:grid-cols-4   '>
 <h1 className='text-amber-50  py-10 px-10 text-4xl rounded-t-xl'>Our Top Values<br/> For You</h1> 
    <p className='text-white px-10 py-10'>try variety of benifits while using our services </p>

<div className='grid grid-cols-1   gap-6  '>
        <div className='grid grid-cols-1'>
        <PlaceCard 
          image="/dol.svg" 
          name="No Booking Fees" 
          description="There are no booking fees or hidden charges."
        />
        </div>
        <div className=''>
        <PlaceCard 
          image="/price.svg" 
          name="Huge Saving" 
          description="We facilitate hotel bookings nationwide, ensuring your comfort and budget."
        />
        </div>
        <div className=''>
        <PlaceCard 
          image="/pay.svg" 
          name="Secure Payments" 
          description="Your payment information is always protected with us."
        />
        </div>
      </div>
      </div>
  )
}
function PlaceCard({ image, name,description }){
  return (
    <div className="bg-white shadow rounded-lg p-2 text-center">
      <img src={image} alt={name} className="rounded object-cover" />
      <h3 className="mt-2 font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  )
  }

export default Value

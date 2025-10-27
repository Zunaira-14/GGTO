import React from 'react'

function CenterSection() {
  return (
   <>
   <div
          className="h-[400px]  bg-cover mt-[50px] bg-center rounded-4xl px-10 py-20 text-start"
          style={{ backgroundImage: "url('pic.svg')" }}
        >

          <div className=" flex flex-col gap-2">

          <h1 className="text-3xl font-bold text-amber-100 ">
            Last minute weakened deals
          </h1>

          <div className='flex gap-2'>
            <PlaceCard image="/IMG.svg" name="Naran Kagan" />
            <PlaceCard image="/ppp.svg" name="Shogran Kashmir" />
            <PlaceCard image="/Babosar.svg" name=" Babosar Top" />
            <PlaceCard image="/SS.svg" name="Naran Kagan" />
        
            </div>
 </div>
        </div>
   </>
  )
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

export default CenterSection

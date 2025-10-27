
import React from 'react'

function Blogs() {
  return (
    <div className=''>
      <h1 className='text-4xl pt-10 font-bold '>Blog About travelling</h1>
      <div className='justify-items-center-safe  '>
      <p className='flex py-10  pl-96'>We are thriled to present the design of your <br/>new landing page for an App that allows</p>
      <button className='border-2 rounded-2xl     px-5 py-5  justify-items-center-safe '>Read all Blogs</button>
    
   <PlaceCard image="/For.svg" />
   <PlaceCard image="/forr.svg"/>
   
   <PlaceCard  className="parent "image="/river.svg"/>
   </div>
   <div className=' p-6 text-sm '>
   <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 '>
   <div className=' mr-3'>
   <PlaceCard   className="h-12 mb-2" image="/logo.svg"/>
   <h1 className='w-3xs mt-6 '>A trustful tour booking website for individual and couple</h1>
   </div>
   <div>
   <a href='#' className='font-bold mb-1'>About us</a>
<p>Our Products</p>
 <p>Blog Articles</p>
   <p> Contact us</p>
</div>
<div>
   <a href='#'className='font-bold mb-1'>FAQs</a>
  <p>Our Products</p>
 <p>Blog Articles</p>
   <p> Contact us</p>
   </div>
   <div>
   <a href='#' className='font-bold mb-1 '>Further Assistance</a>
  <p>Our Products</p>
 <p>Blog Articles</p>
   <p> Contact us</p>
   </div>
   </div>
</div>
<hr/>
   <h1 className=''>copyright(2024) inc and blash balah</h1>
<div className='justify-self-center-safe pl-96 '>
  
  <h1></h1>
<div className='space-x-5 b-t'>
<i  class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-square-instagram"></i>
<i class="fa-brands fa-square-twitter"></i>
</div>
</div>
<hr/>
    </div>
  
  )
}
function PlaceCard({ image, name }){
  return (
    <div className="bg-white shadow rounded-lg p-2 text-center">
      <img src={image} alt={name} className="rounded object-cover" />
      <h3 className="mt-2 font-semibold">{name}</h3>
    </div>
  )}

export default Blogs

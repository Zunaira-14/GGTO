import { Download, Globe,  LogIn, MessageSquare  } from 'lucide-react'
import React from 'react'
import { Link,} from 'react-router-dom'


function NavBar() {
  return (
    <div>
    <nav className='flex justify-between text-amber-950  items-center   bg-blue-100 px-6 py-4  '>
      <div>
        <img src='logo.svg' alt='logo' className='h-10 w-auto'/>
      </div>
      <div>
        <button className='flex text-cyan-900  border border-amber-900  rounded-full hover:bg-emerald-300 text-sm  px-4 py-2'>
          <Download className='h-4 w-4'/>
          {/* <Download/> */}
          Get The App
        </button>
      </div>
      <div className='flex items-center space-x-6 cursor-pointer font-medium '>
        <div className=' flex items-center  hover:text-fuchsia-600'>
          <Globe className='h-4 w-4 text-blue-500' />
          <span>English</span>
        </div>
        <ul className='flex justify-between space-x-10 '>
          <Link to='/' className='hover:text-fuchsia-600 '>Home</Link>
          <Link to='/about-us' className='hover:text-fuchsia-600 '>About us</Link>
          <Link to='/services' className='hover:text-fuchsia-600 '>Services</Link>
          <Link to="/contact" className="hover:text-fuchsia-600">Contact</Link>
        <MessageSquare className='hover:text-fuchsia-600'/>
         </ul>
        
      </div>
      <div>
        <button className='flex items-center  bg-blue-500 rounded-full px-4 py-1 font-bold  text-white hover:bg-emerald-500' >
          <LogIn className='h-4 w-4  ' />Login|Register
        </button>
      </div>
    </nav>
    </div>
  )
}

export default NavBar

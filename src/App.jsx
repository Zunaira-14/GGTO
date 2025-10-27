
import './App.css'
// import Hero from './Components.jsx/Hero'
// import NavBar from './Components.jsx/NavBar'
import Services from './Components.jsx/Services'
import { Route, Routes } from 'react-router-dom'
import Home from './Components.jsx/Home'
import AboutUS from './Components.jsx/AboutUS'
import Contact from './Components.jsx/Contact'
import NavBar from './Components.jsx/NavBar'
// import { CardContext } from "./Components.jsx/Context";
// import PlaceCard from './Components.jsx/PlaceCard'
function App() {
  // const  Card =[
  //  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
  //       {<PlaceCard image="/skardu1.svg" name="Skardu" />}
  //        {<PlaceCard image="/naran.svg" name="Naran" />}
  //         {<PlaceCard image="/Babosar.svg" name="Babosar Top" />}
  //         {<PlaceCard image="/skardu2.svg" name="Skardu" />}
  //       </div>
  //       ]
  return (
     <>
  <NavBar/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact/>}/>
        {/* <CardContext.Provider value={Card}><Services/></CardContext.Provider>  */}
      </Routes>




    



</>
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
export default App

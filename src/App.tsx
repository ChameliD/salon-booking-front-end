import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import { getBookings, getData } from './API'
import Booking from './Booking'
import HeaderComponents from './Components/Header/HeaderComponents'
//import Booking from './Booking'
import HomeComponents from './Components/Home/HomeComponents'



export interface IAppProps {}
const App:React.FC<IAppProps>=()=>{
  return (
    <div>
   <HeaderComponents/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<HomeComponents/>}/>
      <Route path='/booking' element={<Booking/>}/>
      
      

      
    </Routes>
    </BrowserRouter>   
    </div>
    )
}
export default App


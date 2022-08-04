import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Booking from './Booking'
import HeaderComponents from './Components/Header/HeaderComponents'
//import Booking from './Booking'
import HomeComponents from './Components/Home/HomeComponents'
import PaymentComponents from './Components/Payment/PaymentComponents'

export interface IAppProps {}
const App:React.FC<IAppProps>=()=>{
  return (
    <div>
   <HeaderComponents/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<HomeComponents/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/payment' element={<PaymentComponents/>}/>
    </Routes>
    </BrowserRouter>   
    </div>
    )
}
export default App


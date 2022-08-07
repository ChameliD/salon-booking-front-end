import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import { getBookings, getData } from './API'
import Booking from './Booking'
import HeaderComponents from './Components/Header/HeaderComponents'
//import Booking from './Booking'
import HomeComponents from './Components/Home/HomeComponents'
import PaymentNotSuccess from './Components/PaymentNotSuccess'
import PaymentSucess from './Components/PaymentSucess'



export interface IAppProps {}
const App:React.FC<IAppProps>=()=>{
  return (
    <div>
   <div><HeaderComponents/></div>
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<HomeComponents/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/checkout-success' element={<PaymentSucess/>}/>
      <Route path='/checkout-cancel' element={<PaymentNotSuccess/>}/>
      
    </Routes>
    </BrowserRouter> 
    </div>  
    </div>
    )
}
export default App


import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeComponents.css'
import haircut from './Haircut.png'
import Makeup from './Makeup.png'
import hairStyling from './HairStyling.png'

export default function HomeComponents() {
  const nevigate=useNavigate()
  const redirectBooking=()=>{
    nevigate('/booking')
  }
  return (
    <div>
      
      <section className='main-container'>
        <p className='main'>Always make room for<br/> beauty in your life</p>
        <p className='body'>

            At Prauge we are passionate about making people feel good while looking <br/>
            their best. Attending advanced education allows us to keep up with the <br/>
            latest trends and provide each guest with a unique & customizable result.<br/>
            For your convenience, Schedule your reservation today!</p>
      <div className='button'><button type="button" className="btn btn-outline-light btn-lg" onClick={redirectBooking}>Book now</button></div>
      </section>

      <section className='secondary-container'>
      <div className='main-secondery'>Services</div>
      <div><ul className="list-group list-group-horizontal-xl borderless">
      
        <li className="list-group-item border-0">
          <div className='small-container'>
           <img  src={haircut} alt=''/>
           <p className='main-about'>Haircut</p>
           <p className='body-about'>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
           </div>
        </li>

        <li className="list-group-item border-0"> 
          <div className='small-container'>
            <img  src={hairStyling} alt=''/>
            <p className='main-about'>Hair Style</p>
            <p className='body-about'>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
        </li>

        <li className="list-group-item border-0"> 
          <div className='small-container'>
            <img  src={Makeup} alt=''/>
            <p className='main-about'>Makeup</p>
            <p className='body-about'>Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
        </li>
      </ul></div>
      </section>

      <section className='secondary-container'>
        <div className='main-secondery'>About us</div>
        <div className='body-about'>Named “Best Salon” by Main Line Magazine & The Philadelphia Inquirer, Prauge Salon & Style Bar has been committed to “raising the bar ” since opening our doors in 2014. Our mission is simple, give every guest an excellent experience by providing them with a warm, inviting culture & results that surpass expectations.
At Privé we are passionate about making people feel good while looking their best. Attending advanced education allows us to keep up with the latest trends and provide each guest with a unique & customizable result. For your convenience, we are open 7 days a week & offers online booking 24 hours a day.
<br/>Schedule your reservation today!</div>
      </section>

    </div>
  )
}

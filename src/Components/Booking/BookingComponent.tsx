import React, { useState } from 'react'
import { Button, MenuItem, TextField } from "@mui/material"
import Service from "../../Data/Services"
type Props={
    saveBooking:(e: React.FormEvent,formData:IBooking|any)=>void
}

const BookingComponent:React.FC<Props>=({saveBooking})=>{
    const[formData,setFormData]=useState<IBooking|{}>()
    const[service,setService]=useState("")
    const handleChangedate = (event:any) => {

        setService(event.target.value);
        console.log(event.target.value);
    
      };
    const handleForm=(e:any)=>{
        setFormData({
            ...formData,
            [e.currentTarget.id]:e.currentTarget.value,
        })
    }
    return(
        <form className='Form' onSubmit={(e)=>saveBooking(e,formData)}>
            <div>

                <div>
                    <label htmlFor="service">Service</label>
                    <select id="service" onChange={handleForm}>
                        <option id="1" value="service 1">service 1</option>
                        <option id="2" value="service 2">service 2</option>
                        <option id="3" value="service 3">service 3</option>
                        <option id="4" value="service 4">service 4</option>
                    </select> 
                </div>

                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input onChange={handleForm} type='text' id="firstName"/> 
                </div>

                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input onChange={handleForm} type='text' id="lastName"/> 
                </div>

                <div>
                    <label htmlFor='bookingDate'>Booking Date</label>
                    <input onChange={handleForm} type='text' id="bookingDate"/> 
                </div>

                <div>
                    <label htmlFor='bookingTime'>Booking Time</label>
                    <input onChange={handleForm} type='text' id="bookingTime"/> 
                </div>
   
            </div>
            <button disabled={formData===undefined?true: false}>Create Booking</button>
        </form>
    )
}

export default BookingComponent
import React, { useState } from 'react'
import { Stack, TextField } from "@mui/material"
import { useNavigate } from 'react-router-dom'
type Props={
    saveBooking:(e: React.FormEvent,formData:IBooking|any)=>void
    }

const BookingComponent:React.FC<Props>=({saveBooking})=>{
    
    const navigate = useNavigate()
    const[formData,setFormData]=useState<IBooking|{}>()
    const[service,setService]=useState("")
   
    
    const handleServise=(e:any)=>{
        setService (e.target.value)
        console.log(setService)
        
    }
    
    const handleForm=(e:any)=>{
        
        setFormData({
            ...formData,
            [e.currentTarget.id]:e.currentTarget.value,
            
        })
        //getFormData()
    }
    const redirectPayment=()=>{
       
       console.log("success")
        

    }
    return(
        <div>
        <form className='Form' onSubmit={(e)=>{saveBooking(e,formData); handleServise(e)}}>
            <div>

                <div>
                    <label htmlFor="service">Service</label>
                    <select id="service" onChange={(e)=>{handleServise(e);handleForm(e)}}>
                        <option value="100">service 1</option>
                        <option value="250">service 2</option>
                        <option value="65">service 3</option>
                        <option value="45">service 4</option>
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
                    <label htmlFor='email'>E-mail</label>
                    <input onChange={handleForm} type='text' id="email"/> 
                </div>

                <div>
                    <label htmlFor='bookingDate'>Booking Date</label>               
                </div>

                <div>

                <Stack component="form" noValidate spacing={3}>
                    
                <TextField
                    id="bookingDate"
                    label=""
                    type="date"
                    defaultValue="2022-05-24"
                    onChange={handleForm}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
               
                <label htmlFor='bookingTime'>Booking Time</label>
                <TextField
                    id="bookingTime"
                    label=""
                    type="time"
                    defaultValue="07:30" //opening hour
                    onChange={handleForm}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
               
                </Stack>
                </div>
                
   
            </div>
            <button disabled={formData===undefined?true: false}>Create Booking</button>
           
        </form>
        <p>Your totat payment is {service}</p>
        </div>
    )
}

export default BookingComponent
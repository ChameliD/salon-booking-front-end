import React, { useState } from 'react'
import { Button, MenuItem, Stack, TextField } from "@mui/material"
import Service from "../../Data/Services"
//import DatePicker from "react-datepicker"
//import { DatePicker } from '@material-ui/pickers'
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useNavigate } from 'react-router-dom'
type Props={
    saveBooking:(e: React.FormEvent,formData:IBooking|any)=>void
    }

const BookingComponent:React.FC<Props>=({saveBooking})=>{
    const navigate = useNavigate()
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
    const redirectPayment=()=>{
        console.log("...redirectiong")
        navigate('/');
        
    }
    return(
        <form className='Form' onSubmit={(e)=>saveBooking(e,formData)}>
            <div>

                <div>
                    <label htmlFor="service">Service</label>
                    <select id="service" onChange={handleForm}>
                        <option id="1" value="230">service 1</option>
                        <option id="2" value="250">service 2</option>
                        <option id="3" value="65">service 3</option>
                        <option id="4" value="45">service 4</option>
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
           <a href='/payment'>Go to payment</a>
        </form>
    )
}

export default BookingComponent
import React, { useState } from 'react'
import { Stack, TextField } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './TestBookingComponent.css'
import haircut from './Haircut.png'


const baseUrl:string="http://localhost:3001/api"


type Props={
    saveBooking:(e: React.FormEvent,formData:IBooking|any)=>void
    }

const TestBookingComponent:React.FC<Props>=({saveBooking})=>{
    
    
    const[formData,setFormData]=useState<IBooking|{}>()
    const[service,setService]=useState("")
    const[email,setEmail]=useState("")
    const[bookingDate,setBookingDate]=useState("")
    const[bookingTime,setBookingTime]=useState("")

    const [value, setValue] = React.useState<Date | null>(
      new Date('2020-01-01 08:00'),
    )

    const MY_KEY="sk_test_51LTlTVSJfUhhEYU95noKzbt2wRJ2bff87B1OSjY5ViSScF9F0K0dvQ5pPYNZW4hDAX6UJXOmzkRoCtti1tJBWKsC00Qy6xmjx3"
   
    const handleToken=async(token,formData)=>{
       const response=await axios.post(baseUrl+'/create-checkout-session',{token,formData})
    }
    
    const handleServise=(e:any)=>{
        setService (e.target.value)
                
    }

   
    const handleDate=(e:any)=>{
        setService (e.target.value)
                
    }

    const handleEmail=(e:any)=>{
        setEmail(e.target.value)
    }

    const handleForm=(e:any)=>{
        
        setFormData({
            ...formData,
            [e.currentTarget.id]:e.currentTarget.value,
            
        })
        //getFormData()
    }
      const handlePay=(e1:any,e2:any)=>{
        console.log("paymnt checking",e1)
        axios.post(baseUrl+'/stripe/create-checkout-session',{
            e1,
            e2  
            //console.log(e1,e2)       
        })
        .then((res)=>{
            if(res.data.baseUrl){
                window.location.href=res.data.baseUrl;
            }
        })
        .catch((error)=>console.log("error",error))
        
    }

    
    return(
        <div>
            <div><ul className="list-group list-group-horizontal-xl borderless">
            <li className="list-group-item border-0">
          <div className='form-container-1'>
        <form className='Form' onSubmit={(e)=>{saveBooking(e,formData);handlePay(email,service)}}>
            <div>

                <div>
                   <div> <label htmlFor="service">Service</label></div>
                   <div> <select id="service" onChange={(e)=>{handleServise(e);handleForm(e)}} >Service
                        <option value="100"></option>
                        <option value="100">Hair cut</option>
                        <option value="250">Hair Style</option>
                        <option value="65">Makeup</option>
                        
                    </select> </div>
                </div>

                <div>
                    <div><label htmlFor='firstName'>First Name</label></div>
                    <div><input onChange={handleForm} type='text' id="firstName" required/> </div>
                </div>

                <div>
                <div> <label htmlFor='lastName'>Last Name</label></div>
                <div> <input onChange={handleForm} type='text' id="lastName" required/> </div>
                </div>
                <div>
                <div><label htmlFor='email'>E-mail</label></div>
                <div> <input onChange={(e)=>{handleEmail(e);handleForm(e)}} type='email' id="email" required/></div>
                 
                </div>

                <div>
                    <label htmlFor='bookingDate'>Booking Date</label>               
                </div>

                <div>

                <Stack component="form" noValidate spacing={3}>
                    
                <TextField
                    required
                    id="bookingDate"
                    label=""
                    type="date"
                    defaultValue=""
                    onChange={handleForm}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
               
                <label htmlFor='bookingTime'>Booking Time</label>
               
                <LocalizationProvider dateAdapter={AdapterDateFns} onChange={handleForm} id='bookingTime'>
                
                    <TimePicker
                      renderInput={(params) => <TextField {...params} />}
                      value={value}
                      
                      onChange={(newValue) => {setValue(newValue)}}
                      minTime={new Date(0, 0, 0,8)}
                      maxTime={new Date(0, 0, 0, 18, 0)}
                    />
                   
                 
                </LocalizationProvider>
               
                </Stack>
                </div>
                
   
            </div>
            <div><br/>
            <button disabled={formData===undefined?true: false}>Create Booking</button></div>
           
        </form>
        <p>Your totat payment is {service}$</p>

        <div>
        <div> 
            <StripeCheckout 
                stripeKey = {MY_KEY}
                token={()=>handleToken(service,email)}
                email={email}
                amount={Number({service})}
                
    /></div>
    
        </div>
        </div>
        </li>
      
        <li className="list-group-item border-0">
          <div className='form-container-2'>
           <img  src={haircut} alt=''/>
          </div>
        </li>     
      </ul></div>
        </div>
    )
}


export default TestBookingComponent
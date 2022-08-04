import React,{ useEffect, useState } from "react"
import { addBooking, getBookings } from "./API"
import AddBooking from "./Components/Booking/BookingComponent"
import TestBooking from "./Components/TestBooking/TestBookingComponent"

const Booking:React.FC=()=>{
    const[bookings,setBookingns]=useState<IBooking[]>([])

    useEffect(()=>{
        fetchBookings()
    },[])
    const fetchBookings=():void=>{
        getBookings()
        .then((booking)=>setBookingns(bookings))
        .catch((err:Error)=>console.log(err))
    }

    const handleSaveBookings=(e:React.FormEvent, formData:IBooking):void=>{
        e.preventDefault()
        addBooking(formData)
        .then(()=>{
            fetchBookings()
        })
        .catch((err)=>console.log(err))
    }
    return(
        <main className="Booking">
            <h1>Create a Booking</h1>
            <AddBooking saveBooking={handleSaveBookings}/>
            
             </main>
    )

}
export default Booking;
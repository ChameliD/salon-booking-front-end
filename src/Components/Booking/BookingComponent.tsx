import React, { useState } from 'react'

type Props={
    saveBooking:(e: React.FormEvent,formData:IBooking|any)=>void
}

const BookingComponent:React.FC<Props>=({saveBooking})=>{
    const[formData,setFormData]=useState<IBooking|{}>()

    const handleForm=(e:React.FormEvent<HTMLInputElement>):void=>{
        setFormData({
            ...formData,
            [e.currentTarget.id]:e.currentTarget.value,
        })
    }
    return(
        <form className='Form' onSubmit={(e)=>saveBooking(e,formData)}>
            <div>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input onChange={handleForm} type='text' id="firstName"/>
                </div>
            </div>
            <button disabled={formData===undefined?true: false}>Create Booking</button>
        </form>
    )
}

export default BookingComponent
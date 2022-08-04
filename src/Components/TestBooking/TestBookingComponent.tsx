import React, { useState } from 'react'
import { Button, MenuItem, TextField } from "@mui/material"
import Service from "../../Data/Services"
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
  
  interface MyFormValues {
    firstName: string;
    service:string;
  }
type Props={
    saveBooking:(e: React.FormEvent,formData:IBooking|any)=>void
}

const TestBookingComponent:React.FC<Props>=({saveBooking})=>{
    const[formData,setFormData]=useState<IBooking|{}>()
    const[service,setService]=useState("")
   
    const handleForm=(e:React.FormEvent<HTMLInputElement>):void=>{
        setFormData({
            ...formData,
            [e.currentTarget.id]:e.currentTarget.value,
        })
    }
    
    const initialValues: MyFormValues = { firstName: '' ,service:''};
   return (
     <div>
       <h1>My Example</h1>
       <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           //alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }}
       >
         <Form>
           <label htmlFor="firstName">First Name</label>
           <Field id="firstName" name="firstName" placeholder="First Name" />
            <div>
           <label htmlFor="service">Service</label>
                    <select id="service" name="service">
                        <option id="1">service 1</option>
                        <option id="2">service 2</option>
                        <option id="3">service 3</option>
                        <option id="4">service 4</option>
                    </select>
            </div>
           <button type="submit">Submit</button>
         </Form>
       </Formik>
     </div>
   );
}

export default TestBookingComponent
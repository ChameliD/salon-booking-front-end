import axios,{AxiosResponse} from "axios"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
const baseUrl:string="http://localhost:3001/api"

//at that time no need to use get method

export const getBookings=async()=>{
    try{
        const bookings= await axios.get(
            baseUrl+'/booking'
        )
        return bookings.data
    }catch(error){
       // throw new Error(error)
       console.log(error)
    }
}
export const addBooking=async(formData:IBooking)=>{
    try{
        const booking:Omit<IBooking,'_id'>={
            service:formData.service,           
            firstName: formData.firstName,
            lastName:formData.lastName,
            email:formData.email,
            bookingDate:formData.bookingDate,
            bookingTime:formData.bookingTime,
            
        }
        const saveBooking=await axios.post(
            baseUrl+'/booking',booking
        )
        return saveBooking.data
    }catch(error){
        //throw new Error(error)
        console.log(error)

    }

}
import axios,{AxiosResponse} from "axios"

const baseUrl:string="http://localhost:3001/api"

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
            bookingDate:formData.bookingTime,
            bookingTime:formData.bookingDate,
            //description:formData.description,
            //status:'false'
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
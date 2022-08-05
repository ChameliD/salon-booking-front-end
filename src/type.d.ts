interface IBooking{
    _id:string
    service:string
    firstName:string
    lastName:string
    email:string
    bookingDate:Date
    bookingTime:string

}

type BookingProps={
    booking:IBooking
}
type APIDataType={
    
}
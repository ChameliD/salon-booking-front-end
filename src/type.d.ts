interface IBooking{
    _id:string
    service:string
    firstName:string
    lastName:string
    bookingDate:Date
    bookingTime:string

}

type BookingProps={
    booking:IBooking
}
type APIDataType={
    
}
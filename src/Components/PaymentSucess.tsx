import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
export default function PaymentSucess() {
    const handleToken=()=>{

    console.log("hi")
}
  return (
    <div> <StripeCheckout stripeKey = "sk_test_51LTlTVSJfUhhEYU95noKzbt2wRJ2bff87B1OSjY5ViSScF9F0K0dvQ5pPYNZW4hDAX6UJXOmzkRoCtti1tJBWKsC00Qy6xmjx3"
    token={handleToken}
    name="Tesla Roadster"
    billingAddress
    shippingAddress
    /></div>
  )
}

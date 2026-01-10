import OrderSummary from '../../shared/OrderSummary'
import React from 'react'
import CheckoutStepper from "../Checkout/CheckoutStepper"




const CheckoutPage = () => {



  return (
    <div className='mt-[140px] p-4 flex gap-5 w-full flex-col md:flex-row'>

      <div className='w-full'>
        <CheckoutStepper />
      </div>

      <OrderSummary />

    </div>
  )
}

export default CheckoutPage
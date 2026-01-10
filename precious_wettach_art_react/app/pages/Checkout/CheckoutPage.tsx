import OrderSummary from '../../shared/OrderSummary'
import React from 'react'




const CheckoutPage = () => {



  return (
    <div className='mt-[140px] p-4 flex gap-5 w-full flex-col md:flex-row'>

      <div className='w-[120%]'>
        <h2>Checkout page</h2>
      </div>

      <OrderSummary />

    </div>
  )
}

export default CheckoutPage
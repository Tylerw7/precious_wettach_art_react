import { Button } from '@/components/ui/button';
import { currencyFormat, formatAddressString, formatPaymentString } from '../../../lib/util';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import type { Order } from 'Types/order';




const CheckoutSuccess = () => {
    const {state} = useLocation();
    const order = state.data as Order

    if (!order) return <div className='mt-[120px]'>There was a problem accessing the order</div>



    //


  return (
    <div className='p-4 mt-[120px] w-[100vw] flex justify-center items-center'>
        
        <div className='flex flex-col w-[70%] gap-2 mt-[50px]'>
            <h2 className='text-[2.5rem] font-bold'>Thanks for your order!</h2>

            <div className='p-4 flex flex-col gap-2 shadow-lg'>

                <div className='flex justify-between'>
                    <h3>Date</h3>
                    <h4>{order.orderDate}</h4>
                </div>

                <div className='flex justify-between'>
                    <h3>Payment Method</h3>
                    <h4>{formatPaymentString(order.paymentSummary)}</h4>
                </div>

                <div className='flex justify-between'>
                    <h3>Shipping Address</h3>
                    <h4>{formatAddressString(order.shippingAddress)}</h4>
                </div>

                <div className='flex justify-between'>
                    <h3>Amount</h3>
                    <h4>{currencyFormat(order.total)}</h4>
                </div>

            </div>

            <div className='flex gap-2'>
                    <Link to={`/orders/${order.id}`}><Button className='hover:cursor-pointer'>View Your Order</Button></Link>
                    <Link to='/gallery'><Button variant="outline" className='hover:cursor-pointer'>Continue Shopping</Button></Link>
            </div>

        </div>

    </div>
  )
}

export default CheckoutSuccess
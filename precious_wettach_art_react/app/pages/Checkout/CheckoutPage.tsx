import OrderSummary from '../../shared/OrderSummary'
import React, { useEffect, useMemo, useRef } from 'react'
import CheckoutStepper from "../Checkout/CheckoutStepper"
import { Elements } from "@stripe/react-stripe-js"
import { useFetchBasketQuery } from '../Basket/basketApi';
import { loadStripe, type StripeElementsOptions } from '@stripe/stripe-js';
import { useCreatePaymentIntentMutation } from './checkoutApi';



const stripPromise = loadStripe(import.meta.env.VITE_STRIPE_PK);


const CheckoutPage = () => {
  const {data: basket} = useFetchBasketQuery();
  const [createPaymentIntent, {isLoading}] = useCreatePaymentIntentMutation();
  const created = useRef(false);



  useEffect(() => {
    if (!created.current) createPaymentIntent();
    created.current = true;
  },[createPaymentIntent])


  const clientSecret = basket?.clientSecret;

  const options: StripeElementsOptions | undefined = useMemo(() => {
    if (!clientSecret) return undefined;
    return { clientSecret };
  }, [clientSecret]);


  // const options: StripeElementsOptions | undefined = useMemo(() => {
  //   if (!basket?.clientSecret) return undefined;
  //   return {
  //     clientSecret: basket.clientSecret
  //   }
  // },[basket.clientSecret])



  return (
    <div className='mt-[140px] p-4 flex gap-5 w-full flex-col md:flex-row'>

      <div className='w-full'>
        {!stripPromise || !options || isLoading ? (
          <h3>Loading Checkout...</h3>
        ) : (
          <Elements stripe={stripPromise} options={options}>
        <CheckoutStepper />
        </Elements>
        )}
      </div>

      <OrderSummary />

    </div>
  )
}

export default CheckoutPage
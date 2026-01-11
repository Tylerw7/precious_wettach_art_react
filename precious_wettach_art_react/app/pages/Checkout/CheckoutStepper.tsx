import { Button } from '@/components/ui/button';
import { AddressElement, PaymentElement, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import {Step, Stepper} from "react-form-stepper"
import Review from '../Checkout/Review'
import { useFetchAddressQuery, useUpdateUserAddressMutation } from '../../features/account/accountApi';
import type { Address } from 'Types/user';
import type { StripeAddressElementChangeEvent, StripePaymentElementChangeEvent } from '@stripe/stripe-js';
import { useBasket } from '../../../lib/hooks/useBasket';
import { currencyFormat } from '../../../lib/util';



const steps = ["Address", "Payment", "Review"]



const CheckoutStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const {data: {name, ...restAddress} = {} as Address, isLoading} = useFetchAddressQuery();
    const [updateAddress] = useUpdateUserAddressMutation();
    const [saveAddressChecked, setSaveAddressChecked] = useState(false);
    const elements = useElements();
    const [addressComplete, setAddressComplete] = useState(false);
    const [paymentComplete, setPaymentComplete] = useState(false);
    const {total} = useBasket();




    const handleNext = async () => {
        if (activeStep === 0 && saveAddressChecked && elements) {
            const address = await getStripeAddress();
            if (address) await updateAddress(address);
        }
        setActiveStep(step => step + 1);
    }

    const handleBack = () => {
        setActiveStep(step => step - 1);
    }


    const handleAddressChange = (event: StripeAddressElementChangeEvent) => {
        setAddressComplete(event.complete)
    }

    const handlePaymentChange = (event: StripePaymentElementChangeEvent) => {
        setPaymentComplete(event.complete)
    }


    const getStripeAddress = async () => {
        const addressElement = elements?.getElement('address');
        if (!addressElement) return null;

        const {value: {name, address}} = await addressElement.getValue();

        if (name && address) return {...address, name};

        return null;
    }

    if (isLoading) return <div className='p-4'><h3>Loading checkout...</h3></div>




  return (
    <div className='p-4 shadow-lg rounded-md'>
       <Stepper
            activeStep={activeStep}
            styleConfig={{
                activeBgColor: "#2563eb",
                activeTextColor: "#ffffff",
                completedBgColor: "#1e40af",
                completedTextColor: "#ffffff",
                inactiveBgColor: "#e5e7eb",
                inactiveTextColor: "#374151",
                size: "2em",
                circleFontSize: "1rem",
                labelFontSize: "0.875rem",
                borderRadius: "50%",
                fontWeight: 500,
            }}
            connectorStyleConfig={{
                activeColor: "#2563eb",
                completedColor: "#1e40af",
                disabledColor: "#d1d5db",

                // 👇 required by ConnectorStyleProps
                size: 1,
                style: "solid",
            }}
            >
            {steps.map((label, index) => (
                <Step key={index} label={label} />
            ))}
        </Stepper>


        <div className='mt-2'>

            <div className={activeStep === 0 ? "block" : "hidden"}>
                <AddressElement 
                    options={{
                        mode: 'shipping',
                        defaultValues: {
                            name: name,
                            address: restAddress
                        }
                    }}
                    onChange={handleAddressChange}
                />
                <div className='flex justify-end p-4 gap-2'>
                    <input 
                        type='checkbox' 
                        checked={saveAddressChecked} 
                        onChange={e => setSaveAddressChecked(e.target.checked)}
                        />
                    <p>Save as default address</p>
                </div>
                
            </div>

            <div className={activeStep === 1 ? "block" : "hidden"}>
                <PaymentElement  onChange={handlePaymentChange}/>
            </div>

            <div className={activeStep === 2 ? "block" : "hidden"}>
                <Review />
            </div>

        </div>

        
        

        <div className='flex p-2 justify-between mt-5'>
            <Button onClick={handleBack}>Back</Button>
            <Button 
                onClick={handleNext}
                disabled={
                    (activeStep === 0 && !addressComplete) ||
                    (activeStep === 1 && !paymentComplete)
                }
                >{activeStep === steps.length - 1 ? `Pay ${currencyFormat(total)}` : 'Next'}</Button>
        </div>

    </div>
  )
}

export default CheckoutStepper
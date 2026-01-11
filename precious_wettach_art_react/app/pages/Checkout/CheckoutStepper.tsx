import { Button } from '@/components/ui/button';
import { AddressElement, PaymentElement } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import {Step, Stepper} from "react-form-stepper"
import Review from '../Checkout/Review'



const steps = ["Address", "Payment", "Review"]



const CheckoutStepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(step => step + 1);
    }

    const handleBack = () => {
        setActiveStep(step => step - 1);
    }




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
                        mode: 'shipping'
                    }}
                />
                
            </div>

            <div className={activeStep === 1 ? "block" : "hidden"}>
                <PaymentElement />
            </div>

            <div className={activeStep === 2 ? "block" : "hidden"}>
                <Review />
            </div>

        </div>

        <div className='flex p-2 justify-between mt-5'>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
        </div>

    </div>
  )
}

export default CheckoutStepper
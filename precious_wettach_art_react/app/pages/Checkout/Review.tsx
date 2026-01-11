import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { ConfirmationToken } from '@stripe/stripe-js';
import { useBasket } from '../../../lib/hooks/useBasket';


type Props = {
    confirmationToken: ConfirmationToken | null
}



const Review = ({confirmationToken}: Props) => {
    const {basket} = useBasket();


    const addressString = () => {
        if (!confirmationToken?.shipping) return "";
        const {name, address} = confirmationToken.shipping;
        return `${name}, ${address?.line1}, ${address?.city}, 
        ${address?.state}, ${address?.postal_code}, ${address?.country}`
    }


    const paymentString = () => {
        if (!confirmationToken?.payment_method_preview.card) return '';
        const {card} = confirmationToken.payment_method_preview;
        return `${card.brand.toUpperCase()}, **** **** **** ${card.last4}, 
        Exp: ${card.exp_month}/${card.exp_year}`
    }


  return (
    <div>
        <div className='mt-4 w-full'>
            <h4 className='font-bold text-[1.5rem] mb-[20px]'>Billing and delivery information</h4>
            <dl>
                <h5 className='font-medium'>Shipping Address</h5>
                <h5 className='text-muted-foreground mt-1 mb-[25px]'>{addressString()}</h5>

                <h5 className='font-medium'>Payment Detials</h5>
                <h5 className='text-muted-foreground mt-1 mb-[25px]'>{paymentString()}</h5>
            </dl>
        </div>

        <div>
            <div className='w-full h-[2px] mb-[20px] bg-muted-foreground'></div>
            <Table>
                <TableCaption>A list of your baskect items</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Item</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {basket?.items.map((item) => (
                        <TableRow key={item.productId}>
                            <TableCell><img
                                src={item.pictureUrl}
                                alt={item.name}
                                className="h-12 w-12 rounded-md object-cover"
                                /></TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>x{item.quantity}</TableCell>
                            <TableCell>${(item.price / 100).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    </div>
  )
}

export default Review
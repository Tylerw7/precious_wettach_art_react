import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchOrderDetailedQuery } from '../features/orders/orderApi';
import {Button} from "../../src/components/ui/button"
import { format } from 'date-fns';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../src/components/ui/table';
import {currencyFormat, formatAddressString, formatPaymentString} from "../../lib/util"




const OrderDetails = () => {
    const {id} = useParams();

    const {data: order, isLoading} = useFetchOrderDetailedQuery(+id!)

    if (isLoading) return <div className='mt-[120px]'>Loading...</div>

    if (!order) return <div className='mt-[120px]'>Order not found</div>


  return (
    <div className='w-screen mt-[120px] mb-[100px] flex flex-col justify-center items-center'>

        <div className='w-[60%] mt-[50px] border rounded-md shadow-md p-4'>
            <div className='w-full flex justify-between items-center'>
                <h3 className='text-[2rem] font-semibold'>Order Summary</h3>
                <Button>Back To Orders</Button>
            </div>

            {/* Divider */}
            <div className='h-[1px] mt-[20px] mb-[20px] bg-muted-foreground w-full'></div>

            <div>
                <h3 className='font-semibold text-[1.5rem] mb-[15px]'>Billing and delivery information</h3>
                <div className='mb-[15px]'>
                    <h3 className='font-semibold text-[1.2rem]'>Shipping address</h3>
                    <p className='text-muted-foreground italic'>{formatAddressString(order.shippingAddress)}</p>
                </div>

                <div className='mb-[15px]'>
                    <h3 className='font-semibold text-[1.2rem]'>Payment info</h3>
                    <p className='text-muted-foreground italic'>{formatPaymentString(order.paymentSummary)}</p>
                </div>
            </div>

            <div>
                <h3 className='font-semibold text-[1.2rem]'>Order Details</h3>
                <div className='mb-[15px]'>
                    <h3>Email</h3>
                    <p className='text-muted-foreground italic'>{order.buyerEmail}</p>
                </div>

                <div className='mb-[15px]'>
                    <h3 className='font-semibold text-[1.2rem]'>Order Status</h3>
                    <p className='text-muted-foreground italic'>{order.orderStatus}</p>
                </div>

                <div className='mb-[15px]'>
                    <h3 className='font-semibold text-[1.2rem]'>Order Date</h3>
                    <p className='text-muted-foreground italic'>{format(order.orderDate, 'dd MMM yyyy')}</p>
                </div>
            </div>

            <div className='h-[1px] mt-[20px] mb-[20px] bg-muted-foreground w-full'></div>

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
                        {order.orderItems.map((item) => (
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

                <div>
                    <div>
                        
                        <div className='mb-[15px] flex justify-between'>
                            <h3 className='font-semibold text-[1.2rem]'>Subtotal</h3>
                            <p className='text-muted-foreground italic'>{currencyFormat(order.subtotal)}</p>
                        </div>

                        <div className='mb-[15px] flex justify-between'>
                            <h3 className='font-semibold text-[1.2rem]'>Discount</h3>
                            <p className='italic text-green-400'>{currencyFormat(order.discount)}</p>
                        </div>

                        <div className='mb-[15px] flex justify-between'>
                            <h3 className='font-semibold text-[1.2rem]'>Delivery Fee</h3>
                            <p className='text-muted-foreground italic'>{currencyFormat(order.deliveryFee)}</p>
                        </div>

                        <div className='mb-[15px] flex justify-between'>
                            <h3 className='font-semibold text-[1.2rem]'>Total</h3>
                            <p className='text-muted-foreground italic'>{currencyFormat(order.total)}</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default OrderDetails
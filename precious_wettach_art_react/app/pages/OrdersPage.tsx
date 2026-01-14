import React from 'react'
import {useFetchOrdersQuery} from "../features/orders/orderApi"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../src/components/ui/table';
import {useNavigate} from 'react-router-dom'
import {format} from 'date-fns'
import {currencyFormat} from "../../lib/util"




const OrdersPage = () => {
    const {data: orders, isLoading} = useFetchOrdersQuery();
    const navigate = useNavigate();

    if (isLoading) return <div className='mt-[120px]'>Loading</div>

    if (!orders) return <div className='mt-[120px]'>No Orders available</div>


  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>

        <div className='border rounded-md shadows-md w-[60%]'>

            <h2>My Orders</h2>

            <div className='w-full'>
            <Table className='w-full'>
                
                <TableHeader>
                    <TableRow>
                        <TableHead>Order</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow onClick={() => navigate(`/orders/${order.id}`)} className='hover:cursor-pointer'>
                            <TableCell># {order.id}</TableCell>
                            <TableCell>{format(order.orderDate, 'dd MMM yyy')}</TableCell>
                            <TableCell>{currencyFormat(order.total)}</TableCell>
                            <TableCell>{order.orderStatus}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </div>

        </div>

    </div>
  )
}

export default OrdersPage
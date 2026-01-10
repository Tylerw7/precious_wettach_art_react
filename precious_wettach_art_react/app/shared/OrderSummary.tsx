import { Button } from '@/components/ui/button';
import {currencyFormat} from '../../lib/util'
import { Input } from '@/components/ui/input';
import { useFetchBasketQuery } from '../pages/Basket/basketApi';
import type { Item } from 'Types/basket';
import { Link, useLocation } from 'react-router-dom';



const OrderSummary = () => {
    const {data: basket} = useFetchBasketQuery();
    const subtotal = basket?.items.reduce((sum: number, item: Item) => sum + item.quantity * item.price, 0) ?? 0;
    const deliveryFee = subtotal > 10000 ? 0 : 500;
    const location = useLocation();


  return (
    <div className="w-full flex flex-col gap-4">

        <div className=" w-full h-full rounded-sm shadow-lg p-4 flex flex-col">
            <h3 className="font-bold text-[1.7rem]">Order Summary</h3>
            <p className="italic text-muted-foreground mb-[25px]">Orders over $100 qualify for free delivery</p>
            
            <div className="flex justify-between w-full mb-[5px]">
                <p>Subtotal</p>
                <p>{currencyFormat(subtotal)}</p>
            </div>

            <div className="flex justify-between w-full mb-[5px]">
                <p>Discount</p>
                <p>-0.00</p>
            </div>
            
            <div className="flex justify-between w-full mb-[30px]">
                <p>Delivery Fee</p>
                <p>{currencyFormat(deliveryFee)}</p>
            </div>

            {!location.pathname.includes('checkout') && 
            <Link to="/checkout" className='w-full'><Button className='w-full mb-[15px] bg-blue-500 hover:cursor-pointer' 
                >CECKOUT</Button></Link>
            }

            <Link to="/gallery" className='w-full'><Button variant="ghost" className='w-full hover:cursor-pointer text-blue-500'>CONTINUE SHOPPING</Button></Link>

        </div>

        <div className="w-full rounded-sm shadow-lg p-4 flex flex-col">
            <h3 className='mb-[15px]'>Do you have a voucher code?</h3>
            <Input type='text' id="voucher" placeholder='voucher code' className='h-10 mb-[15px]'/>
            <Button className=' bg-blue-500 hover:cursor-pointer'>APPLY CODE</Button>
        </div>

    </div>
  )
}

export default OrderSummary
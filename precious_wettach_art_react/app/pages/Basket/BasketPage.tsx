
import { useFetchBasketQuery } from './basketApi'



const BasketPage = () => {
    const {data, isLoading} = useFetchBasketQuery();

    if (isLoading) return <div className='mt-[150px]'>Loading Basket...</div>
    if (!data) return <div className='mt-[150px]'>Your basket is empty</div>

    
  return (
    <div className='mt-[150px]'>{data.basketId}</div>
  )
}

export default BasketPage
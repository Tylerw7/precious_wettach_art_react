import BasketItem from './BasketItem'
import { useFetchBasketQuery } from './basketApi'
import OrderSummary from '../../shared/OrderSummary'



const BasketPage = () => {
    const {data, isLoading} = useFetchBasketQuery();

    if (isLoading) return <div className='mt-[120px]'>Loading Basket!...</div>
    if (!data) return <div className='mt-[120px]'>Your basket is empty</div>

    
  return (
    <div className='mt-[140px] p-4 flex gap-5 w-full flex-col md:flex-row'>

      <div>
      {data.items.map(item => (
        <BasketItem item={item} key={item.productId} />
      ))}
      </div>

      <OrderSummary />

    </div>
  )
}

export default BasketPage
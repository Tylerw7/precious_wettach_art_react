import BasketItem from './BasketItem'
import { useFetchBasketQuery } from './basketApi'



const BasketPage = () => {
    const {data, isLoading} = useFetchBasketQuery();

    if (isLoading) return <div className='mt-[120px]'>Loading Basket!...</div>
    if (!data) return <div className='mt-[120px]'>Your basket is empty</div>

    
  return (
    <div className='mt-[120px] p-4'>

      <div>
      {data.items.map(item => (
        <BasketItem item={item} key={item.productId} />
      ))}
      </div>

      <div>

      </div>
      
    </div>
  )
}

export default BasketPage
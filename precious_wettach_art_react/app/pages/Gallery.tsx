
import Filters from './Filters'
import ProductCard from '../features/ProductCard'
import { useFetchProductsQuery } from '../features/galleryApi'
import { useAppSelector } from '../store/store'



const Gallery = () => {
    const productParams = useAppSelector(state => state.gallery)
    const {data, isLoading} = useFetchProductsQuery(productParams);


    if (isLoading || !data) return <div>Loading...</div>

    


  return (
    <div className='mt-[150px] flex flex-col lg:flex-row'>
      <div className='w-full lg:w-[20vw]'>
        <Filters />
      </div>
      <div className='w-full lg:w-[80vw]'>
        <ProductCard products={data} />
      </div>
        
    </div>
  )
}

export default Gallery
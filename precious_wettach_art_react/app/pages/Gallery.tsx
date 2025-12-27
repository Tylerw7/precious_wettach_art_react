
import Filters from './Filters'
import ProductCard from '../features/ProductCard'
import { useFetchProductsQuery } from '../features/galleryApi'



const Gallery = () => {
    const {data, isLoading} = useFetchProductsQuery();


    if (isLoading || !data) return <div>Loading...</div>

    


  return (
    <div className='mt-[300px] flex flex-col lg:flex-row'>
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
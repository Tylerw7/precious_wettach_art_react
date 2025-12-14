
import {Button }from '../../src/components/ui/button'
import ProductCard from '../features/ProductCard'
import { useFetchProductsQuery } from '../features/galleryApi'



const Gallery = () => {
    const {data, isLoading} = useFetchProductsQuery();


    if (isLoading || !data) return <div>Loading...</div>

    


  return (
    <div className='mt-[300px]'>
        <ProductCard products={data} />
        <Button>Click Me</Button>
    </div>
  )
}

export default Gallery
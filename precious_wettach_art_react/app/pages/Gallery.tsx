
import Filters from './Filters'
import ProductCard from '../features/ProductCard'
import { useFetchProductsQuery } from '../features/galleryApi'
import { useAppSelector } from '../store/store'
import { 
  Pagination, 
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious, } from '@/components/ui/pagination'



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
        <ProductCard products={data.items} />

        <div className='mt-[50px] mb-[150px]'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        </div>
      </div>
        
    </div>
  )
}

export default Gallery
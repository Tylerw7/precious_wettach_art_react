
import Filters from './Filters'
import ProductCard from '../features/ProductCard'
import { useFetchProductsQuery, useFetchFiltersQuery } from '../features/galleryApi'
import { useAppDispatch, useAppSelector } from '../store/store'
import AppPagination from '../features/AppPagination'
import { setPageNumber } from '../features/gallerySlice'



const Gallery = () => {
    const {data: filtersData, isLoading: filtersLoading} = useFetchFiltersQuery();
    const productParams = useAppSelector(state => state.gallery)
    const {data, isLoading} = useFetchProductsQuery(productParams);
    const dispatch = useAppDispatch();


    if (isLoading || !data || filtersLoading || !filtersData) return <div>Loading...</div>

    


  return (
    <div className='mt-[150px] flex flex-col lg:flex-row'>
      <div className='w-full lg:w-[20vw]'>
        <Filters filtersData={filtersData}/>
      </div>
      <div className='w-full lg:w-[80vw]'>
        {data.items && data.items.length > 0 ? (
          <>
        <ProductCard products={data.items} />

        <AppPagination 
          metadata={data.pagination}
          onPageChange={(page: number) => {
            dispatch(setPageNumber(page));
            window.scrollTo({top: 0, behavior: 'smooth'});
          }}
        />
        </>

      ) : (
        <h3 className='mt-[50px] font-bold text-[1.2rem] p-4'>There are no resulst for this filter</h3>
      )}
        
      </div>
        
    </div>
  )
}

export default Gallery

import Search from '../features/Search'
import RadioButtonGroup from '../features/RadioButtonGroup'
import { useAppDispatch, useAppSelector } from "../store/store";
import { resetParams, setBrands, setOrderBy, setTypes } from "../features/gallerySlice";
import CheckBoxButtons from '../features/CheckBoxButtons'
import { Button } from "@/components/ui/button";



type Props = {
    filtersData: {
        brands: string[];
        types: string[];
    }
}



const sortOptions = [
    {value: 'name', label: 'Alphabetical'},
    {value: 'priceDesc', label: 'Price: High to Low'},
    {value: 'price', label: 'Price: Low to High'},
]

const Filters = ({filtersData: data}: Props) => {
    
    const {orderBy, types, brands} = useAppSelector(state => state.gallery);
    const dispatch = useAppDispatch();

    



  return (
    <div className="p-4 w-full flex flex-col">

        <Search />
        
        <div className="w-full bg-yellow-100 p-3 rounded-sm mb-4 shadow-md">
        <h3 className="font-bold mb-2">Sort</h3>
            <RadioButtonGroup 
                selectedValue={orderBy}
                options={sortOptions}
                onChange={e => dispatch(setOrderBy(e))}
                />
        </div>

        <div className="w-full bg-yellow-100 p-3 rounded-sm mb-4 shadow-md">
        <h3 className="font-bold mb-2">Brand</h3>
            <CheckBoxButtons 
                checked={brands}
                items={data?.brands}
                onChange={(items: string[]) => dispatch(setBrands(items))}
            />
        </div>

        <div className="w-full bg-yellow-100 p-3 rounded-sm mb-4 shadow-md">
            <h3 className="font-bold mb-2">Types</h3>
            <CheckBoxButtons 
                checked={types}
                items={data?.types}
                onChange={(items: string[]) => dispatch(setTypes(items))}
            />
        </div>

        <div className="w-full bg-yellow-100 p-3 rounded-sm mb-4 shadow-md flex justify-center items-center">
            <Button
                onClick={() => dispatch(resetParams())}
                className="w-[150px]"
            >Reset Filters</Button>
        </div>

    </div>
  )
}

export default Filters
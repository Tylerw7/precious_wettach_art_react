
import {useFetchFiltersQuery} from "../features/galleryApi"
import { Label } from "@/components/ui/label";
import Search from '../features/Search'
import RadioButtonGroup from '../features/RadioButtonGroup'
import { useAppDispatch, useAppSelector } from "../store/store";
import { setOrderBy } from "../features/gallerySlice";



const sortOptions = [
    {value: 'name', label: 'Alphabetical'},
    {value: 'priceDesc', label: 'Price: High to Low'},
    {value: 'price', label: 'Price: Low to High'},
]

const Filters = () => {
    const {data} = useFetchFiltersQuery();
    const {orderBy} = useAppSelector(state => state.gallery);
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
            <form>
                {data && data.brands.map((item, i )=> (
                    <Label className="mb-2" key={i}>
                        <input type="checkbox" value={item}/>
                        {item}
                    </Label>
                ))}
            </form>
        </div>

        <div className="w-full bg-yellow-100 p-3 rounded-sm mb-4 shadow-md">
            <h3 className="font-bold mb-2">Types</h3>
            <form>
                {data && data.types.map((item, i) => (
                    <Label className="mb-2" key={i}>
                        <input type="checkbox" value={item}/>
                        {item}
                    </Label>
                ))}
            </form>
        </div>

    </div>
  )
}

export default Filters
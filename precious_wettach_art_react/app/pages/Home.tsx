import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import type{ CounterState } from 'app/features/reducers/counterReducer'
import { Button } from '@/components/ui/button'



const Home = () => {
  const data = useSelector((state: CounterState) => state.data)
  const dispatch = useDispatch();


  return (
    <div className='mt-[150px] flex flex-col'>
        <h2>Home</h2>
        <Link to="/gallery" className='text-purple-500'>Gallery</Link>
        <Link to="/about" className='text-purple-500'>About</Link>
        <p>State: {data}</p>
        <Button onClick={() => dispatch({type: 'increment'})} className='w-[150px]'>ADD</Button>
        <Button onClick={() => dispatch({type: 'decrement'})} className='w-[150px]'>Minus</Button>
    </div>
  )
}

export default Home

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { increment, decrement } from '../features/reducers/counterReducer'
import { useAppDispatch, useAppSelector } from '../store/store'


const Home = () => {
  const {data} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch();


  return (
    <div className='mt-[150px] flex flex-col'>
        <h2>Home</h2>
        <Link to="/gallery" className='text-purple-500'>Gallery</Link>
        <Link to="/about" className='text-purple-500'>About</Link>
        <p>State: {data}</p>
        <Button onClick={() => dispatch(increment(1))} className='w-[150px]'>ADD</Button>
        <Button onClick={() => dispatch(decrement(1))} className='w-[150px]'>Minus</Button>
    </div>
  )
}

export default Home
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import type{ CounterState } from 'app/features/reducers/counterReducer'



const Home = () => {
  const data = useSelector((state: CounterState) => state.data)


  return (
    <div className='mt-[150px] flex flex-col'>
        <h2>Home</h2>
        <Link to="/gallery" className='text-purple-500'>Gallery</Link>
        <Link to="/about" className='text-purple-500'>About</Link>
        <p>State: {data}</p>
    </div>
  )
}

export default Home
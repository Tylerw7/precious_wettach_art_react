import {useState, useEffect} from 'react'
import type { Product } from '../../Types/product'
import axios from 'axios'
import {Button }from '../../src/components/ui/button'
import ProductCard from '../features/ProductCard'



const Gallery = () => {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const data = async() => {
          try {
            const res = await axios.get('http://localhost:5001/api/products') 
            setProducts(res.data)
          } catch (err) {
            console.log(err)
          }
        }
      
        data()
      },[])


    //   const addProduct = () => {
    //     setProducts(prevState => [...prevState,
    //       {id: prevState.length + 1,
    //       name: 'product' + (prevState.length + 1),
    //       price: (prevState.length * 100) + 100,
    //       quantityInStock: 100,
    //       description: 'test',
    //       pictureUrl: 'https://picsum.photo/200',
    //       type: 'test',
    //       brand: 'test'
    //     }])
    //   }


  return (
    <div className='mt-[300px]'>
        <ProductCard products={products} />
        <Button>Click Me</Button>
    </div>
  )
}

export default Gallery
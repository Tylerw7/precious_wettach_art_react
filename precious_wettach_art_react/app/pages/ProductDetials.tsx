import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import type { Product } from "Types/product";
import axios from "axios";



const ProductDetials = () => {
    const {id} = useParams();
    const [products, setProducts] = useState<Product | null>(null);



    useEffect(() => {
        const data = async() => {
          try {
            const res = await axios.get(`http://localhost:5001/api/products/${id}`) 
            setProducts(res.data)
          } catch (err) {
            console.log(err)
          }
        }
      
        data()
      },[id])

      if (!products) {
        return <div className="mt-[150px]">Loading...</div>;
      }



  return (
    <>
    <div 
        className="
        mt-[150px] 
        bg-[#fffcf6]
        w-screen
        h-full
        flex 
        flex-col 
        md:flex-row
    ">

        <div className="w-full md:w-[50%] p-4 flex justify-center items-center">
            <img
                src={products?.pictureUrl} 
                alt={products?.name}
                className="w-[80%]"
            />
        </div>

        <div className="w-full h-full md:w-[50%] p-4">
            <h1 className="font-bold text-[1.8rem]">{products?.name.toUpperCase()}</h1>
            <p className="mt-5">Price: <span className="font-bold text-[1.5rem] italic">${(products.price / 100).toFixed(2)}</span></p>
            <p className="mt-5">Available: <span className="font-bold text-[1.5rem] italic">{products.quantityInStock ?  "Yes" : "No"}</span></p>
            <div>
                
            </div>
        </div>
        
    </div>
    </>
  )
}

export default ProductDetials
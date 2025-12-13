import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import type { Product } from "Types/product";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    Field, 
    FieldLabel, 
 } from "@/components/ui/field";



const ProductDetials = () => {
    const {id} = useParams();
    const [products, setProducts] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1)



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

        {/* Image Container */}
        <div className="w-full md:w-[50%] p-4 flex justify-center items-center">
            <img
                src={products?.pictureUrl} 
                alt={products?.name}
                className="w-[80%]"
            />
        </div>


        {/* Description Container */}
        <div className="w-full h-full md:w-[50%] p-4">
            <h1 className="font-bold text-[1.8rem]">{products?.name.toUpperCase()}</h1>
            <p className="mt-5">Price: <span className="font-bold text-[1.5rem] italic">${(products.price / 100).toFixed(2)}</span></p>
            <p className="mt-5">Available: <span className="font-bold text-[1.5rem] italic">{products.quantityInStock ?  "Yes" : "No"}</span></p>
            
            <div className="flex items-end mt-[100px] gap-[10%]">
            <div>
            <Field>
                <FieldLabel htmlFor="quantity">Quantity</FieldLabel>

                <div className="flex items-center gap-2">
                    <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    >
                    −
                    </Button>

                    <Input
                    id="quantity"
                    type="number"
                    min={1}
                    value={quantity}
                    readOnly
                    className="w-16 text-center"
                    />

                    <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    >
                    +
                    </Button>
                </div>
            </Field>
            </div>

            <div>
            <Button className="w-[200px] h-[50px] text-[1.2rem] hover:cursor-pointer">Add To Cart</Button>
            </div>

            </div>
        </div>
        {/* End of Description Container */}
        
    </div>
    </>
  )
}

export default ProductDetials
import { useParams } from "react-router-dom"
import { useEffect, useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    Field, 
    FieldLabel, 
 } from "@/components/ui/field";
import { useFetchProductDetialsQuery } from "../features/galleryApi";
import { useAddBasketItemMutation, useFetchBasketQuery, useRemoveBasketItemMutation } from "./Basket/basketApi";



const ProductDetials = () => {
    const {id} = useParams();
    const [removeBasketItem] = useRemoveBasketItemMutation();
    const [addBasketItem] = useAddBasketItemMutation();
    const {data: basket} = useFetchBasketQuery();
    const item = basket?.items.find(x => x.productId === +id!);
    const [quantity, setQuantity] = useState(0);

   
    useEffect(() => {
        if (item) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setQuantity(item.quantity);
        }
      }, [item]);
      
      
      



    const {data: product, isLoading} = useFetchProductDetialsQuery(id ? parseInt(id) : 0)
  

      if (!product || isLoading) {
        return <div className="mt-[150px]">Loading...</div>;
      }


    const handleUpdateBasket = () => {
        const updatedQuantity = item ? Math.abs(quantity - item.quantity) : quantity;
        if (!item || quantity > item.quantity) {
            addBasketItem({product, quantity: updatedQuantity})
        } else {
            removeBasketItem({productId: product.id, quantity: updatedQuantity})
        }
    }
        

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>  {
        const value = +event.currentTarget.value;

        if (value >= 0) setQuantity(value);
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
                src={product?.pictureUrl} 
                alt={product?.name}
                className="w-[80%]"
            />
        </div>


        {/* Description Container */}
        <div className="w-full h-full md:w-[50%] p-4">
            <h1 className="font-bold text-[1.8rem]">{product?.name.toUpperCase()}</h1>
            <p className="mt-5">Price: <span className="font-bold text-[1.5rem] italic">${(product.price / 100).toFixed(2)}</span></p>
            <p className="mt-5">Available: <span className="font-bold text-[1.5rem] italic">{product.quantityInStock ?  "Yes" : "No"}</span></p>
            
            <div className="flex items-end mt-[100px] gap-[10%]">
            <div>
            <Field>
                <FieldLabel htmlFor="quantity">Quantity</FieldLabel>

                <div className="flex items-center gap-2">
                    <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => Math.max(0, q - 1))}
                    aria-label="Decrease quantity"
                    >
                    −
                    </Button>

                    <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={handleInputChange}
                    readOnly
                    className="w-16 text-center"
                    />

                    <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q + 1))}
                    >
                    +
                    </Button>
                </div>
            </Field>
            </div>



            <div>
            <Button className="w-[200px] h-[50px] text-[1.2rem] hover:cursor-pointer"
                disabled={quantity === item?.quantity || !item && quantity === 0}
                onClick={handleUpdateBasket}
                >{item ? 'Update Quantity' : 'Add To Basket'}</Button>
            </div>

            </div>
        </div>
        {/* End of Description Container */}
        
    </div>
    </>
  )
}

export default ProductDetials
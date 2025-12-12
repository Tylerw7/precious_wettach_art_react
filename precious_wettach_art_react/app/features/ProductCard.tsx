
import { Button } from "@/components/ui/button"
import type { Product } from "Types/product"



type Prop = {
  products: Product[]
}

type CardProduct = {
  product: Product
}



// Card Component
const Card = ({product}: CardProduct) => {
  return (
    <div className="
      w-[300px] 
      h-[450px] 
      rounded-md
      shadow-lg
      flex
      flex-col
      ">
        <img
          src={product.pictureUrl}
          alt={product.name}
          className="w-full h-[250px] object-cover rounded-t-md" 
        />
        <h3 className="p-4 font-bold">{product.name.toUpperCase()}</h3>
        <p className="p-4">${product.price / 100}</p>
        <div className="flex justify-between p-4 mt-auto">
          <Button className="hover:cursor-pointer text-blue-400 text-[1.1rem]" variant="ghost">Add To Cart</Button>
          <Button className="hover:cursor-pointer text-blue-400 text-[1.1rem]" variant="ghost">View</Button>
        </div>
    </div>
  )
}




const ProductCard = ({products}: Prop) => {

  



  return (
    <>
    <div>ProductList</div>
    <div className="flex flex-wrap gap-4 justify-evenly">
    {products.map((item,i) => (
      <Card product={item} key={i}/>
    ))}
    </div>
    </>
  )
}

export default ProductCard
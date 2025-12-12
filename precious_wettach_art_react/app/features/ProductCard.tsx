
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
    <div className="w-[280px] h-[400px] bg-blue-100">
        <img
          src={product.pictureUrl}
          alt={product.name}
          className="w-full h-[250px] object-cover" 
        />
        <h3>{product.name}</h3>
        <p>{product.pictureUrl}</p>
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
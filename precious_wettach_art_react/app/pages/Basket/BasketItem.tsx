import type { Item } from "Types/basket"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useRemoveBasketItemMutation } from "./basketApi";


type Props = {
    item: Item
}



const BasketItem = ({ item }: Props) => {
    const [removeBasketItem] = useRemoveBasketItemMutation();



  return (
    <div 
        className="
        h-[140px]
        rounded-sm
        flex
        p-4
        items-center
        shadow-lg
        gap-4
        ">
        <div className="w-[110px] h-[110px] rounded-sm">
            <img 
                src={item.pictureUrl} 
                alt={item.name} 
                className="object-cover rounded-sm"
                />
        </div>

        <div className="flex flex-col gap-2 w-full">
            <h3 className="font-bold text-[1.2rem]">{item.name}</h3>
                <div className="flex gap-4">
                    <p>${(item.price / 100).toFixed(2)} x {item.quantity}</p>
                    <p>Total: <span className="text-blue-400">${(item.price / 100 * item.quantity)}</span></p>
                </div>
                <div className="flex gap-3">
                    <div 
                        className="w-[30px] h-[30px] border border-red-400 rounded-sm flex justify-center items-center hover:cursor-pointer"
                        onClick={() => removeBasketItem({productId: item.productId, quantity: 1})}
                        >
                        <FaMinus color="red"/>
                    </div>

                    <div className="w-[30px] h-[30px] border border-black rounded-sm flex justify-center items-center">
                        {item.quantity}
                    </div>

                    <div className="w-[30px] h-[30px] border border-green-400 rounded-sm flex justify-center items-center hover:cursor-pointer">
                        <FaPlus color="green"/>
                    </div>
                </div>
        </div>
        <div className="h-full">
            <div 
            className="w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer
            "
            onClick={() => removeBasketItem({productId: item.productId, quantity: item.quantity})}
            >
                <FaRegTrashCan color="red" size={20}/>
            </div>
        </div>
    </div>
  )
}

export default BasketItem
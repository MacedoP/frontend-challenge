import { useLocalStorge } from "@/hooks/useLocalStorge"
import { CartIcon } from "./cart-icon"



export function CartControl(){
    const {value} = useLocalStorge('cart-items')
    return(
        <div>
            <CartIcon/>
        </div>

        
    )
}
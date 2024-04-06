import { useLocalStorage } from "@/hooks/useLocalStorge"
import { CartIcon } from "./cart-icon"
import styled from "styled-components"


const CartCount = styled.span`
    width: 17px;
    height:17px;
    background-color: var(--delete-color);
    color: White;
    position: absolute;
` 
const Container = styled.div`
    position: relative;
  


`
export function CartControl(){
    const {value} = useLocalStorage('cart-items')
    return(
        <Container>
            <CartIcon/>
            {value.length && <CartCount></CartCount>}
        </Container>

        
    )
}
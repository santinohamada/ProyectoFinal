import { createContext } from "react";
import useCart from "../CustomsHooks/useCart";
import { add } from "date-fns";

const CartContext = createContext()

const CartProvider=({children})=>{
    const {cart,removeFromCart,addToCart,checkElementCart,clearCart} = useCart()
    return(
        <CartContext.Provider value={{cart,removeFromCart,addToCart,checkElementCart}}>
            {children}
        </CartContext.Provider>
    )
}
export {CartContext,CartProvider}
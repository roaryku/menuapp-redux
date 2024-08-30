import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../redux/cartSliceFood.js";
import CartItemFood from "./CartItemFood";

const CartFood = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
   
    return (
        <div className="AllItemsInCart">
        <div className="AllCartContainer">
            <h2>Check out our menu!</h2>
            <button className="btnIcon">
                <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="icon"/>
            </button>
            </div>
            
            <div className="ItemsInTheCart">
                {cartItems.map((cartItem, idFood) => 
                   <CartItemFood cartItem={cartItem}
                   key={idFood}
                   />
                
                )}
                <h3 className="AllPrice">Total: ${totalPrice}</h3>
            </div>
        </div>
        
    )
}
export default CartFood;
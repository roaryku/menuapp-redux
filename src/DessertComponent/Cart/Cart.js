import { useSelector } from "react-redux";
import CartItem from "./CartItem.js";
import icon from './add-cart_icon copy.png'
import { getCartItems, getTotalPrice } from "../redux/cartSlice.js";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
   
        return(
            <div className='totalCart'>
                <img className='icon' src={icon} alt='icon'/>
                {cartItems.map((cartItem, id ) => 
                <CartItem cartItem = {cartItem}
                key={id}
                />)}
                <h3 className='totalPrice'>Total: ${totalPrice} </h3>
                
            </div>
        
    )
}
export default Cart;
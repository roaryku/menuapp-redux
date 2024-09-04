import dishesData from "../data/dishesData";
import { removeItemFromCart } from "../redux/cartSliceFood.js";
import { useDispatch } from "react-redux";

const CartItemFood = ({itemsInCart}) => {

    const dishes = dishesData.find(item => item.idFood === itemsInCart.dishId)
    const dispatch = useDispatch();
    console.log (dishes)

    return(
        <div>
        <div className="headerCart">
            <div className="container-cart"> 
               <img className="imageInTheCart" src={`./${dishes.img}.jpg`} alt="food"/>
            </div>

        
            <div className="container-cart"> 
               <p className="cartPar">{dishes.name}</p>
               <p className="cartPar">{itemsInCart.quantity} portion(s)</p>
               <p className="cartPar price">Price: ${dishes.price * itemsInCart.quantity}</p>
               <span onClick={() => dispatch(removeItemFromCart({itemsInCartId: itemsInCart.id}))}>
               <img className="icon cartPar" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/> 
               </span>
            </div>
        </div>
    </div>  
    )
}
export default CartItemFood;
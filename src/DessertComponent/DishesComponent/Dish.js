import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemsToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Dish =  ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return ( 
       <div className="dishContainer">
           <h3>{dish.name}</h3>
           <p>$ {dish.price}</p> 
           <img className='allCategoriesImage' src={`../${dish.img}.jpg`} alt="sweet"/>
           <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
           <button className="cta" onClick={() => {dispatch(addItemsToCart({dish, quantity}))}}>Add to card</button>
       </div> 
    )
}
export default Dish;
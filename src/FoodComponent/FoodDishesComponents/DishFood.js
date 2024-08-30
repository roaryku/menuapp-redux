import { useState } from "react";
import { addItemToCard } from "../redux/cartSliceFood.js.js";
import { useDispatch } from "react-redux";
import ChangeQuantityFood from "../Cart/ChangeQuantityFood.js.js";

const DishFood =  ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return ( 
       <div className="AllContainerDish">
          <img className="AllImg" src={`./${dish.img}.jpg`} alt="food"/>
          <h2>{dish.name}</h2>
          <p>$ {dish.price}</p> 

          <ChangeQuantityFood quantity={quantity} setQuantity={setQuantity}/>
          <button className="cta" onClick={() => {dispatch(addItemToCard({dish, quantity}))}}>
            Add to card</button>
       </div> 
    )
}
export default DishFood;
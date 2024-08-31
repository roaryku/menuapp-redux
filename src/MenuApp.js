
import './App.css';
import DishesFood from "./FoodComponent/FoodDishesComponents/DishesFood";
import AllCategoriesFood from "./FoodComponent/FilterFood/AllCategoriesFood.js";
import CartFood from "./FoodComponent/Cart/CartFood";


const MenuApp = () => {
    return (<div className="MenuApp">
        <DishesFood/>
        <AllCategoriesFood/>
        <CartFood/>
    </div>)
}
export default MenuApp;
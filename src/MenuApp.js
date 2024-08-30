import Dishes from "./FoodComponent/FoodDishesComponents/DishesFood";
import AllCategories from "./FoodComponent/FilterFood/AllCategoriesFood.js";
import Cart from "./FoodComponent/Cart/CartFood";
import './App.css';


const MenuApp = () => {
    return (<div className="MenuApp">
        <Dishes/>
        <AllCategories/>
        <Cart/>
    </div>)
}
export default MenuApp;
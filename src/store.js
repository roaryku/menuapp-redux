import { configureStore } from '@reduxjs/toolkit';
import dishes from './DessertComponent/redux/dishesSlice';
import cart from './DessertComponent/redux/cartSlice';
import recipeDishes from './FoodComponent/redux/dishesSliceFood';
import recipeCart from './FoodComponent/redux/cartSliceFood'


export const store = configureStore({
    reducer: {
        dishes: dishes,
        cart: cart,
        recipeDishes: recipeDishes,
        recipeCart: recipeCart
    }
})
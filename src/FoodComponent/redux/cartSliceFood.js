import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'recipeCart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
       addItemToCard: (state, action) => {
        const timeId = new Date().getTime()
        state.itemsInCart.push({
            idFood: timeId,
            dishId: action.payload.dish.idFood,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.dish.price
        })
       },
       removeItemFromCart: (state, action) => {
         state.itemsInCart = state.itemsInCart.filter(
            itemsInCart => itemsInCart.idFood !== action.payload.itemsInCartId
         )
       }
    }
})

export const getTotalPrice = state => {
    return state.recipeCart.itemsInCart.reduce((total, itemsInCart) => {
        return itemsInCart.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.recipeCart.itemsInCart;
export const { addItemToCard, removeItemFromCart } = slice.actions;
export default slice.reducer
import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
       addItemToCard: (state, action) => {
        const timeId = new Date().getTime()
        state.cartItems.push({
            idFood: timeId,
            dishId: action.payload.dish.id,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.dish.price
        })
       },
       removeItemFromCart: (state, action) => {
         state.cartItems = state.cartItems.filter(
            cartItem => cartItem.idFood !== action.payload.cartItemId
         )
       }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCard, removeItemFromCart } = slice.actions;
export default slice.reducer
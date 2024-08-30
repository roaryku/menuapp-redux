import { configureStore } from '@reduxjs/toolkit'
import dishes from './dishesSliceFood.js.js'
import cart from './cartSliceFood.js'

const store = configureStore({
  reducer: {
    dishes,
    cart
  }
})

export default store
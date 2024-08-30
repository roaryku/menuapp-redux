import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: {
    selectedCategory: "ALL"
  },
  reducers: {
    filterCategory: (state, action) => {
        state.selectedCategory = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const getSelectedCategory = state => state.dishes.selectedCategory
export const { filterCategory } = dishesSlice.actions
export default dishesSlice.reducer
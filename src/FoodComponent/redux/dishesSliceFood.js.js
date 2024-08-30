import { createSlice } from '@reduxjs/toolkit'


export const dishesSliceFood = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: 'ALL'
    },
    reducers: {
       filterCategory: (state, action) => {
        state.selectedCategory = action.payload
       }
    }
})

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { filterCategory } = dishesSliceFood.actions;
export default dishesSliceFood.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filteredArticles: [],
  categories: []
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilteredArticles(state, action){
      state.filteredArticles = action.payload;
    },
    setCategories(state, action){
      state.categories = action.payload;
    }
  },
})

export const { setFilteredArticles, setCategories } = filterSlice.actions

export default filterSlice.reducer
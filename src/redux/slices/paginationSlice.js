import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    totalPages: null,
    itemsPerPage: 4
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = Math.ceil(action.payload / state.itemsPerPage);
    },
  },
});

export const { setCurrentPage, setTotalPages } = paginationSlice.actions;

export default paginationSlice.reducer;

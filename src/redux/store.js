import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import articles from './slices/articlesSlice'
import pagination from './slices/paginationSlice'
import search from './slices/searchSlice'
import quiz from './slices/quizSlice'

export const store = configureStore({
  reducer: {
    filter,
    articles,
    pagination,
    search,
    quiz
  },
})
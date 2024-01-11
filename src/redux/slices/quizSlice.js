import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',

  initialState: {
    id: 'quiz-1',
    quizes: [],
    isUserPlay: false,
    score: 0
  },

  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setQuizes(state, action){
      state.quizes = action.payload;
    },
    isUserPlay(state, action){
      state.isUserPlay = action.payload
    },
  },
});

export const { setId, setQuizes, isUserPlay, setScore} = quizSlice.actions;

export default quizSlice.reducer;

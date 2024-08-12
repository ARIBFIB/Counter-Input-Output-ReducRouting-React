import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setCounter: (state,action) =>{
      state.value = action.payload //update the state with the new value from the input
    }
  },
});

export const { increment, decrement , setCounter} = counterSlice.actions;

export default counterSlice.reducer;
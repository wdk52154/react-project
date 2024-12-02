import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const homeSlice: any = createSlice({
  name: 'home',
  initialState,
  reducers: {
    //增加
    increment: (state) => {
      state.count += 1;
    },

    //减少
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

//count的数据
export const count_value = (state: any) => {
  return state.home.count;
};

export const { increment, decrement } = homeSlice.actions;

export default homeSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async ({ order, sortBy, category, search, currentPage }, thunkAPI) => {
    const { data } = await axios.get(
      `https://63e3f143619fce55d4250f0c.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    console.log(thunkAPI);
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading',
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

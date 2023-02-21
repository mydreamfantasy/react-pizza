import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PizzaItem, SearchPizzaParams } from './types';

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: SearchPizzaParams) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63e3f143619fce55d4250f0c.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data as PizzaItem[];
  },
);

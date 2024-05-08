import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDays = createAsyncThunk(
  'days/getDays',
  async () => {
    const response = await axios.get('https://dpg.gg/test/calendar.json');
    return response.data;
  }
);

const daysSlice = createSlice({
  name: 'days',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDays.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectDays = (store) => store.days;

export const daysReducer = daysSlice.reducer;
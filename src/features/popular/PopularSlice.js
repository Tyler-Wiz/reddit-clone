import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPopular = createAsyncThunk("popular/getData", async (url) => {
  const response = await fetch(`https://www.reddit.com/r/popular/${url}/.json`);
  const json = await response.json();
  let data = json.data.children.map((child) => child.data);
  return data;
});

const initialState = {
  popular: [],
  isLoading: false,
  isRejected: false,
};

const PopularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopular.pending, (state, { payload }) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getPopular.fulfilled, (state, { payload }) => {
      return {
        ...state,
        popular: payload,
        isLoading: false,
        isRejected: false,
      };
    });
    builder.addCase(getPopular.rejected, (state, { payload }) => {
      return { ...state, isLoading: false, isRejected: true };
    });
  },
});

export default PopularSlice.reducer;
export const popularList = (state) => state.popular;

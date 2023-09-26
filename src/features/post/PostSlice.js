import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPostComments = createAsyncThunk(
  "post/getData",
  async (permalink, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://www.reddit.com/${permalink}.json`);
      const json = await response.json();
      let data = json[1].data.children.map((subreddit) => subreddit.data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  post: [],
  isLoading: false,
  isRejected: false,
  dataError: "",
};

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostComments.pending, (state, { payload }) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getPostComments.fulfilled, (state, { payload }) => {
      return {
        ...state,
        post: payload,
        isLoading: false,
        isRejected: false,
      };
    });
    builder.addCase(getPostComments.rejected, (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        dataError: payload,
      };
    });
  },
});

export default PostSlice.reducer;
export const singlePost = (state) => state.post;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSubredditPosts = createAsyncThunk(
  "subreddit/getData",
  async (subreddit, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://www.reddit.com/${subreddit}.json`);
      const json = await response.json();
      return json.data.children.map((post) => post.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  subreddit: [],
  isLoading: false,
  isRejected: false,
};

const SubredditSlice = createSlice({
  name: "subreddit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubredditPosts.pending, (state, { payload }) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getSubredditPosts.fulfilled, (state, { payload }) => {
      return {
        ...state,
        subreddit: payload,
        isLoading: false,
        isRejected: false,
      };
    });
    builder.addCase(getSubredditPosts.rejected, (state, { payload }) => {
      return { ...state, isLoading: false, isRejected: true };
    });
  },
});

export default SubredditSlice.reducer;
export const subredditList = (state) => state.subreddit;

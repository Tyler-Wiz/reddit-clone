import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "../features/popular/PopularSlice";
import SubredditSlice from "../features/subreddit/SubredditSlice";
import PostSlice from "../features/post/PostSlice";

export const store = configureStore({
  reducer: {
    popular: PopularSlice,
    subreddit: SubredditSlice,
    post: PostSlice,
  },
});

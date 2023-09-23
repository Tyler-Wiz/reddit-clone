import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "../features/popular/PopularSlice";

export const store = configureStore({
  reducer: {
    popular: PopularSlice,
  },
});

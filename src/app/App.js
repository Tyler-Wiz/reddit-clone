import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root } from "../components/layout/Root";
import { store } from "./store";
import { Provider } from "react-redux";
import { Home } from "../Pages/home/Home";
import { Subreddit } from "../Pages/subreddit/Subreddit";
import { Post } from "../Pages/post/Post";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/r" element={<Post />} />
        <Route path="/r/:url/:comments/:id/:mainUrl" element={<Post />} />
        <Route path="/s" element={<Subreddit />} />
        <Route path="/s/:url" element={<Subreddit />} />
      </Route>
    )
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

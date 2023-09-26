import React from "react";
import { subredditList } from "../../features/subreddit/SubredditSlice";
import { useSelector } from "react-redux";
import { PopularList } from "../../features/popular/PopularList";
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from "react-router-dom";

export const Subreddit = () => {
  const { subreddit, isLoading } = useSelector(subredditList);
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <div className="flex items-center gap-5 my-10">
        <img
          src={state.image}
          alt="single subreddit"
          className=" rounded-full w-20"
        />
        <h1 className=" text-2xl font-bold">{state.name}</h1>
      </div>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-[600px]">
            <ClipLoader
              color=""
              loading={isLoading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            {subreddit.map((item, i) => (
              <ul key={i}>
                <PopularList popular={item} />
              </ul>
            ))}
          </>
        )}
      </div>
    </>
  );
};

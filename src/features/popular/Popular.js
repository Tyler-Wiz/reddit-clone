import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popularList, getPopular } from "./PopularSlice";
import { PopularList } from "./PopularList";
import { PopularShuffle } from "./PopularShuffle";
import ClipLoader from "react-spinners/ClipLoader";

export const Popular = () => {
  const { popular, isLoading } = useSelector(popularList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular("hot"));
  }, [dispatch]);

  return (
    <div>
      <PopularShuffle />
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
          {popular?.map((item, i) => (
            <ul key={i}>
              <PopularList popular={item} />
            </ul>
          ))}
        </>
      )}
    </div>
  );
};

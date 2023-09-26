import React from "react";
import defaultImg from "../../assets/Img/default_large.png";
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getPostComments, singlePost } from "../post/PostSlice";
import { useDispatch, useSelector } from "react-redux";

export const PopularList = ({ popular }) => {
  const { title, thumbnail, author, score, subreddit, permalink } = popular;
  const dispatch = useDispatch();

  return (
    <section>
      <Link
        to={`${permalink}`}
        state={{ title: title, subreddit: subreddit }}
        className="flex gap-3 my-4 bg-lightGray rounded-md items-center w-full"
        onClick={() => dispatch(getPostComments(permalink))}>
        <div className="w-1/6">
          {thumbnail.includes("https") ? (
            <div className="w-full h-[120px]">
              <img src={thumbnail} alt="reddit" className="w-full h-full" />
            </div>
          ) : (
            <div className="w-full h-[120px]">
              <img src={defaultImg} alt="reddit" className="w-full h-full" />
            </div>
          )}
        </div>
        <div className="w-4/6">
          <p>{title}</p>
          <p>Posted by : {subreddit}</p>
        </div>
        <div className="w-1/6 flex gap-2 items-center px-7">
          <FaArrowCircleDown size={30} />
          <div className="w-1/2 text-center">{score}</div>
          <FaArrowAltCircleUp size={30} color="#FF5700" />
        </div>
      </Link>
    </section>
  );
};

import React, { useState } from "react";
import defaultImg from "../../assets/Img/default_large.png";
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";

export const PopularList = ({ popular }) => {
  const { title, thumbnail, author, score, subreddit, selftext } = popular;

  return (
    <section className="flex gap-3 my-4 bg-lightGray rounded-md items-center w-full">
      <div className="w-1/6">
        {thumbnail.includes("https") ? (
          <div className="w-[160px] h-[120px]">
            <img src={thumbnail} alt="reddit" className="w-full h-full" />
          </div>
        ) : (
          <div className="w-[160px] h-[120px]">
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
    </section>
  );
};

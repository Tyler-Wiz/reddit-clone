import React from "react";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

export const PostComments = ({ post }) => {
  const { author, body, score } = post;

  return (
    <div className="flex my-10 gap-3">
      <img
        src="/Img/movies.jpeg"
        alt="post"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <div className="flex gap-3">
          <p className="font-medium">{author}</p>
          <p>24 Hours Ago</p>
        </div>
        <h3 className=" text-lg font-semibold my-3">{body}</h3>
        <div className="flex items-center gap-3">
          <FaCircleArrowUp color="#FF8b60" size={20} />
          <p>{score}</p>
          <FaCircleArrowDown color="#9494FF" size={20} />
        </div>
      </div>
    </div>
  );
};

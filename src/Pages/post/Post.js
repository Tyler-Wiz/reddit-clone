import React from "react";
import { useSelector } from "react-redux";
import { singlePost } from "../../features/post/PostSlice";
import { PostComments } from "./PostComments";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export const Post = () => {
  const { post, isLoading } = useSelector(singlePost);

  const location = useLocation();
  const postData = location.state;

  return (
    <div>
      <p className="font-medium"> r/{postData.subreddit}</p>
      <h3>
        by <span className="font-medium">{postData.author}</span>
      </h3>
      <h1 className=" text-4xl font-bold my-6">{postData.title}</h1>
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
          {post.map((item) => (
            <PostComments post={item} />
          ))}
        </>
      )}
    </div>
  );
};

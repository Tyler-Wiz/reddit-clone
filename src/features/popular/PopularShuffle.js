import React, { useState } from "react";
import { getPopular } from "./PopularSlice";
import { useDispatch } from "react-redux";
import { FaHotjar, FaClock, FaRocket, FaAward } from "react-icons/fa";

const subheader = [
  { name: "hot", icon: <FaHotjar /> },
  { name: "new", icon: <FaClock /> },
  { name: "top", icon: <FaAward /> },
  { name: "best", icon: <FaRocket /> },
  { name: "rising", icon: <FaRocket /> },
];

export const PopularShuffle = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState({
    activeIndex: "",
  });

  return (
    <div className="flex">
      {subheader.map((item, i) => {
        return (
          <button
            key={i}
            className={` px-5 py-1 mr-4 text-white font-bold flex items-center gap-2 ${
              isActive.activeIndex === i ? " bg-redditOrange" : "bg-neutral"
            }`}
            onClick={() => {
              dispatch(getPopular(item.name));
              setIsActive({ activeIndex: i });
            }}>
            {item.icon}
            <p className=" capitalize"> {item.name}</p>
          </button>
        );
      })}
    </div>
  );
};

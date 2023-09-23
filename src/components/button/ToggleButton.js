import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export const ToggleButton = ({
  isVisibleFirst,
  setIsVisibleFirst,
  isVisibleSecond,
  setIsVisibleSecond,
  header,
}) => {
  return (
    <button
      onClick={() => {
        if (header === "feed") {
          setIsVisibleFirst(!isVisibleFirst);
        } else {
          setIsVisibleSecond(!isVisibleSecond);
        }
      }}>
      {isVisibleFirst || isVisibleSecond ? (
        <div aria-label="open-menu">
          <BsChevronUp color="#000000" size={22} />
        </div>
      ) : (
        <div aria-label="close-menu">
          <BsChevronDown color="#000000" size={22} />
        </div>
      )}
    </button>
  );
};

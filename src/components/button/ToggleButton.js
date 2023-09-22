import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export const ToggleButton = () => {
  let isVisible = true;

  return (
    <>
      {isVisible && (
        <button>
          <BsChevronUp color="#000000" size={22} />
          <BsChevronDown color="#000000" size={22} />
        </button>
      )}
    </>
  );
};

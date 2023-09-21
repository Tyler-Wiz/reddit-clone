import React from "react";
import { BsSearch } from "react-icons/bs";

export const SearchForm = () => {
  return (
    <form className="w-1/2 relative">
      <label htmlFor="search"></label>
      <input
        id="search"
        className="w-[100%] bg-lightGray placeholder-black outline-none py-3 px-10 rounded-3xl text-xl"
        placeholder="Search"
      />
      <BsSearch className="absolute top-[33%] left-3 text-xl " />
    </form>
  );
};

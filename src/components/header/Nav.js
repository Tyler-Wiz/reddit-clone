import React from "react";
import { SearchForm } from "../search/SearchForm";
import logo from "../../assets/Img/Reddit-logo.png";
import { Button } from "../button/Button";

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full px-10 py-2 mb-4">
      <img src={logo} alt="reddit logo" className="w-28" />
      <SearchForm />
      <Button
        children="login"
        styles="bg-orangeRed text-lightBg px-5 py-2 rounded-3xl text-lg text-white capitalize font-bold text-center"
      />
    </nav>
  );
};

import React from "react";
import { favorites, multis, feeds } from "../../assets/data/data";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <section className="border-r-1 shadow-lg mr-10 px-10 py-10 h-full hover:overflow-y-auto">
      <section>
        <div className="flex justify-between items-center">
          <p className=" uppercase text-neutral font-bold ">Reddit Feeds</p>
        </div>
        {feeds.map((item) => (
          <ul>
            <NavLink to={item.path}>
              <li className="flex items-center gap-3 mt-4">
                <p className="cursor-pointer">{item.icon}</p>
                <p>{item.name}</p>
              </li>
            </NavLink>
          </ul>
        ))}
      </section>
      <section className="my-12">
        <div className="flex justify-between items-center mb-5">
          <p className=" uppercase text-neutral font-bold ">Favorites</p>
        </div>
        {favorites.map((item) => (
          <ul>
            <li className="flex items-center gap-3 justify-between mt-3">
              <div className="flex items-center gap-2 justify-between font-bold">
                <img src={item.image} alt="favorite Icon" className="w-10 " />
                <p>{item.name}</p>
              </div>
              <p className=" cursor-pointer">{item.icon}</p>
            </li>
          </ul>
        ))}
      </section>
      <section className="mb-20">
        <div className="flex justify-between items-center mb-6">
          <p className=" uppercase text-neutral font-bold ">multis</p>
        </div>
        {multis.map((item) => (
          <ul>
            <li className="font-bold flex items-center gap-3 mt-4">
              <p className="cursor-pointer">{item.icon}</p>
              <p>{item.name}</p>
            </li>
          </ul>
        ))}
      </section>
      <footer>&copy; Designed by Tyler Duncan</footer>
    </section>
  );
};

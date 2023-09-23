import React from "react";
import { favorites, multis, feeds } from "../../assets/data/data";
import { NavLink } from "react-router-dom";
import { Visibility } from "../../hooks/Visibility";
import { ToggleButton } from "../button/ToggleButton";
import { SidebarList } from "./SidebarList";

export const Sidebar = () => {
  const {
    isVisibleFirst,
    setIsVisibleFirst,
    isVisibleSecond,
    setIsVisibleSecond,
  } = Visibility();

  return (
    <section className="border-r-1 shadow-lg mr-10 px-10 py-10 h-full hover:overflow-y-auto">
      <section>
        <div className="flex justify-between items-center">
          <p className=" uppercase text-neutral font-bold ">Reddit Feeds</p>
          <ToggleButton
            isVisibleFirst={isVisibleFirst}
            setIsVisibleFirst={setIsVisibleFirst}
            header="feed"
          />
        </div>
        {isVisibleFirst && (
          <div aria-label="feeds-list">
            {feeds.map((item, i) => (
              <NavLink to={item.path} key={i}>
                <SidebarList item={item} />
              </NavLink>
            ))}
          </div>
        )}
      </section>
      <section className="my-12">
        <div className="flex justify-between items-center mb-5">
          <p className=" uppercase text-neutral font-bold ">Favorites</p>
          <ToggleButton
            isVisibleSecond={isVisibleSecond}
            setIsVisibleSecond={setIsVisibleSecond}
          />
        </div>
        {isVisibleSecond && (
          <div aria-label="favorites-list">
            {favorites.map((item, i) => (
              <li
                className="flex items-center gap-3 justify-between mt-3"
                key={i}>
                <div className="flex items-center gap-2 justify-between font-bold">
                  <img src={item.image} alt="favorite Icon" className="w-10 " />
                  <p>{item.name}</p>
                </div>
                <p className=" cursor-pointer">{item.icon}</p>
              </li>
            ))}
          </div>
        )}
      </section>
      <section className="mb-20">
        <div className="flex justify-between items-center mb-6">
          <p className=" uppercase text-neutral font-bold ">multis</p>
        </div>
        {multis.map((item, i) => (
          <ul key={i}>
            <SidebarList item={item} />
          </ul>
        ))}
      </section>
      <footer>&copy; Designed by Tyler Duncan</footer>
    </section>
  );
};

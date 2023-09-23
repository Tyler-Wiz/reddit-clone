import React from "react";

export const SidebarList = ({ item }) => {
  return (
    <li className="font-bold flex items-center gap-3 mt-4">
      <p className="cursor-pointer">{item.icon}</p>
      <p>{item.name}</p>
    </li>
  );
};

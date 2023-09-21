import React from "react";
import { Nav } from "../header/Nav";

export const Layout = ({ children }) => {
  return (
    <div>
      <header className="border-b-1 shadow-sm self-start sticky top-0">
        <Nav />
      </header>
      <div class="grid grid-cols-12">
        <aside class="self-start sticky top-0 col-span-3">Sidebar</aside>
        <main class="col-span-9 flex justify-between">
          <div>{children}</div>
          <aside>Sidebar</aside>
        </main>
      </div>
    </div>
  );
};

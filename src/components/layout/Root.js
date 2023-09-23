import { Outlet } from "react-router-dom";
import { Nav } from "../header/Nav";
import { Sidebar } from "../sidebar/Sidebar";

export const Root = () => {
  return (
    <div>
      <header className="border-b-1 shadow-sm sticky top-0 z-50 bg-white">
        <Nav />
      </header>
      <div className="flex justify-between relative">
        <aside className="fixed h-screen w-[22%]">
          <Sidebar />
        </aside>
        <main className="w-[78%] relative left-[22%] flex ">
          <section className="w-[70%] relative overflow-hidden z-10">
            <Outlet />
          </section>
          <aside className="fixed h-screen w-[25%] right-0 px-16">
            <p>aside</p>
          </aside>
        </main>
      </div>
    </div>
  );
};

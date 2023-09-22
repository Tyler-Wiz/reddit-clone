import { Outlet } from "react-router-dom";
import { Nav } from "../header/Nav";
import { Sidebar } from "../sidebar/Sidebar";

export const Root = () => {
  return (
    <div>
      <header className="border-b-1 shadow-sm self-start sticky top-0">
        <Nav />
      </header>
      <div className="flex justify-between relative">
        <aside className="fixed h-screen w-[22%]">
          <Sidebar />
        </aside>
        <main className="w-[78%] relative left-[22%] flex justify-between">
          <section className="w-[56%] relative">
            <Outlet />
          </section>
          <aside className="fixed h-screen w-[22%] right-0 px-10">
            <p>aside</p>
          </aside>
        </main>
      </div>
    </div>
  );
};
import { Outlet } from "react-router";
import { NavBar } from "./NavBar/NavBar";

function Layout() {
  return (
    <div className="app-theme min-h-[calc(100vh-70px)] min-w-[320px]">
      <NavBar />
      <main className="flex-center mx-auto mt-[70px] w-full max-w-[1200px]">
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;

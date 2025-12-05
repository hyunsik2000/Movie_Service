import { Outlet } from "react-router";
import { NavBar } from "./NavBar";

function Layout() {
  return (
    <div className="min-h-[calc(100vh-70px)] min-w-[320px] bg-[#141517] text-white">
      <NavBar />
      <main className="flex-center mx-auto mt-[70px] w-full max-w-[1200px]">
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;

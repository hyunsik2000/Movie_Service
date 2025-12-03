import { Outlet } from "react-router";
import { NavBar } from "./NavBar";

function Layout() {
  return (
    <div className="min-h-screen min-w-[320px] bg-[#141517] text-white">
      <NavBar />
      <main className="flex-center mt-[70px]">
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;

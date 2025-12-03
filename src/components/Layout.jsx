import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <main className="flex-center min-h-screen min-w-[320px] bg-[#141517] text-white">
        <Outlet />
      </main>
    </>
  );
}
export default Layout;

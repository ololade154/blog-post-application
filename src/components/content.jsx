import { NavBar } from "./navBar";
import { Home } from "./home";
import { Outlet } from "react-router-dom";
export const Content = () => {
  return (
    <div className="text-[#333] font-medium md:max-w-5xl mx-auto px-6 py-8 md:px-14 md:py-7 ">
      <NavBar />
      <div className="md:mt-10">
        <Outlet />
      </div>
    </div>
  );
};

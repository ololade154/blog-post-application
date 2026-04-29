import { NavBar } from "./navBar";
import { Home } from "./home";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export const Content = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="text-[#333] font-medium md:max-w-5xl mx-auto px-6 py-8 md:px-14 md:py-7 ">
      <NavBar />
      <div className="md:mt-10">
        <Outlet context={{ posts, setPosts }} />
      </div>
    </div>
  );
};

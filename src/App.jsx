import { Home } from "./components/home";
import { NavBar } from "./components/navBar";

export const App = () => {
  return (
    <div className="text-[#333] font-medium md:max-w-5xl mx-auto px-6 py-8 md:px-14 md:py-7">
      <NavBar />
      <div>
        <Home />
      </div>
    </div>
  );
};

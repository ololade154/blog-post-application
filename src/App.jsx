import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/home";
import { NewBlog } from "./components/newBlog";
import { Content } from "./components/content";
import { Test } from "./components/test";
import { Header } from "./components/header";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Home />} />
          <Route path="newblog" element={<NewBlog />} />
          <Route path="test" element={<Test />} />
          <Route path="header" element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

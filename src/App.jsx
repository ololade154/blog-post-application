import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/home";
import { Content } from "./components/content";
import { Create } from "./components/create";
import { BlogDetails } from "./components/blogDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

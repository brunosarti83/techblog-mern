import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import AddBlog from "./pages/AddBlog/AddBlog";
import EditBlog from "./pages/EditBlog/EditBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/blog/:id"} element={<Blog />} />
        <Route path={"/add"} element={<AddBlog />} />
        <Route path={"/edit/:id"} element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import AddBlog from "./pages/AddBlog/AddBlog";
import EditBlog from "./pages/EditBlog/EditBlog";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path={"/blog/:id"}
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path={"/add"}
          element={
            <Layout>
              <AddBlog />
            </Layout>
          }
        />
        <Route
          path={"/edit/:id"}
          element={
            <Layout>
              <EditBlog />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

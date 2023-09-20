import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import Layout from "../component/Layout";
import About from "../page/About";
import Stat from "../page/Stat";
import Resume from "../page/Resume";
import Blog from "../page/Blog";

const AppRouter = () => (
  //   <BrowserRouter basename={PUBLIC_URL}>
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/stat"
        element={
          <Layout>
            <Stat />
          </Layout>
        }
      />
      <Route
        path="/resume"
        element={
          <Layout>
            <Resume />
          </Layout>
        }
      />
      <Route
        path="/blog"
        element={
          <Layout>
            <Blog />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

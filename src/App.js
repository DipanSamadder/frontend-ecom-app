import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Forget from "./pages/Forget";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurStore from "./pages/OurStore";
import ProductCompare from "./pages/ProductCompare";
import Reset from "./pages/Reset";
import Signup from "./pages/Signup";
import SingleBlog from "./pages/SingleBlog";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog:id" element={<SingleBlog />} />
          <Route path="compare" element={<ProductCompare />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forget" element={<Forget />} />
          <Route path="reset" element={<Reset />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

export default function MyRouter() {
  return (
    <Routes>
      {/* Login Page (No Navigation/Header) */}
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />

      {/* Pages with Navigation/Header Layout */}
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
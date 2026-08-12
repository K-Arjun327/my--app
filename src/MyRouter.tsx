import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Journals from "./Journals";
import Category from "./Category";
import Author from "./Author";
import AuthorDetail from "./AuthorDetail";
import NewArrivals from "./NewArrivals";
import Contact from "./Contact";
import Profile from "./Profile";

export default function MyRouter() {
  return (
    <Routes>
      {/* Main Store Pages Wrapped in Layout (Header + Nav + Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="new-arrivals" element={<NewArrivals />} />
        <Route path="category" element={<Category />} />
        <Route path="journals" element={<Journals />} />
        <Route path="author" element={<Author />} />
        <Route path="author/:name" element={<AuthorDetail />} />
        <Route path="author-detail" element={<AuthorDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Independent Login Page */}
      <Route path="login" element={<Login />} />

      {/* Catch-all fallback redirect */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
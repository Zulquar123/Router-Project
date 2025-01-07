
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import About from "./About";
import UserDetails from "./UserDetails";
import PageError from "./PageError";

export default function Routing() {
  const loader = () => {
    fetch("https://jsonplaceholder.typicode.com/users");
  };
  return (
    <>
      <Routes>
        <Route path="*" element={<PageError />} />
        <Route path="/" element={<Home />} />
        <Route path="/user" loader={loader} element={<User />} />
        <Route path="/user/:name" element={<UserDetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}


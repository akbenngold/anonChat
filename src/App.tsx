import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageSquareDots } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <div className="btm-nav">
        <NavLink to="/settings">
          <IoSettingsOutline />
          <span className="btm-nav-label">Settings</span>
        </NavLink>
        <NavLink to="/messages">
          <BiMessageSquareDots />
          <span className="btm-nav-label">Messages</span>
        </NavLink>
        <NavLink to="/profile">
          <CgProfile />
          <span className="btm-nav-label">Profile</span>
        </NavLink>
      </div>
    </>
  );
};

export default App;

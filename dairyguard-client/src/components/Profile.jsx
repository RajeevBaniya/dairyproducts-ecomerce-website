import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  const {logOut} = useContext(AuthContext)
  const handleLogout = () => {
    logOut().then(() => {
      // Sign-out successful.
      alert("Logout successfull")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user.photoURL ? (
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              ) : (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-green text-white  min-h-half  w-80 mt-20 shadow-2xl border  border-gray-300 rounded-40">
            {/* Sidebar content here */}
            <li>
              <a href="/update-profile">Profile</a>
            </li>
            <li>
              <a href="/order">Order</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

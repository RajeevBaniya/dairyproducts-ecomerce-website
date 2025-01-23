import React from "react";
import {
  FaEdit,
  FaLocationArrow,
  FaPlusCircle,
  FaQuestionCircle,
  FaRegUser,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";

import logo from "/logo.svg";
import { FaCartShopping } from "react-icons/fa6";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/" className="flex items-center">
        <MdDashboard className="mr-2" />
        Home
      </Link>
    </li>
    <li>
      <Link to="/menu" className="flex items-center">
        <FaCartShopping className="mr-2" />
        Menu
      </Link>
    </li>
    <li>
      <Link to="/menu" className="flex items-center">
        <FaLocationArrow className="mr-2" />
        Orders Tracking
      </Link>
    </li>
    <li>
      <Link to="/menu" className="flex items-center">
        <FaQuestionCircle className="mr-2" />
        Customer Support
      </Link>
    </li>
  </>
);

const DashboardLayout = () => {
  return (
    <div className="bg-white">
      {/* Set background color to white or any other color */}
      <div className="drawer sm:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary h-2 drawer-button lg:hidden "
            >
              <AiOutlineMenuFold />
            </label>
            <button className="btn rounded-full px-6 bg-green flex items-center gap-2 text-white sm:hidden">
              <FaRegUser /> Logout
            </button>
          </div>
          <div className="mt-5 md:mt-2 mx-4 ">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-gray-200  text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex items-center mb-3">
               <p className="font-bold text-xl text-green ">DAIRY DIRECT</p>
                <img src={logo} alt="" />
                <span className="badge badge-primary text-yellow-200 ml-2">
                  Admin
                </span>
              </Link>
            </li>
            <hr />
            <li className="mt-3">
              <Link to="/dashboard" className="flex items-center">
                <MdDashboard className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center">
                <FaShoppingBag className="mr-2" />
                Manage Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center">
                <FaPlusCircle className="mr-2" />
                Add items
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center">
                <FaEdit className="mr-2" />
                Manage Items
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/dashboard/users" className="flex items-center">
                <FaUser className="mr-2" />
                All Users
              </Link>
            </li>

            <hr />

            {/* shared nav links */}
            {sharedLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

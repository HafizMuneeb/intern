import React, { useState } from "react";
import { FaDribbble } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="h-8 w-auto mr-2"
            src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="hidden lg:flex items-start space-x-4">
          <a
            href="/"
            onClick={() => handleMenuClick("home")}
            className={`text-gray-200 hover:text-white ${
              activeMenu === "home" && "underline"
            }`}
          >
            Home
          </a>
          <a
            href="/portfolio"
            onClick={() => handleMenuClick("portfolio")}
            className={`text-gray-200 hover:text-white ${
              activeMenu === "portfolio" && "underline"
            }`}
          >
            Portfolio
          </a>
          <a
            href="/contact-us"
            onClick={() => handleMenuClick("contact")}
            className={`text-gray-200 hover:text-white ${
              activeMenu === "contact" && "underline"
            }`}
          >
            Contact Us
          </a>
          {/* Removed menu item 2 */}
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                fillRule="evenodd"
                d="M3 9h14a1 1 0 010 2H3a1 1 0 010-2zm0-4h14a1 1 0 010 2H3a1 1 0 010-2zm0 8h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showMenu && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
              <div className="bg-transparent p-4 rounded-lg w-full max-w-md">
                <div className="absolute top-0 right-0 p-2">
                  <button
                    onClick={toggleMenu}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Close</title>
                      <path
                        fillRule="evenodd"
                        d="M14.35 5.64a1 1 0 0 1 1.42 1.42L11.41 10l4.36 4.36a1 1 0 0 1-1.42 1.42L10 11.41l-4.36 4.36a1 1 0 0 1-1.42-1.42L8.59 10 4.23 5.64a1 1 0 0 1 1.42-1.42L10 8.59l4.36-4.36z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-center mb-4">
                  <a
                    href="/"
                    onClick={() => handleMenuClick("home")}
                    className={`block my-2 text-xl hover:text-gray-600 ${
                      activeMenu === "home" && "underline"
                    }`}
                  >
                    Home
                  </a>
                  <a
                    href="/portfolio"
                    onClick={() => handleMenuClick("portfolio")}
                    className={`block my-2 text-xl hover:text-gray-600 ${
                      activeMenu === "portfolio" && "underline"
                    }`}
                  >
                    Portfolio
                  </a>
                  <a
                    href="/contact-us"
                    onClick={() => handleMenuClick("contact")}
                    className={`block my-2 text-xl hover:text-gray-600 ${
                      activeMenu === "contact" && "underline"
                    }`}
                  >
                    Contact Us
                  </a>
                  {/* Removed menu item 2 */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" lg:block">
          <div className="flex justify-center items-center">
            <button className="bg-[#2d2e32] text-[#ffaf29] hover:bg-[#ffaf29] hover:text-[#2d2e32] text-lg font-bold  py-4 px-6 rounded-[14px] mr-2">
              <i className="flex justify-center items-center">
                <FaDribbble className="w-full h-full py-1" />
              </i>
            </button>
            <button className="bg-[#ffaf29] hover:bg-[#ffaf29] text-black  py-4 px-14 rounded-[14px] mr-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

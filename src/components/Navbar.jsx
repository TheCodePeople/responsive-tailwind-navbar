import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const links = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Home",
    },
  ];

  return (
    <>
      <div className="w-full bg-coffee-pot-dark py-2 px-14 flex justify-between items-center flex-col gap-y-6 z-10 relative">
        <div className="flex justify-between w-full">
          <div id="nav-left-content">
            <img
              className="w-14"
              src="https://static.vecteezy.com/system/resources/thumbnails/026/748/723/small/cute-watercolor-flamingo-with-tropical-flowers-isolated-png.png"
              alt=""
            />
          </div>
          <div id="nav-right-content" className="">
            <IoMenu
              onClick={toggleMobileMenu}
              className={`text-dusty-rose w-12 cursor-pointer lg:hidden`}
              size="40px"
            />
            {/* Desktop */}
            <div className={`hidden lg:block`}>
              <ul className="flex gap-x-4">
                {links.map((link) => (
                  <li key={link.id}>{link.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive menu */}
      <div
        className={`w-full bg-coffee-pot-dark transform ${
          isMobileMenuOpen
            ? "translate-y-0 transition duration-1000 ease-in-out"
            : "-translate-y-28 transition duration-700 ease-in-out"
        } lg:hidden`}
      >
        <ul className="py-5 flex flex-col gap-y-4 px-10">
          {links.map((link) => (
            <li key={link.id}>{link.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

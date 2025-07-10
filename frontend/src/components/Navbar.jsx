import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

// react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user } = useContext(AuthContext);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //navigation
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "People", path: "/people" },
    {
      link: "Project",
      path: "/project",
      submenu: [
        { link: "Ayurveda", path: "/project/ayurveda" },
        { link: "Kala", path: "/project/kala" },
        { link: "Darsana", path: "/project/darsana" },
        { link: "Ganita", path: "/project/ganita" },
        { link: "Niti", path: "/project/niti" },
      ],
    },
    { link: "Activity", path: "/activity" },
    { link: "Library", path: "/library" },
    { link: "Contact us", path: "/contactus" },
    { link: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="fixed top-0 right-0 w-full text-3xl font-bold transition-all duration-200 ease-in bg-transparent ">
      <nav
        className={`py-1 lg:px-14 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-amber-600" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-8 p-4 text-base">
          {/*logo*/}
          <Link
            to="/"
            className="flex items-center gap-4 text-3xl font-bold text-blue-700 cursor-pointer"
          ></Link>

          {/* nav item for large device*/}
          <ul className="hidden ml-32 space-x-12 md:flex">
            {navItems.map(({ link, path, submenu }) => (
              <li key={path} className="relative group">
                <Link
                  to={path}
                  className="block text-xl text-black cursor-pointer hover:text-blue-900"
                  onMouseEnter={() => submenu && setDropdownOpen(true)}
                  onMouseLeave={() => submenu && setDropdownOpen(false)}
                >
                  {link}
                </Link>

                {/* Dropdown */}
                {submenu && (
                  <ul className="absolute left-0 z-10 hidden p-2 space-y-2 text-xl bg-white border shadow group-hover:block">
                    {submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-2 text-blue-900 hover:bg-blue-100"
                      >
                        {sub.link}
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/*btn for lg devices */}
          <div className="items-center hidden space-x-12 lg:flex">
            <button>
              <FaBarsStaggered className="w-5 cursor-pointer hover:text-blue-700" />
            </button>
          </div>
          {/* menu btn for the mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black cursor-pointer focus:outline-none "
            >
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5 text-black" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* navitems for sm devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

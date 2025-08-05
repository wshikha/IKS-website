import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav
        className={`py-2 lg:px-14 px-4 transition-all duration-300 ${
          isSticky ? "bg-amber-700 shadow-md" : "bg-amber-700"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="logo (2).jpg"
              alt="Logo"
              className="object-contain w-12 h-12 p-1 bg-white rounded-full shadow-md"
            />
            <span className="text-lg font-semibold tracking-wide text-white">
              ŚIKṢĀ - IKS IITK
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden space-x-6 md:flex">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-lg font-medium text-white transition hover:text-yellow-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5 text-white" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={`md:hidden transition-all duration-300 bg-amber-700 px-4 py-4 absolute top-14 left-0 w-full shadow-md ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-lg font-medium text-white hover:text-yellow-200"
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

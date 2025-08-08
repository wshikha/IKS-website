import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConferenceOpen, setIsConferenceOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsAboutOpen(false);
      setIsConferenceOpen(false);
      setIsMembershipOpen(false);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleAbout = () => setIsAboutOpen((prev) => !prev);
  const toggleConference = () => setIsConferenceOpen((prev) => !prev);
  const toggleMembership = () => setIsMembershipOpen((prev) => !prev);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsConferenceOpen(false);
    setIsMembershipOpen(false);
  };

  const navItems = [
    { link: "Early Career Site", path: "/early-career" },
    { link: "Contact Us", path: "/contactus" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-[#11747C]">
      <nav className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <Link to="/" className="text-3xl font-bold text-[#11747C]">
          BioMedEng
        </Link>

        <ul className="items-center hidden gap-6 text-xl font-bold text-[#11747C] md:flex">
          {/* About Dropdown */}
          <li className="relative">
            <button onClick={toggleAbout} className="px-2 hover:underline">
              About
            </button>
            {isAboutOpen && (
              <ul className="absolute left-0 z-20 w-56 py-2 mt-2 bg-white border rounded-md shadow-lg border-[#11747C]">
                <li>
                  <Link
                    to="/about"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/committee"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    Committee
                  </Link>
                </li>
                <li>
                  <Link
                    to="/corporatesponsorship"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    Corporate Sponsorship
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Conference Dropdown */}
          <li className="relative">
            <button onClick={toggleConference} className="px-2 hover:underline">
              Conference
            </button>
            {isConferenceOpen && (
              <ul className="absolute left-0 z-20 w-56 py-2 mt-2 bg-white border rounded-md shadow-lg border-[#11747C]">
                <li>
                  <Link
                    to="/biomedeng"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    BioMedEng2025
                  </Link>
                </li>
                <li>
                  <Link
                    to="/conferences"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    Past Conferences
                  </Link>
                </li>
                <li>
                  <Link
                    to="/awards"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    Awards
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Membership Dropdown */}
          <li className="relative">
            <button onClick={toggleMembership} className="px-2 hover:underline">
              Membership
            </button>
            {isMembershipOpen && (
              <ul className="absolute left-0 z-20 w-64 py-2 mt-2 bg-white border rounded-md shadow-lg border-[#11747C]">
                <li>
                  <Link
                    to="/joinbiomedeng"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    Join BioMedEng
                  </Link>
                </li>
                <li>
                  <Link
                    to="/memberlogin"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    Member Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/intellectualproperty"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-[#11747C] hover:text-white"
                  >
                    Intellectual Property Right
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Remaining items */}
          {navItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              <Link
                to={item.path}
                onClick={handleLinkClick}
                className="px-2 hover:underline"
              >
                {item.link}
              </Link>
              {index !== navItems.length - 1 && (
                <span className="mx-1 text-gray-300">|</span>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block text-[#11747C]">
          <FaSearch className="w-5 h-5 cursor-pointer" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-[#11747C]" />
            ) : (
              <FaBarsStaggered className="w-6 h-6 text-[#11747C]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white px-4 pt-2 pb-4 border-t border-[#11747C] ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* About */}
        <div>
          <button
            onClick={toggleAbout}
            className="block w-full py-2 text-left text-base font-medium text-[#11747C]"
          >
            About
          </button>
          {isAboutOpen && (
            <div className="pl-4">
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                About Us
              </Link>
              <Link
                to="/committee"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                Committee
              </Link>
              <Link
                to="/corporatesponsorship"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                Corporate Sponsorship
              </Link>
            </div>
          )}
        </div>

        {/* Conference */}
        <div>
          <button
            onClick={toggleConference}
            className="block w-full py-2 text-left text-base font-medium text-[#11747C]"
          >
            Conference
          </button>
          {isConferenceOpen && (
            <div className="pl-4">
              <Link
                to="/biomedeng"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                BioMedEng2025
              </Link>
              <Link
                to="/conferences"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                Conferences
              </Link>
              <Link
                to="/awards"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                Awards
              </Link>
            </div>
          )}
        </div>

        {/* Membership */}
        <div>
          <button
            onClick={toggleMembership}
            className="block w-full py-2 text-left text-base font-medium text-[#11747C]"
          >
            Membership
          </button>
          {isMembershipOpen && (
            <div className="pl-4">
              <Link
                to="/joinbiomedeng"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                Join BioMedEng
              </Link>
              <Link
                to="/memberlogin"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                Member Login
              </Link>
              <Link
                to="/intellectualproperty"
                onClick={handleLinkClick}
                className="block py-1 text-sm text-[#11747C]"
              >
                Intellectual Property Right
              </Link>
            </div>
          )}
        </div>

        {/* Remaining links */}
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            onClick={handleLinkClick}
            className="block py-2 text-base font-medium text-[#11747C] border-b border-gray-200"
          >
            {link}
          </Link>
        ))}

        <div className="pt-2">
          <FaSearch className="w-5 h-5 text-[#11747C]" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

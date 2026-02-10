import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
// With NavLink, we can pass a function to the className prop. This function receives an object with a property called isActive. If the link is active, isActive will be true, and we can apply the active class. Otherwise, we apply the base class.
import { FaLaptopCode } from "react-icons/fa";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = "transition hover:text-blue-400";
  const active = "text-blue-400 font-semibold";
  return (
    <>
      <nav className="bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink
            to="/" //directs to the homepage when clicked
            className="flex items-center gap-2 text-lg font-bold text-blue-300"
          >
            <FaLaptopCode className="text-blue-400 text-xl" />
            <span>Atharva Tamta : Fullstack Developer</span>
          </NavLink>
          {/* nav for desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="space-x-4 text-sm text-gray-300">
              <NavLink
                className={({ isActive }) => (isActive ? active : base)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? active : base)}
                to="/projects"
              >
                Projects
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? active : base)}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? active : base)}
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
          {/* nav for mobile navigation */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-blue-400 text-xl"
              title="Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : base)}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? active : base)}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? active : base)}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? active : base)}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? active : base)}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

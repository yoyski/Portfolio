import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ dark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "relative px-4 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 text-gray-900 dark:text-gray-100 border border-emerald-200 dark:border-emerald-800"
      : "relative px-4 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors";

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md py-3 px-6 
                    bg-white/80 dark:bg-slate-900/80 
                    border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex items-center justify-between md:max-w-3xl lg:max-w-6xl xl:max-w-[80rem]">

        {/* LOGO */}
        <NavLink
          to="/about"
          className="font-bold text-gray-900 dark:text-gray-100 tracking-tight text-lg"
          style={{ letterSpacing: "-0.02em" }}
          onClick={closeMenu}
        >
          Portfolio
        </NavLink>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleDark}
            className="flex items-center justify-center w-9 h-9 rounded-lg 
                       border border-gray-200 dark:border-gray-700 
                       bg-gray-50 dark:bg-gray-800/50 
                       text-gray-700 dark:text-gray-300 
                       hover:bg-gray-100 dark:hover:bg-gray-700/50 
                       transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            )}
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg 
                       border border-gray-200 dark:border-gray-700 
                       bg-gray-50 dark:bg-gray-800/50 
                       text-gray-700 dark:text-gray-300 
                       hover:bg-gray-100 dark:hover:bg-gray-700/50 
                       transition-colors gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className="block w-4 h-0.5 bg-current transition-transform"
              style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }}
            />
            <span
              className="block w-4 h-0.5 bg-current transition-opacity"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-4 h-0.5 bg-current transition-transform"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-3 rounded-xl overflow-hidden 
                        border border-gray-200 dark:border-gray-700 
                        bg-white/95 dark:bg-[#1e1e2e]/95 
                        backdrop-blur-md shadow-lg">
          <ul className="flex flex-col py-2">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 text-gray-900 dark:text-gray-100 border-l-2 border-emerald-500"
                      : "block px-5 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
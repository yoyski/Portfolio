import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation.jsx";
import Chatbot from "./components/Chatbot.jsx";

export default function Layout() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <main
      className={`${dark ? "dark" : ""} min-h-screen bg-emerald-50 dark:bg-slate-900`}
    >
      <Navbar dark={dark} toggleDark={toggleDark} />
      <div className="pt-20">
        <Outlet />
      </div>
      <Chatbot />
    </main>
  );
}

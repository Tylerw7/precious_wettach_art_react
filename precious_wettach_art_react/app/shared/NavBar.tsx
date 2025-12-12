import React from "react";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
  const [showTopBar, setShowTopBar] = useState(true); // for NAP bar
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);

      // Show top bar only when at very top of page
      setShowTopBar(currentScrollY === 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);




  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Promo Bar */}
      {showTopBar && (
        <div className="bg-blue-600 h-10 text-white text-center py-2 text-sm">
          📢 Join the NAP today! Special offer ends soon.
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`bg-white shadow transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 h-[80px] flex justify-between items-center">
          <h1 className="text-xl font-bold">Logo</h1>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

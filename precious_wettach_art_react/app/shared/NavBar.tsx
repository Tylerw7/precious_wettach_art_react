import { useState, useEffect } from "react";
import { useAppSelector } from "../store/store";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useFetchBasketQuery } from "../pages/Basket/basketApi";
import React from "react";
import { UserMenu } from "./UserMenu";





const NavBar = () => {
  const user = {email: 'test@test.com', roles: []};
  const [showNavbar, setShowNavbar] = useState(true);
  const [showTopBar, setShowTopBar] = useState(true); // for NAP bar
  const [lastScrollY, setLastScrollY] = useState(0);

  //Redux State
  const {isLoading} = useAppSelector(state => state.ui);
  const {data} = useFetchBasketQuery();

  // Number of items in our basket
  const itemCount = data?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;


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
          <ul className="flex gap-4 text-[1.1rem]">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-10">
            <div className="relative">
              <Link to="/basket"><GiShoppingBag size={25}/></Link>
              <div className="absolute top-4 -right-1 flex justify-center items-center w-[15px] h-[15px] rounded-full bg-red-400 text-[.8rem]">{itemCount}</div>
            </div>  

            <div className="flex gap-4 font-bold text-[1.1rem]">
              {user ? (
                  <UserMenu user={user}/>
              ) : (
                <>
                <h2><Link to="/login">LOGIN</Link></h2>
                <h2>REGISTER</h2>
                </>
              )}
            </div>
          </div>

        </div>
      </nav>


      {/* Loading bar starts here */}
     { isLoading && (
        <div className="w-screen h-1 bg-gray-200 overflow-hidden z-50">
          <div
            className="
              absolute h-[3px] w-1/3 bg-black
              animate-[loading_1.2s_infinite_linear]
            "
          />

          <style>{`
            @keyframes loading {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(300%); }
            }
          `}</style>
        </div>
      )}
    </div>
  )
}

export default NavBar

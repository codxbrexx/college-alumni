import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

function Header() {
  return (
    <header className="w-full bg-white shadow-md overflow-x-hidden">
      <div className="flex items-center justify-between px-4 py-2 md:py-4 w-full min-w-0">
        <div className="flex-shrink-0 flex items-center min-w-0">
          <div className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48">
            <Logo />
          </div>
        </div>

        {/* except small devices */}
        <div className="hidden md:flex flex-1 items-center justify-center ml-8 min-w-0">
          <Navbar />
        </div>
        <div className="flex items-center ml-4 min-w-0">
          <Profile />
        </div>
      </div>
      {/* small devices nav */}
      <div className="block md:hidden px-4 pb-2">
        <Navbar navClass="flex items-center justify-center gap-2 text-xs" />
      </div>
    </header>
  );
}

export default Header;

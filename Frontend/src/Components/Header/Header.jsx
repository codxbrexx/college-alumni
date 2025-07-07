import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <>
      <div className="flex justify-evenly w-screen h-20">
        <div className="flex justify-center items-center">
            <Logo />
        </div>
        <div className="flex justify-center items-center">
            <Navbar />
        </div>
        <div className="flex justify-center items-center">
            <Profile />
        </div>
      </div>
    </>
  );
}

export default Header;

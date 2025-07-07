import React from "react";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <>
      <div className="bg-[#252641]">
        <div className="flex justify-center items-center">
          <div>
            <img className="size-40" src="public/NetGrudDarkTheme.png" alt="" />
          </div>
          <div className="w-0.5 h-10 bg-[#626381]"> </div>
          <div className="w-45 text-center text-white">
            <p>Alumni Connect App</p>
          </div>
        </div>

        <div className="flex-col justify-center items-center h-20">
            <div className="flex justify-center gap-4 items-center text-[#B2B3CF]">
                <div><p>Careers</p></div>
                <div className="w-0.5 h-3 bg-[#626381]"> </div>
                <div><p>Privacy Policy</p></div>
                <div className="w-0.5 h-3 bg-[#626381]"> </div>
                <div><p>Terms and Conditions</p></div>
            </div>
            <div className="flex justify-center text-[#B2B3CF]">
                <p>© 2025 Net Grud Inc. </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

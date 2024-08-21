import React, { useEffect, useState } from "react";
import { FaRegCopy, FaUserAstronaut } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { TbBox } from "react-icons/tb";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

function LeftSide() {
  const [bgColor, setBgColor] = useState(true);
  const [navBarHumBurgur, setNavBarHumBurgur] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#F8FAFC] h-[300vh] flex-direction-row justify-between flex flex-col gap-7 my-5 py-3 px-3 items-center ml-5 rounded-2xl">
      <div className="logo text-[1.2rem] font-bold">ZuAi</div>
      <div className={`${isMobileView ? "block" : "hidden"}`}>
        {navBarHumBurgur ? (
          <RxCross1
            onClick={() => setNavBarHumBurgur(false)}
            className="ham-burgur display-B"
          />
        ) : (
          <RiMenu3Line
            onClick={() => setNavBarHumBurgur(true)}
            className="ham-burgur display-B"
          />
        )}
      </div>
      {(!isMobileView || navBarHumBurgur) && (
        <div className="flex-direction-row navbar-M text-3xl flex flex-col gap-7">
          <TbBox
            style={
              bgColor && {
                backgroundColor: "blue",
                borderRadius: "20px",
                color: "white",
                padding: "5px",
              }
            }
          />
          <BsBookmarks style={{ color: "#3D3C40" }} />
          <FaRegCopy style={{ color: "#3D3C40" }} />
          <MdOutlineLibraryBooks style={{ color: "#3D3C40" }} />
        </div>
      )}
      <FaUserAstronaut
        style={{
          position: "absolute",
          bottom: "45px",
          fontSize: "1.8rem",
          color: "#DFB397",
        }}
      />
    </div>
  );
}

export default LeftSide;

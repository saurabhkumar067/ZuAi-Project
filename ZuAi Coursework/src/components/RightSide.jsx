import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { GrCopy } from "react-icons/gr";
import { BsCalendar2Check } from "react-icons/bs";
import { MdLocalFireDepartment } from "react-icons/md";

function RightSide() {
  return (
    <div className="text-2xl display-M flex flex-col items-center gap-5 pt-5 px-3 text-[#777C88]">
      <div className="bg-[#FFFFFF] px-2 rounded-full text-xl flex items-center gap-1">
        <FaBitcoin style={{ color: "#D38A29" }} />
        120
      </div>

      <div className="bg-[#FFFFFF] px-2 rounded-full text-xl flex items-center gap-1">
        <MdLocalFireDepartment style={{ color: "#FF7A1A" }} />
        24
      </div>

      <div className="bg-[#FFFFFF] p-2 rounded-full ">
        <BsCalendar2Check />
      </div>

      <div className="bg-[#FFFFFF] p-2 rounded-full">
        <GrCopy />
      </div>
    </div>
  );
}

export default RightSide;

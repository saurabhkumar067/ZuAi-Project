import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { BsWatch } from "react-icons/bs";
import { FaAd } from "react-icons/fa";
import PessageImage from "../assets/book passage.webp";

function MyWork() {
  return (
    <div className="flex gap-2 Margin-Bottom">
      <div className="box justify-between flex border-[1px] p-2 gap-3 rounded-2xl bg-[#F5F4F1]">
        <div className="image w-1/2 bg-[#FFFFFF] display">
          <img src={PessageImage} alt="Book" />
        </div>
        <div>
          <h2 className="text-2xl media-font font-semibold text-[#474A54]">
            How does the temperature of a Copp..
          </h2>
          <p className="text-sm my-3 text-[#AFB4C0]">
            How dows the tempeature of a Copper pipe affect the time it takes a
            magent t..
          </p>
          <div className="flex gap-2 flex-wrap ">
            <div className="px-3 py-0.5 text-center rounded-full bg-[#FFFFFF] text-[#5D6372] flex gap-0.5 items-center">
              <FaUserTie />
              Physics HL
            </div>
            <div className="px-2 py-0.5 border-[1px] text-center rounded-full  bg-[#FFFFFF] text-[#5D6372] flex gap-0.5 items-center">
              <BsWatch />
              18 min read
            </div>

            <div className="px-2 py-0.5 border-[1px] text-center rounded-full  bg-[#FFFFFF] text-[#5D6372] flex gap-0.5 items-center">
              <FaAd />
              2388 words
            </div>
            <div className="px-2 py-0.5 border-[1px] text-center rounded-full  bg-[#FFFFFF] text-[#5D6372] flex gap-0.5 items-center">
              <IoStarSharp style={{ color: "#EEAC07" }} />
              7/7
            </div>
            <div className="px-2 py-0.5 border-[1px] text-center rounded-full  bg-[#FFFFFF] text-[#5D6372] flex gap-0.5 items-center">
              <GiTakeMyMoney /> English
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;

import React from "react";
import UserImage from "../assets/user.png";
import AGradeImage from "../assets/A+ grade page.png";

function MainPageRight() {
  return (
    <div className="relative">
      <div>
        <div >
          <img src={UserImage} alt="User Image" />
        </div>

        <div className="rounded-2xl bg-[#FBFAFD] absolute top-[120px]">
          <div className=" text-[#6A48BF] text-4xl font-bold py-3 px-5">
            Evaluate your Coursework with a single click
          </div>

          <div>
            <img
              src={AGradeImage}
              className="h-[45vh] w-full object-contain"
              alt="A+ Grade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageRight;

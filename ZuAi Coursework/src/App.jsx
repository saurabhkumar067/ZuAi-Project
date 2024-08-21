import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="flex display-B bg-[#E5ECF3] min-height-M h-full w-full relative">
      <LeftSide />
      <MainPage />
      <RightSide />
    </div>
  );
}

export default App;

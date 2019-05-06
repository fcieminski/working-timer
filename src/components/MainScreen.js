import React from "react";
import Header from "./Header";
import TimeCounter from "./TimeCounter";
import TimeTracker from "./TimeTracker";

const MainScreen = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <TimeCounter />
        <TimeTracker />
      </div>
    </div>
  );
};

export default MainScreen;

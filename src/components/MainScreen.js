import React from "react";
import Header from "./Header";
import TimeCounter from "./TimeCounter";
import TimeTracker from "./TimeTracker";
import WorkCountdown from "./WorkCountdown";

const MainScreen = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <TimeCounter />
        <TimeTracker />
        <WorkCountdown />
      </div>
    </div>
  );
};

export default MainScreen;

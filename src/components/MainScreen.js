import React from "react";
import Header from "./Header";
import TimeCounter from "./TimeCounter";

function MainScreen() {
  return (
    <div>
      <Header />
      <div className="main">
        <TimeCounter />
      </div>
    </div>
  );
}

export default MainScreen;

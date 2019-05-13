import React from "react";
import Header from "./Header";
import heroimage from "../img/people.png";
import TimeCounter from "./TimeCounter";
import TimeTracker from "./TimeTracker";
import WorkCountdown from "./WorkCountdown";

const MainScreen = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="main__container">
          <div className="container__herotext">
            <h1>Lorem import from "module";</h1>
          </div>
          <div className="container__heroimage">
            <img src={heroimage} />
          </div>
        </section>
        <div className="container__line" />
        <section className="main__container--features">
          <div className="features__box">
            <h2>hello heloo</h2>
            <p>eloelohelo</p>
          </div>
          <div className="features__box">
            <h2>hello heloo</h2>
            <p>eloelohelo</p>
          </div>
          <div className="features__box">
            <h2>hello heloo</h2>
            <p>eloelohelo</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainScreen;

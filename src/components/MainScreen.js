import React from "react";
import Header from "./Header";
import heroimage from "../img/people.png";
import { FiClock } from "react-icons/fi";
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
            <h1 className="herotext__h1">
              Timey pomoże Ci z Twoją produktywnością
            </h1>
            <p className="herotext__paragraph">
              Timey to szybkie narzędzie do śledzenia czasu pracy
            </p>
            <div className="herotext__links">
              <a className="links__link links__link--active" href="#">
                Zaloguj się
              </a>
              <a className="links__link" href="#">
                Rozpocznij bez logowania
              </a>
            </div>
          </div>
          <div className="container__heroimage">
            <img src={heroimage} />
          </div>
        </section>

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

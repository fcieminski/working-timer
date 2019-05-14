import React from "react";
import Header from "./Header";
import heroimage from "../img/people.png";
import laptop from "../img/responsive.png";
import { FiClock } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";
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
            <FiPlay className="features__box--icon" />
            <h2 className="features__box--h2">Rozpocznij swoje zadanie</h2>
            <p className="features__box--paragraph">
              ustal czas, w którym zajmiesz się jedynie swoim zadaniem. Niech
              nikt Ci nie przeszkadza!
            </p>
          </div>
          <div className="features__box">
            <FiClock className="features__box--icon" />
            <h2 className="features__box--h2">Śledź czas pracy</h2>
            <p className="features__box--paragraph">
              po zalogowaniu, otrzymasz dostęp do podsumowania czasu pracy
            </p>
          </div>
          <div className="features__box">
            <FiCalendar className="features__box--icon" />
            <h2 className="features__box--h2">Tygodniowy czas pracy</h2>
            <p className="features__box--paragraph">
              skorzystaj z kalendarza, aby sprawdzić łączy czas pracy przez cały
              tydzień
            </p>
          </div>
          <FiClock stroke-width="1" className="features__box--backgroundicon" />
        </section>
        <div className="main__container--background">
          <section className="main__container--timer">
            <div className="timer__image">
              <img src={laptop} />
            </div>
            <div className="timer__about">
              <h2 className="timer__about--h2">
                Timey jest dostępny również bez logowania
              </h2>
              <p className="timer__about--paragraph">
                jeśli się nie zalogujesz, otrzymasz dostęp jedynie do timera.
                Wystarczy, że wprowadzisz czas pracy, a następnie zaczniesz
                robić swoje. Pamiętaj, aby nic Cię nie rozpraszało, to Twój czas
                na wykonanie zadania
              </p>
              <a href="#" className="links__link links__link--active">
                Uruchom timer
              </a>
            </div>
          </section>
        </div>
        <section className="main__container--about">
          <div>
            <TimeCounter />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainScreen;

import React, { useEffect, useState } from "react";
import heroimage from "../img/people.png";
import devices from "../img/responsive.png";
import laptop from "../img/laptop.png";
import arrow from "../img/arrow.svg";
import { FiClock } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

const MainScreen = () => {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    let interval;
    let scrollPlace = 372;

    interval = setInterval(() => {
      console.log("render");
      if (window.scrollY >= scrollPlace) {
        clearInterval(interval);
        return setAnim(true);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [window.scrollY]);

  return (
    <div>
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
              <a className="links__link" href="#slide">
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
            <h2 className="features__box--h2">Twój tygodniowy czas pracy</h2>
            <p className="features__box--paragraph">
              skorzystaj z kalendarza, aby sprawdzić łączy czas pracy przez cały
              tydzień
            </p>
          </div>
          <FiClock stroke-width="1" className="features__box--backgroundicon" />
        </section>
        <div className="main__container--background">
          <section className="main__container--timer" id="slide">
            <div className="timer__image">
              <img src={devices} />
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
          <div className="about__container">
            <div className="about__image">
              <img src={laptop} />
            </div>
            <div
              className={`about__paragraph  about__paragraph--top ${
                anim ? "anim" : ""
              }`}
            >
              <p className="paragraph--background">
                <span>
                  Dodaj tytuł zadania, czas w jakim planujesz je wykonać oraz
                  opis
                </span>
              </p>
              <img src={arrow} />
            </div>
            <div
              className={`about__paragraph  about__paragraph--right ${
                anim ? "anim-right" : ""
              }`}
            >
              <img src={arrow} className="paragraph__image--transform" />
              <p className="paragraph--background">
                <span>Kliknij start i skup się na swoim zadaniu</span>
              </p>
            </div>
            <div
              className={`about__paragraph  about__paragraph--left ${
                anim ? "anim" : ""
              }`}
            >
              <p className="paragraph--background">
                <span>
                  Jeśli wykonasz zadanie szybciej, możesz je przerwać i dodać do
                  swojej listy tygodniowych zadań
                </span>
              </p>
              <img src={arrow} />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__info">hello</div>
        <div className="footer__copyright">
          Ikony należą do Freepik | Copyright © 2010-2019 Freepik Company S.L.
        </div>
      </footer>
    </div>
  );
};

export default MainScreen;

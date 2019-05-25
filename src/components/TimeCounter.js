import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { FiPlay, FiXCircle } from "react-icons/fi";
import fire from "../firebase/firebase";

function TimeCounter(props) {
  const [title, setTitle] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState({});
  const [start, setStart] = useState(false);
  const [done, setDone] = useState(false);
  let id = new Date()
    .toLocaleDateString()
    .split(".")
    .join("-");
  let dataStorage = {
    title,
    description,
    minutes,
    seconds,
    hours,
    isDone: false
  };

  // useEffect(() => {
  //   if (props.userUid){
  //     set
  //   }
  // }, [props]);

  useEffect(() => {
    let interval;
    if (start) {
      setCurrent({ hours, minutes, seconds, title, description });
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 0) {
            subtractMinute();
            return 59;
          } else if (prevSeconds > 0) {
            return prevSeconds - 1;
          }
          return 0;
        });
      }, 1000);
    }
    let subtractMinute = () => {
      setMinutes(prevMinutes => {
        if (prevMinutes === 0) {
          subtractHour();
          return 59;
        } else if (prevMinutes > 0) {
          return prevMinutes - 1;
        }
        return 0;
      });
    };
    let subtractHour = () => {
      setHours(prevHour => {
        if (prevHour > 0) {
          return prevHour - 1;
        }
        clearInterval(interval);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDone(true);
        fire.db
          .ref(`works`)
          .child(props.userUid)
          .child(id)
          .update({
            isDone: true
          });
      });
    };
    return () => clearInterval(interval);
  }, [start]);

  console.log(current);

  const resetTimer = () => {
    if (done === false) {
      fire.db
        .ref(`works`)
        .child(props.userUid)
        .child(id)
        .set(null);
    }
    setStart(false);
    setDone(false);
    setTitle("");
    setDescription("");
    setMinutes(0);
    setSeconds(0);
    setHours(0);
  };

  const submitTask = event => {
    event.preventDefault();
    fire.db
      .ref(`works`)
      .child(props.userUid)
      .child(id)
      .update(dataStorage);
    setStart(true);
  };

  return (
    <div>
      <form className="timer" onSubmit={submitTask}>
        <div className="inputs">
          <div className="inputs__group">
            <TextField
              type="text"
              placeholder="Tytuł zadania"
              name="title"
              value={title}
              label="Tytuł"
              required
              disabled={start && true}
              onChange={event => setTitle(event.target.value)}
            />
            <div>
              <TextField
                className="inputs__input"
                label="Godziny"
                placeholder="Godziny"
                name="time"
                type="number"
                inputProps={{ min: "0", max: "8", step: "1" }}
                required
                disabled={start && true}
                onChange={event => setHours(+event.target.value)}
              />
              <TextField
                className="inputs__input"
                placeholder="Minuty"
                name="time"
                type="number"
                inputProps={{ min: "0", max: "59", step: "1" }}
                label="Minuty"
                required
                disabled={start && true}
                onChange={event => setMinutes(+event.target.value)}
              />
              <TextField
                className="inputs__input"
                placeholder="Sekundy"
                label="Sekundy"
                name="time"
                type="number"
                inputProps={{ min: "1", max: "59", step: "1" }}
                required
                disabled={start && true}
                onChange={event => setSeconds(+event.target.value)}
              />
            </div>
          </div>
          <input
            className="inputs__input inputs__input--textarea"
            type="text"
            placeholder="Opis zadania *"
            name="description"
            value={description}
            required
            disabled={start && true}
            onChange={event => setDescription(event.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={start && true}
          className="links__link links__link--timer"
        >
          <FiPlay style={{ marginRight: "5px" }} />
          rozpocznij pracę!
        </button>
      </form>
      <div className="tasks">
        {start && (
          <div className="counter">
            <p className="counter__title">
              {title.length > 10 ? title.substring(0, 30) + "..." : title}
            </p>
            <p className="counter__title">{description.substr(0, 50).trim()}</p>
            <p className="counter__time">
              {hours}:{minutes}:{seconds}
            </p>
            <button
              onClick={resetTimer}
              className="links__link links__link--timer links__link--counter"
            >
              <FiXCircle />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeCounter;

import React, { useState, useEffect } from "react";

function TimeCounter() {
  const [title, setTitle] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState({});
  const [start, setStart] = useState(false);

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
      });
    };
    return () => clearInterval(interval);
  }, [start]);

  console.log(current);

  const resetTimer = () => {
    setStart(false);
    setTitle("");
    setDescription("");
    setMinutes(0);
    setSeconds(0);
    setHours(0);
  };

  const submitTask = event => {
    event.preventDefault();
    setStart(true);
  };

  return (
    <div>
      <form className="timer" onSubmit={submitTask}>
        <div className="inputs">
          <div className="inputs__group">
            <input
              className="inputs__input inputs__input--long"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              required
              disabled={start && true}
              onChange={event => setTitle(event.target.value)}
            />
            <input
              className="inputs__input"
              placeholder="Hours"
              name="time"
              type="number"
              min="0"
              max="8"
              required
              disabled={start && true}
              onChange={event => setHours(+event.target.value)}
            />
            <input
              className="inputs__input"
              placeholder="Minutes"
              name="time"
              type="number"
              min="0"
              max="59"
              required
              disabled={start && true}
              onChange={event => setMinutes(+event.target.value)}
            />
            <input
              className="inputs__input"
              placeholder="Seconds"
              name="time"
              type="number"
              min="0"
              max="59"
              required
              disabled={start && true}
              onChange={event => setSeconds(+event.target.value)}
            />
          </div>
          <input
            className="inputs__input inputs__input--textarea"
            type="text"
            placeholder="Task description"
            name="description"
            value={description}
            required
            disabled={start && true}
            onChange={event => setDescription(event.target.value)}
          />
        </div>
        <div className="timer__buttons">
          <div>
            <button
              type="submit"
              disabled={start && true}
              className="buttons__btn buttons__btn--green"
            >
              Start
            </button>
          </div>
        </div>
      </form>
      <div className="tasks">
        {start && (
          <div
            className={`tasks__current ${
              hours === 0 && minutes === 0 && seconds > 5
                ? ""
                : "tasks__current--red"
            }`}
          >
            <div>
              <p className="current__info">{title}</p>
              <p className="current__info">
                {description.substr(0, 50).trim()}
              </p>
              <p>
                {hours}:{minutes}:{seconds}
              </p>
            </div>
            <button onClick={resetTimer}>X</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeCounter;

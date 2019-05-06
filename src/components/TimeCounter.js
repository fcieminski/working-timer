import React, { useState, useEffect } from "react";

function TimeCounter() {
  const [title, setTitle] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState([]);
  const [remaning, setRemaning] = useState(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [pause, setBreak] = useState(false);

  useEffect(() => {
    setCurrent({ title, description, minutes, seconds });
    setRemaning(minutes);
  }, [title, description, minutes, seconds]);

  useEffect(() => {
    let interval;
    if (start) {
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
          return 59;
        } else if (prevMinutes > 0) {
          return prevMinutes - 1;
        }
        return 0;
      });
    };
    return () => clearInterval(interval);
  }, [start]);

  const resetTimer = () => {
    setStart(false);
    setMinutes(0);
    setSeconds(0);
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
              placeholder="Time"
              name="time"
              value={minutes}
              required
              disabled={start && true}
              onChange={event => setMinutes(event.target.value)}
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
          <button className="buttons__btn">Break</button>
          <div>
            <button type="submit" className="buttons__btn buttons__btn--green">
              Start
            </button>
            <button className="buttons__btn buttons__btn--red">Stop</button>
          </div>
        </div>
      </form>
      <div className="tasks">
        {start && (
          <div className="tasks__current">
            <div>
              <p className="current__info">{title}</p>
              <p className="current__info">
                {description.substr(0, 50).trim()}
              </p>
              <p>
                {minutes}:{seconds}
              </p>
            </div>
            <div className="progress">
              <div className="progress__inside" />
            </div>
            <button onClick={resetTimer}>X</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeCounter;

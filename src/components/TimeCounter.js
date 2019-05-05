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
    if (start === true) {
      let countDown = setInterval(() => timer(), 1000);
      if ((minutes === 0) & (seconds === 0)) {
        return () => clearInterval(countDown);
      }
    }
  }, [!start]);

  const submitTask = event => {
    event.preventDefault();
    setStart(true);
  };

  const timer = () => {
    let min = Math.floor(remaning / 60);
    let sec = remaning - min * 60;
    setMinutes(min);
    setSeconds(sec);
    if (sec < 10) {
      setSeconds("0" + sec);
    }
    if (min < 10) {
      setMinutes("0" + min);
    }
    setRemaning(remaning - 1);
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
            <button onClick={() => setStart(false)}>X</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeCounter;

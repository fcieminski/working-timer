import React, { useState } from "react";

function TimeCounter() {
  const [title, setTitle] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("00");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [pause, setBreak] = useState(false);

  const submitTask = event => {
    event.preventDefault();
    setStart(true);
    timer();
  };

  const timer = () => {
    let min = Math.floor(minutes / 60);
    let sec = minutes - min * 60;
    console.log(min);
    console.log(sec);
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

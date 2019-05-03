import React, { useState } from "react";

function TimeCounter() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState([]);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [pause, setBreak] = useState(false);

  const submitTask = event => {
    event.preventDefault();
    setCurrent([{ title, description }]);
    setStart(true);
    setTitle("");
    setDescription("");
    setTime(0);
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
              onChange={event => setTitle(event.target.value)}
            />
            <input
              className="inputs__input"
              placeholder="Time"
              name="time"
              value={time}
              required
              onChange={event => setTime(event.target.value)}
            />
          </div>
          <input
            className="inputs__input inputs__input--textarea"
            type="text"
            placeholder="Task description"
            name="description"
            value={description}
            required
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
            {current.map(element => (
              <div>
                <p className="current__info">{element.title}</p>
                <p className="current__info">
                  {element.description.substr(0, 50).trim()}
                </p>
              </div>
            ))}
            <div className="progress">
              <div className="progress__inside" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeCounter;

import React, { useState } from "react";

const WorkCountdown = () => {
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  const startWork = event => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input placeholder="title" type="text" disabled={start && true} />
        <input placeholder="hours" type="number" disabled={start && true} />
        <input placeholder="minutes" type="number" disabled={start && true} />
        <input placeholder="seconds" type="number" disabled={start && true} />
        <button type="submit" onClick={startWork}>
          Start work
        </button>
      </form>
      {start && (
        <div>
          <div>{title}</div>{" "}
          <div>
            {hours}:{minutes}:{seconds}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCountdown;

import React, { useState, useEffect } from "react";

const WorkCountdown = props => {
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setSeconds(prev => {
          if (prev === 0) {
            subStractMinute();
            return 59;
          } else if (prev > 0) {
            return prev - 1;
          }
          return 0;
        });
      }, 1000);
    }
    let subStractMinute = () => {
      setMinutes(prev => {
        if (prev === 0) {
          subStractHour();
          return 59;
        } else if (prev > 0) {
          return prev - 1;
        }
        return 0;
      });
    };
    let subStractHour = () => {
      setHours(prev => {
        if (prev > 0) {
          return prev - 1;
        }
        clearInterval(interval);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      });
    };
    return () => clearInterval(interval);
  }, [start]);

  const startWork = event => {
    event.preventDefault();
    setStart(true);
  };

  const deleteWork = () => {
    setStart(false);
    setTitle("");
    setMinutes(0);
    setHours(0);
    setSeconds(0);
  };

  return (
    <div>
      <form
        onSubmit={startWork}
        className={`countdown ${props.isActive ? "anim" : ""}`}
      >
        <input
          placeholder="title"
          type="text"
          disabled={start ? true : false}
          value={title}
          required
          onChange={event => setTitle(event.target.value)}
        />
        <input
          placeholder="hours"
          type="number"
          required
          disabled={start ? true : false}
          onChange={event => setHours(+event.target.value)}
        />
        <input
          placeholder="minutes"
          type="number"
          required
          disabled={start ? true : false}
          onChange={event => setMinutes(+event.target.value)}
        />
        <input
          placeholder="seconds"
          type="number"
          required
          disabled={start ? true : false}
          onChange={event => setSeconds(+event.target.value)}
        />
        <button type="submit">Start work</button>
      </form>
      {start && (
        <div>
          <div>{title}</div>{" "}
          <div>
            {hours}:{minutes}:{seconds}
          </div>
          <button onClick={deleteWork}>X</button>
        </div>
      )}
    </div>
  );
};

export default WorkCountdown;

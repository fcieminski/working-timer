import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { FiPlay } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";

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
    <>
      <form
        onSubmit={startWork}
        className={`countdown ${props.isActive ? "anim" : ""}`}
      >
        <div className="inputs__group">
          <TextField
            placeholder="Tytuł"
            type="text"
            label="Tytuł"
            disabled={start ? true : false}
            value={title}
            required
            onChange={event => setTitle(event.target.value)}
          />

          <div>
            <TextField
              className="inputs__input"
              placeholder="Godziny"
              inputProps={{ min: "0", max: "59", step: "1" }}
              label="Godziny"
              type="number"
              required
              disabled={start ? true : false}
              onChange={event => setHours(+event.target.value)}
            />
            <TextField
              className="inputs__input"
              placeholder="Minuty"
              inputProps={{ min: "0", max: "59", step: "1" }}
              label="Minuty"
              type="number"
              required
              disabled={start ? true : false}
              onChange={event => setMinutes(+event.target.value)}
            />
            <TextField
              className="inputs__input"
              placeholder="Sekundy"
              inputProps={{ min: "1", max: "59", step: "1" }}
              label="Sekundy"
              type="number"
              required
              disabled={start ? true : false}
              onChange={event => setSeconds(+event.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={start && true}
          className="links__link links__link--timer"
        >
          <FiPlay style={{ marginRight: "5px" }} />
          rozpocznij pracę!
        </button>
        {start && (
          <div className="counter">
            <p className="counter__title">
              {title.length > 10 ? title.substring(0, 30) + "..." : title}
            </p>
            <p className="counter__time">
              {hours}:{minutes}:{seconds}
            </p>
            <button
              onClick={deleteWork}
              className="links__link links__link--timer links__link--counter"
            >
              <FiXCircle />
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default WorkCountdown;

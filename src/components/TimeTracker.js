import React, { useState, useEffect } from "react";
import moment from "moment";

function TimeTracker() {
  const [workTime, setWorkTime] = useState([]);

  let dates = [];
  for (let i = 1; i <= 7; i++) {
    let days = moment()
      .isoWeekday(i)
      .format("Do");
    let date = moment()
      .isoWeekday(i)
      .format("dddd");
    const newCell = (
      <div
        className={`head__date ${
          moment()
            .isoWeekday(i)
            ._d.toLocaleString() === new Date().toLocaleString()
            ? "head__date--today"
            : ""
        }`}
        key={i}
      >
        <h2>{days}</h2>
        <p>{date}</p>
        <div className="head__inputs">
          <input
            id={date}
            type="number"
            min="1"
            placeholder="Hours worked"
            className="inputs__input inputs__input--time"
            onChange={event =>
              setWorkTime({
                ...workTime,
                worked: {
                  ...workTime.worked,
                  [event.target.id.toLowerCase()]: +event.target.value
                }
              })
            }
          />
          <input
            id={date}
            type="number"
            min="1"
            placeholder="Estimated hours"
            className="inputs__input inputs__input--time"
            onChange={event =>
              setWorkTime({
                ...workTime,
                estimated: {
                  ...workTime.estimated,
                  [event.target.id.toLowerCase()]: +event.target.value
                }
              })
            }
          />
        </div>
      </div>
    );
    dates.push(newCell);
  }

  return (
    <div>
      <div className="calendar">
        <div className="calendar__head">{dates}</div>
        <div>
          <input
            disabled={true}
            value={
              Object.values(workTime.worked || {}).reduce(
                (prev, curr) => prev + curr,
                0
              ) + "h"
            }
          />
          <input
            disabled={true}
            value={
              Object.values(workTime.estimated || {}).reduce(
                (prev, curr) => prev + curr,
                0
              ) + "h"
            }
          />
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default TimeTracker;

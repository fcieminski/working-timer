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
            type="number"
            min="1"
            placeholder="Hours worked"
            className="inputs__input inputs__input--time"
            onChange={event =>
              setWorkTime({ ...workTime, worked: event.target.value })
            }
          />
          <input
            type="number"
            min="1"
            placeholder="Estimated hours"
            className="inputs__input inputs__input--time"
            onChange={event =>
              setWorkTime({ ...workTime, estimated: event.target.value })
            }
          />
        </div>
      </div>
    );
    dates.push(newCell);
  }

  console.log(workTime);

  return (
    <div>
      <div className="calendar">
        <div className="calendar__head">{dates}</div>
      </div>
    </div>
  );
}

export default TimeTracker;

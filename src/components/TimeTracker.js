import React, { useState, useEffect } from "react";
import moment from "moment";

function TimeTracker() {
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
      </div>
    );
    dates.push(newCell);
  }

  return (
    <div>
      <div className="calendar">
        <div className="calendar__head">{dates}</div>
      </div>
    </div>
  );
}

export default TimeTracker;

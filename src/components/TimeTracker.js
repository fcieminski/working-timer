import React, { useState } from "react";
import moment from "moment";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function TimeTracker() {
  let dates = [];
  for (let i = 1; i <= 7; i++) {
    let days = moment()
      .isoWeekday(i)
      .format("MMM Do dddd");
    const newCell = <div key={i}>{days}</div>;
    dates.push(newCell);
  }

  return (
    <div>
      <div className="calendar">
        <div>{dates}</div>
      </div>
    </div>
  );
}

export default TimeTracker;

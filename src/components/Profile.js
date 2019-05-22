import React from "react";
import avatar from "../img/people.png";
import TimeCounter from "./TimeCounter";
import TimeTracker from "./TimeTracker";
import fire from "../firebase/firebase";

const Profile = () => {
  return (
    <div className="profile">
      <div>
        <div>
          <div>
            <img src={avatar} />
          </div>
          <div>
            <h2>Imię</h2>
            <p>email</p>
            <p>Godziny pracy</p>
          </div>
        </div>
        <TimeCounter />
        <TimeTracker />
      </div>
    </div>
  );
};

export default Profile;

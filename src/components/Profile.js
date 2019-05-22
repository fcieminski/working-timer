import React, { useEffect, useState } from "react";
import avatar from "../img/people.png";
import TimeCounter from "./TimeCounter";
import TimeTracker from "./TimeTracker";
import fire from "../firebase/firebase";

const Profile = props => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (props.location.aboutUser) {
      localStorage.setItem("name", props.location.aboutUser.userInfo);
    }
    if (localStorage.getItem("name")) {
      setName(localStorage.getItem("name"));
    }
  }, [props]);

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__container-user">
          <div className="profile__container-user-image">
            <img src={avatar} />
          </div>
          <div className="profile__container-user-info">
            <h2>{name}</h2>
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

import React, { useEffect, useState } from "react";
import avatar from "../img/people.png";
import TimeCounter from "./TimeCounter";
import TimeTracker from "./TimeTracker";
import fire from "../firebase/firebase";

const Profile = props => {
  const [user, setUser] = useState([]);
  const [uid, setUid] = useState("");

  useEffect(() => {
    if (props.location.aboutUser) {
      sessionStorage.setItem("name", props.location.aboutUser.userInfo.name);
      sessionStorage.setItem("email", props.location.aboutUser.userInfo.email);
    }
    if (sessionStorage.getItem("name")) {
      setUser({
        name: sessionStorage.getItem("name"),
        email: sessionStorage.getItem("email")
      });
    }
    if (fire.auth.currentUser) {
      setUid(fire.auth.currentUser.uid);
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
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>Godziny pracy</p>
          </div>
        </div>
        <TimeCounter userUid={uid} />
        <TimeTracker userUid={uid}/>
      </div>
    </div>
  );
};

export default Profile;

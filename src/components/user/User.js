import React from "react";
import "./User.scss";
import myimage from "../../images/kakashi.png";

function User() {
  return (
    <div className="user">
      <img src={myimage} alt="user-profile" className="user-img" />
    </div>
  );
}

export default User;

import React from "react";
import Navbar from "../components/nav/Navbar";
import * as AiIcons from "react-icons/ai";

function Chat() {
  return (
    <>
      <Navbar
        name="Chat"
        icon={<AiIcons.AiOutlineMessage className="navbar-icon" />}
      />
      <div className="center">
        <h1>Chat</h1>
      </div>
    </>
  );
}

export default Chat;

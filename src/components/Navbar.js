import React from "react";
import * as FiIcons from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { GiTreeBeehive } from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

function Navbar() {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        {/* <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link> */}
      </div>
      {/* <nav className={sidebar ? "nav-menu active" : "nav-menu"}> */}
      <nav className="nav-menu active">
        {/* <ul className="nav-menu-items" onClick={showSidebar}> */}
        <ul className="nav-menu-items">
          <li className="nav-toggle">
            <Link to="#" className="menu-bars">
              <GiTreeBeehive />
              <span className="link-text">HIVECOIN</span>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="link-text">{item.title}</span>
                </Link>
              </li>
            );
          })}
          <hr className="settings" />
          <div>
            <li className="nav-text ">
              <Link to="/settings">
                <FiIcons.FiSettings className="link-icon" />
                <span className="link-text">Settings</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="login">
                <GoSignOut className="link-icon" />
                <span className="link-text">Sign</span>
              </Link>
            </li>
          </div>
          <li className="nav-text sup-chat">
            <Link to="chat">
              <AiIcons.AiOutlineMessage className="link-icon" />
              <span className="link-text">Chat</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

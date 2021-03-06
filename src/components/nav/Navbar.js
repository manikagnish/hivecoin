import React from "react";
import { GoSignOut } from "react-icons/go";
import { GiTreeBeehive } from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.scss";
import NavDropdown from "./NavDropdown";
import { MdTrackChanges } from "react-icons/md";

function Navbar(props) {
  return (
    <>
      <div className="navbar-local">
        <div className="page-title">
          {props.icon}
          <span>{props.name}</span>
        </div>
        <div className="user-profile-photo">
          <NavDropdown />
        </div>
      </div>
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          <li className="nav-toggle">
            <Link to="/hivecoin/" className="menu-bars">
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
          <div className="settings-container">
            <li className="nav-text">
              <Link to="/hivecoin/login">
                <GoSignOut className="link-icon" />
                <span className="link-text">SignOut</span>
              </Link>
            </li>
          </div>
          <li className="nav-text sup-chat">
            <Link to="/hivecoin/tracker">
              <MdTrackChanges className="link-icon" />
              <span className="link-text">Tracker</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

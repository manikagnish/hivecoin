import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../user/User";

const NavDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <UncontrolledDropdown nav inNavbar>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="profile-photo" nav caret>
          <User />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem className="dropdown-items-text" header>
            Profile
          </DropdownItem>
          <DropdownItem className="dropdown-items-text">Settings</DropdownItem>
          <DropdownItem className="dropdown-items-text">Something</DropdownItem>
          <DropdownItem className="dropdown-items-text" divider />
          <DropdownItem className="dropdown-items-text">
            Foo Action
          </DropdownItem>
          <DropdownItem className="dropdown-items-text">
            Bar Action
          </DropdownItem>
          <DropdownItem className="dropdown-items-text">
            Quo Action
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </UncontrolledDropdown>
  );
};

export default NavDropdown;

import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
    Collapse, Nav, Navbar,
    NavbarBrand, NavbarToggler, NavItem, NavLink
} from "reactstrap";
import tkLogo from "../assets/logo/tklogo.png";

export const EventHeader = ({ type }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar
      className="w-100 p-5"
      style={{ position: "relative" }}
      dark
    >
      <NavbarBrand className=" cit">
        <Link to="/">
          <img class="p-3" src={tkLogo} alt="cit-logo" height="105rem"></img>
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={!collapsed} navbar className="mt-3">
        <Nav navbar>
          <NavItem>
            <NavLink
              style={{ float: "right" }}
              tag={Link}
              to="/technicalEvents"
            >
              Technical
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ float: "right" }} tag={Link} to="/culturalEvents">
              Cultural
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ float: "right" }} tag={Link} to="/about">
              About
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

import { React, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  Collapse,
  NavItem,
  Nav,
  NavbarToggler
} from "reactstrap";
import desktopLogo from "../assets/logo/citlogoFull.png";
import mobileLogo from "../assets/logo/citlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar className="w-100" style={{ position: "relative" }} light>
      <NavbarBrand className=" cit">
        <img class="d-none d-md-block" src={desktopLogo} alt="cit-logo" height="75rem"></img>
        <img class="d-md-none" src={mobileLogo} alt="cit-logo" height="60rem"></img>
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
export default Header;

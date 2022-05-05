import {React,useState} from 'react'
import { Navbar,NavbarBrand,NavLink,Collapse,NavItem,Nav,NavbarToggler } from 'reactstrap';
import clogo from "../assets/logo/citlogo.png"
import { Link } from "react-router-dom";

const Header = ()=> {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar className='w-100' style={{position:"relative"}} dark>
        <NavbarBrand  className=" cit" ><img style={{position:"absolute", top:0}} src={clogo} alt="cit-logo" height="60rem"></img></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar className="mt-3" >
          <Nav navbar>
            <NavItem>
                <NavLink style={{float:"right"}} tag={Link} to="/nightEvents">Night Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{float:"right"}} tag={Link} to="/dayEvents">Day Events</NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={{float:"right"}} tag={Link} to="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
}
export default Header;
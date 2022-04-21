import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Topbar = ({ children, className, appName, fluid, isLogin }) => {
  return (
    <Navbar className={className} expand="md" dark>
      <NavbarBrand href="/">{appName}</NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          {isLogin ? ( //if user is logged in
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Welcome User!
              </DropdownToggle>
              <DropdownMenu end={true}>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Admin Panel</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : ( //if user is not logged in
            <></>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;

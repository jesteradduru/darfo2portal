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
      {isLogin ? ( //if user is logged in
        <>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
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
            </Nav>
          </Collapse>
        </>
      ) : (
        //if user is not logged in
        <></>
      )}
    </Navbar>
  );
};

export default Topbar;

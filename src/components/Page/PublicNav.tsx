import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import NavLink from "./NavLink";

export default function PublicNav() {
  return (
    <div>
      <Navbar>
        <div className="d-flex align-items-center mx-auto">
          <NavbarBrand href="/">
            <img src="https://about.flipboard.com/wp-content/themes/flipboard/dist/img/flipboard-logo.svg" />
          </NavbarBrand>
          <Nav className="me-auto gap-3">
            <NavLink />
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

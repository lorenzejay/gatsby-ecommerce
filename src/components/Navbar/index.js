import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./styles.scss";
import { BiShoppingBag } from "react-icons/bi";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <Navbar bg="light" expand="sm">
      <Link to="/" className="logo">
        {data.site.siteMetadata.author}
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/presets">Presets</Link>
          <Link to="/mobile-presets">Mobile</Link>
          <Link to="/desktop-presets">Desktop</Link>
          <Link to="/help">Help</Link>
        </Nav>
        <div className="shop-cart">
          <span className="snipcart-checkout" style={{ cursor: "pointer" }}>
            <BiShoppingBag size="25" />
          </span>
          <span className="snipcart-items-count"></span>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

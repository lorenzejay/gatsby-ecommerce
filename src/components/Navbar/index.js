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
          siteName
          author
        }
      }
    }
  `);
  console.log(data);
  return (
    <Navbar bg="light" expand="sm">
      <Link to="/" className="logo">
        Charis Cheung
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/presets">Presets</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
        <div className="shop-cart">
          <span className="snipcart-checkout" style={{ cursor: "pointer" }}>
            <BiShoppingBag size="25" />
          </span>
          <span className="snipcart-items-count"></span>
        </div>
      </Navbar.Collapse>
    </Navbar>
    // <nav className="navbar">
    //   <div>
    //     <Link className="logo" to="/">
    //       {data.site.siteMetadata.siteName}
    //     </Link>
    //   </div>
    //   <ul className="navbar-links">
    //     <li>
    //       <Link to="/presets">Presets</Link>
    //     </li>
    //     <li>
    //       <Link to="/help">Help</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //     <li>
    //       <span className="snipcart-checkout" style={{ cursor: "pointer" }}>
    //         <BiShoppingBag size="20" />
    //       </span>
    //       <span className="snipcart-items-count"></span>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavbarComponent;

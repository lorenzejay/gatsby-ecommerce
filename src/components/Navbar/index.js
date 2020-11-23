import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./styles.scss";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
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
    <nav>
      <div>
        <Link className="logo" to="/">
          {data.site.siteMetadata.siteName}
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/presets">Presets</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span className="snipcart-checkout" style={{ cursor: "pointer" }}>
            <BiShoppingBag size="20" />
          </span>
          <span className="snipcart-items-count"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

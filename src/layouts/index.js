import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "../style/index.scss";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <div className="Container">
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

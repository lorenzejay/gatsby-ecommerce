import React from "react";
import Helmet from "react-helmet";
import "../style/index.scss";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <div>
    <Helmet title="Charis Cheung Presets" />
    <div className="Container">
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;

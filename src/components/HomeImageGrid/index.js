import React from "react";
import "./styles.scss";

const HomeImageGrid = ({ children }) => {
  return (
    <div className="HomeImageGrid-Container">
      <h1>Some of my work</h1>
      <div className="HomeImageGrid">{children}</div>
    </div>
  );
};

export default HomeImageGrid;

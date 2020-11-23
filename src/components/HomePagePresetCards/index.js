import React from "react";
import "./styles.scss";
import BackgroundImage from "gatsby-background-image";
const HomePagePresetCards = ({ image, text, className }) => {
  return (
    <div className="HomePagePresetCard">
      <img src={image} />
      <h3>{text}</h3>
    </div>
  );
};

export default HomePagePresetCards;

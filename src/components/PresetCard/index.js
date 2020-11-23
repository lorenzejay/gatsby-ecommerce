import { Link } from "gatsby";
import React from "react";
import "./styles.scss";
import ReactCompareImage from "react-compare-image";

const PresetCard = ({ image, title, price, link, id, description, sku, isDesktop }) => {
  console.log(isDesktop);
  return (
    <div className="preset-card">
      <Link to={link}>
        <img src={image} alt={title} />
      </Link>
      <div className="preset-card-container">
        <h3>
          {title}
          <span> ({isDesktop ? "Desktop" : "Mobile"})</span>
        </h3>

        <p>{description}</p>
      </div>
      <div className="preset-card-price-addcart">
        <p>${parseInt(price)}</p>

        <button
          className="snipcart-add-item"
          data-item-id={id}
          data-item-price={Number(price)}
          data-item-url={link}
          data-item-description={description}
          data-item-name={title}
          data-item-image={image}
          data-item-file-guid={sku}
        >
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default PresetCard;

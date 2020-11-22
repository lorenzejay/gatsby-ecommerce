import { Link } from "gatsby";
import React from "react";
import "./styles.scss";

const PresetCard = ({ image, title, price, link, id, description, sku, isDesktop }) => {
  console.log(isDesktop);
  return (
    <div className="card">
      <Link to={link}>
        <img src={image} alt={title} />
      </Link>
      <div className="card-container">
        <h4>
          {title}
          <span> ({isDesktop ? "Desktop" : "Mobile"})</span>
        </h4>

        <div className="card-price-addcart">
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
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresetCard;

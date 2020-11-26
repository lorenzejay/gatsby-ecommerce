import { Link } from "gatsby";
import React from "react";
import "./styles.scss";

const PresetCard = ({ image, title, price, link, id, description, guid, isDesktop, slug }) => {
  return (
    <div className="preset-card">
      <Link to={link}>
        <img src={image} alt={title} />
      </Link>

      <div className="preset-card-container">
        <div className="preset-card-text">
          <h3>{title}</h3>

          <div className="preset-card-price-addcart">
            <p>${parseInt(price)}</p>
            <p className="preset-card-description ">{description}</p>
            <button
              className="snipcart-add-item"
              data-item-id={id}
              data-item-price={price}
              data-item-url={`https://charispresets.com/presets/${slug}`}
              data-item-description={description}
              data-item-name={title}
              data-item-image={image}
              data-item-file-guid={guid}
            >
              <p>Add to cart</p>
            </button>
            <button>
              <p>View</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresetCard;

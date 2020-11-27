import { Link } from "gatsby";
import React from "react";
import "./styles.scss";

const PresetCard = ({ image, title, price, link, id, description, guid, isDesktop, slug }) => {
  return (
    <div className="preset-card">
      <Link to={link} className="preset-link-wrapper">
        <img src={image} alt={title} />
      </Link>
      <div className="preset-card-container">
        <div className="preset-card-text">
          <Link to={`/presets/${slug}`}>{title}</Link>

          <div className="preset-card-price-addcart">
            <p>${parseInt(price)}</p>
            {/* <Link to={`/presets/${slug}`}></Link> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresetCard;

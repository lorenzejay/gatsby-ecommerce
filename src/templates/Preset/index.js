import "./styles.scss";
import React from "react";
import Layout from "../../layouts";
import ReactCompareImage from "react-compare-image";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";

const ProductTemplate = ({ pageContext }) => {
  const { preset } = pageContext;
  console.log(preset);
  const beforeAfter1 = preset.beforeAndAfter[0].url;
  const beforeAfter2 = preset.beforeAndAfter[1].url;
  const beforeAfter3 = preset.beforeAndAfter && preset.beforeAndAfter2[0].url;
  const beforeAfter4 = preset.beforeAndAfter && preset.beforeAndAfter2[1].url;
  return (
    <Layout>
      <div className="preset-container">
        <Link to="/presets">Back</Link>
        <h1>{preset.name}</h1>
        <div className="preset-split">
          <div className="preset-display-container">
            <Carousel>
              <Carousel.Item>
                <ReactCompareImage
                  className="preset-compare"
                  leftImage={beforeAfter1}
                  rightImage={beforeAfter2}
                />
              </Carousel.Item>
              <Carousel.Item>
                <ReactCompareImage
                  className="preset-compare"
                  leftImage={beforeAfter3}
                  rightImage={beforeAfter4}
                />
              </Carousel.Item>
            </Carousel>
            <p className="preset-description">{preset.description}</p>
          </div>

          <div className="preset-purchase-container">
            <h2>${preset.price}</h2>

            <button
              className="snipcart-add-item"
              data-item-id={preset.id}
              data-item-price={Number(preset.price)}
              data-item-url={"/"}
              data-item-description={preset.description}
              data-item-name={preset.name}
              data-item-image={preset.image.url}
            >
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductTemplate;

import "./styles.scss";
import React from "react";
import Layout from "../../layouts";
import ReactCompareImage from "react-compare-image";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, graphql, useStaticQuery } from "gatsby";

const ProductTemplate = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPresetDetail {
        nodes {
          desktopDetails {
            title
            description
          }
        }
      }
    }
  `);
  const { preset } = pageContext;
  const desktopPresetDetails = data.allDatoCmsPresetDetail.nodes[0].desktopDetails;

  return (
    <Layout>
      <div className="preset-container">
        <div className="preset-container-title">
          <h1>
            {preset.name} - <span>${preset.price}</span>
          </h1>
          <div>
            <p>{preset.description}</p>
          </div>
          <button
            className="snipcart-add-item"
            data-item-id={preset.id}
            data-item-price={preset.price}
            data-item-url={`https://charispresets.com/presets/${preset.slug}`}
            data-item-description={preset.description}
            data-item-name={preset.name}
            data-item-image={preset.image.url}
            data-item-file-guid={preset.fileGuid}
          >
            <p>Add to cart</p>
          </button>
        </div>

        <Carousel>
          {preset.beforeAndAfters.map((item, i) => (
            <Carousel.Item>
              <ReactCompareImage
                className="preset-compare"
                leftImage={item.before.url}
                rightImage={item.after.url}
                leftImageCss={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                rightImageCss={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <Link to="/presets">Back to all presets</Link>
        <div className="preset-disclaimer-wrapper">
          {desktopPresetDetails.map((detail, i) => (
            <div className="preset-disclaimer-content" key={i}>
              <h4>{detail.title}</h4>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductTemplate;

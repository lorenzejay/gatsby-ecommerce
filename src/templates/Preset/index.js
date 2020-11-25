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
  console.log(desktopPresetDetails);
  const beforeAfter1 = preset.beforeAndAfter[0].url;
  const beforeAfter2 = preset.beforeAndAfter[1].url;
  const beforeAfter3 = preset.beforeAndAfter2.length !== 0 && preset.beforeAndAfter2[0].url;
  const beforeAfter4 = preset.beforeAndAfter2.length !== 0 && preset.beforeAndAfter2[1].url;
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
                  leftImageCss={{
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "inherit",
                  }}
                  rightImageCss={{
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "inherit",
                  }}
                />
              </Carousel.Item>
              {beforeAfter3 && beforeAfter4 && (
                <Carousel.Item>
                  <ReactCompareImage
                    className="preset-compare"
                    leftImage={beforeAfter3}
                    rightImage={beforeAfter4}
                  />
                </Carousel.Item>
              )}
            </Carousel>
            <p className="preset-description">{preset.description}</p>
          </div>

          <div className="preset-purchase-container">
            <h2>${preset.price}</h2>

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
        </div>
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

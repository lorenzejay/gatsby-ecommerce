import "./styles.scss";
import React from "react";
import Layout from "../../layouts";
import ReactCompareImage from "react-compare-image";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, graphql, useStaticQuery } from "gatsby";
import sanitizeHtml from "sanitize-html";

const ProductTemplate = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        edges {
          node {
            cPresets {
              presetDetailsDesktop {
                description
                title
              }
              presetDetailsMobile {
                description
                title
              }
            }
          }
        }
      }
    }
  `);
  const desktopDetails = data.allContentJson.edges[0].node.cPresets.presetDetailsDesktop;
  const mobileDetails = data.allContentJson.edges[0].node.cPresets.presetDetailsMobile;
  // const desktopPresetDetails = data.allDatoCmsPresetDetail.nodes[0].desktopDetails;
  // const mobilePresetDetails = data.allDatoCmsPresetDetail.nodes[0].mobileDetails;
  console.log(pageContext);
  return (
    <Layout>
      <div className="preset-container">
        <div className="preset-container-title">
          <h1>
            {pageContext.name} - <span>${pageContext.price}</span>
          </h1>
          <div className="preset-description">
            <p>{pageContext.description}</p>
          </div>
          <button
            className="snipcart-add-item"
            data-item-id={pageContext.id}
            data-item-price={pageContext.price}
            data-item-url={`https://charispresets.com/presets/${pageContext.slug}`}
            data-item-description={pageContext.description}
            data-item-name={pageContext.name}
            data-item-image={pageContext.mainImage}
            data-item-file-guid={pageContext.guid}
          >
            <p>Add to cart</p>
          </button>
        </div>

        <Carousel>
          {pageContext.beforeAndAfters.map((item, i) => (
            <Carousel.Item key={i}>
              <ReactCompareImage
                className="preset-compare"
                leftImage={item.before}
                rightImage={item.after}
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
          {pageContext.desktopPreset
            ? desktopDetails.map((detail, i) => (
                <div className="preset-disclaimer-content" key={i}>
                  <span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(detail.title, {
                          allowedTags: ["p", "h4", "h1", "span", "ol", "li"],
                        }),
                      }}
                    />
                  </span>
                  <span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(detail.description, {
                          allowedTags: ["p", "h4", "h1", "span", "ol", "li"],
                        }),
                      }}
                    />
                  </span>
                </div>
              ))
            : mobileDetails.map((detail, i) => (
                <div className="preset-disclaimer-content" key={i}>
                  <span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(detail.title, {
                          allowedTags: ["p", "h4", "h1", "span", "ol", "li"],
                        }),
                      }}
                    />
                  </span>
                  <span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(detail.description, {
                          allowedTags: ["p", "h4", "h1", "span", "ol", "li"],
                        }),
                      }}
                    />
                  </span>
                </div>
              ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductTemplate;

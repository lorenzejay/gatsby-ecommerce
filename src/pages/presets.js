import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default function Presets() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProduct {
        edges {
          node {
            id
            name
            price
            image {
              url
              sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `);
  console.log(data.site.siteMetadata.siteName);
  return (
    <Layout>
      <div className="Catalogue">
        {data.allDatoCmsProduct.edges.map(({ node: product }) => (
          <div className="Catalogue__item" key={product.id}>
            <div className="Product">
              <div className="Product__image">
                <Link to={`/presets/${product.id}`}>
                  <Img sizes={product.image.sizes} />
                </Link>
              </div>
              <div className="Product__details">
                <div className="Product__name">
                  {product.name}
                  <div className="Product__price">{product.price}$</div>
                </div>
                <span
                  className="Product__buy snipcart-add-item"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-image={product.image.url}
                  data-item-name={product.name}
                  data-item-url={`/`}
                >
                  Buy now
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

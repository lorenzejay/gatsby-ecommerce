import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import BackgroundImage from "gatsby-background-image";
import PresetCard from "../components/PresetCard";
import { HomeImageText } from "../style/MainBackground";
import "../style/Presets.scss";
import { Helmet } from "react-helmet";

export default function DesktopPresets({ className }) {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProduct(filter: { isDesktopPreset: { eq: true } }) {
        edges {
          node {
            id
            name
            price
            fileGuid
            description
            slug
            isDesktopPreset
            beforeAndAfters {
              before {
                url
              }
              after {
                url
              }
            }
            image {
              url
              sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      }
      desktop: file(relativePath: { eq: "cc4.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <Layout>
      <Helmet title="Presets" />
      <BackgroundImage
        tag="section"
        fluid={imageData}
        className={className}
        backgroundColor="#040e18"
        style={{
          width: "100%",
          height: 300,
          backgroundSize: "cover",
          objectPosition: "top",
          margin: 0,
        }}
      >
        <HomeImageText>Desktop</HomeImageText>
      </BackgroundImage>
      <div className="Catalogue">
        {data.allDatoCmsProduct.edges.map(({ node: product }) => (
          <PresetCard
            description={product.description}
            key={product.id}
            id={product.id}
            link={`/presets/${product.slug}`}
            image={product.image.url}
            title={product.name}
            isDesktop={product.isDesktopPreset}
            price={product.price}
            slug={product.slug}
            guid={product.fileGuid}
          />
        ))}
      </div>
    </Layout>
  );
}

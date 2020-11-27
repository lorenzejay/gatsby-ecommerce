import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import BackgroundImage from "gatsby-background-image";
import PresetCard from "../components/PresetCard";
import { HomeImageText } from "../style/MainBackground";
import "../style/Presets.scss";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";

export default function MobilePresets({ className, location }) {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProduct(filter: { isDesktopPreset: { eq: false } }) {
        edges {
          node {
            id
            name
            fileGuid
            description
            price
            slug
            image {
              url
            }
            beforeAndAfters {
              before {
                url
              }
              after {
                url
              }
            }
          }
        }
      }
      desktop: file(relativePath: { eq: "cc1.JPG" }) {
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
  // console.log(data.allDatoCmsProduct.edges);

  return (
    <Layout>
      <SEO
        title="Mobile Presets"
        description="Home of my Adobe Lightroom Preset Shop. Includes a 4 of my special presets for the mobile version of Adobe Lightroom."
        pathname={location.pathname}
      />

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
        <HomeImageText>Mobile</HomeImageText>
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

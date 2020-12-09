import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import BackgroundImage from "gatsby-background-image";
import PresetCard from "../components/PresetCard";
import { HomeImageText } from "../style/MainBackground";
import "../style/Presets.scss";
import SEO from "../components/seo";

export default function Presets({ className, location }) {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        edges {
          node {
            cPresets {
              presets {
                name
                price
                id
                guid
                desktopPreset
                description
                slug
                mainImage
              }
            }
          }
        }
      }
      desktop: file(relativePath: { eq: "cc3.jpg" }) {
        childImageSharp {
          fluid(quality: 40, maxWidth: 1920) {
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
  console.log(data.allContentJson.edges[0]);
  return (
    <Layout>
      <SEO
        title="All Presets"
        description="4 Presets for both Mobile and Desktop. Also includes a preset pack for all of my presets. Works for Adobe Lightroom Mobile and Desktop applications."
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
        <HomeImageText>Presets</HomeImageText>
      </BackgroundImage>
      <div className="Catalogue">
        {data.allContentJson.edges[0].node.cPresets.presets.map((product) => (
          <PresetCard
            description={product.description}
            key={product.id}
            id={product.id}
            link={`/presets/${product.slug}`}
            image={product.mainImage}
            title={product.name}
            isDesktop={product.isDesktopPreset}
            price={product.price}
            slug={product.slug}
            guid={product.guid}
          />
        ))}
      </div>
    </Layout>
  );
}

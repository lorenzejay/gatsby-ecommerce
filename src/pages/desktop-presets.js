import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import BackgroundImage from "gatsby-background-image";
import PresetCard from "../components/PresetCard";
import { HomeImageText } from "../style/MainBackground";
import "../style/Presets.scss";
import SEO from "../components/seo";

export default function DesktopPresets({ className, location }) {
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
  const desktopPresets = data.allContentJson.edges[0].node.cPresets.presets.filter(
    (preset) => preset.desktopPreset
  );

  return (
    <Layout>
      <SEO
        title="Desktop Preset"
        description="Store for my Lightroom Presets. Includes a 4 of my special presets. These are specific for Adobe Lightroom CC."
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
        <HomeImageText>Desktop</HomeImageText>
      </BackgroundImage>
      <div className="Catalogue">
        {desktopPresets.map((preset) => (
          <PresetCard
            description={preset.description}
            key={preset.id}
            id={preset.id}
            link={`/presets/${preset.slug}`}
            image={preset.mainImage}
            title={preset.name}
            isDesktop={preset.desktopPreset}
            price={preset.price}
            slug={preset.slug}
            guid={preset.guid}
          />
        ))}
      </div>
    </Layout>
  );
}

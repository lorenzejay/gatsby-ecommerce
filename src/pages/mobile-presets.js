import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import BackgroundImage from "gatsby-background-image";
import PresetCard from "../components/PresetCard";
import { HomeImageText } from "../style/MainBackground";
import "../style/Presets.scss";
import SEO from "../components/seo";

export default function MobilePresets({ className, location }) {
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
      desktop: file(relativePath: { eq: "cc4.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920) {
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
  const mobilePresets = data.allContentJson.edges[0].node.cPresets.presets.filter(
    (preset) => !preset.desktopPreset
  );

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
        {mobilePresets.map((preset) => (
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

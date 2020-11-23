import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import { HomeImageText } from "../style/MainBackground";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import HomeImageGrid from "../components/HomeImageGrid/index";
export default function Home({ className }) {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHomePage {
        edges {
          node {
            homeScreenGallery {
              url
            }
            title
            homeText {
              body1
              body2
              body3
              body4
              body5
              body6
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
    }
  `);

  const HomePagePresetCardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around
    gap: 5vw
    width: 100vw
    height: 35vh
    padding: 0 5%;
  `;

  const HomeParagraphSpacing = styled.div`
    padding: 5%;
    font-size: 20px;
    color: #333333;
    width: 75%;

    p {
      margin: 20px 0;
    }
  `;

  const imageData = data.desktop.childImageSharp.fluid;
  const homePageData = data.allDatoCmsHomePage.edges[0].node;
  const homePageText = homePageData.homeText;

  return (
    <Layout>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className={className}
        backgroundColor={`#040e18`}
        style={{ width: "100%", height: 300, backgroundSize: "cover" }}
      >
        <HomeImageText>Charis Cheung</HomeImageText>
      </BackgroundImage>
      <HomeParagraphSpacing>
        <h2>{homePageData.title}</h2>
        <p>{homePageText[0].body1}</p>
        <p>{homePageText[0].body2}</p>
        <p>{homePageText[0].body3}</p>
        <p>{homePageText[0].body4}</p>
        <p>{homePageText[0].body5}</p>
        <p>{homePageText[0].body6}</p>
      </HomeParagraphSpacing>

      <HomePagePresetCardsContainer>
        <HomeImageGrid>
          {data.allDatoCmsHomePage.edges[0].node.homeScreenGallery.map((item, i) => (
            <img src={item.url} alt={"Examples from Charis Cheung portfolio"} key={i} />
          ))}
        </HomeImageGrid>
      </HomePagePresetCardsContainer>
    </Layout>
  );
}

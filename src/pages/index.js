import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../layouts/index";
import styled from "@emotion/styled";
import HomeImageGrid from "../components/HomeImageGrid/index";
import { Carousel } from "react-bootstrap";
import "../style/Home.scss";
import Img from "gatsby-image/withIEPolyfill";
import SEO from "../components/seo";

export default function Home({ location }) {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHomePage {
        edges {
          node {
            homeScreenGallery {
              url
            }
            homeScreenHeaderImages {
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
      desktopPreset: file(relativePath: { eq: "desktopPreset.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobilePreset: file(relativePath: { eq: "mobilePreset.jpeg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyImageSharpFluid
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
  const CarouselImage = styled.img`
    width: inherit;
    object-fit: cover;
    object-position: top;
  `;

  const homePageData = data.allDatoCmsHomePage.edges[0].node;
  const homePageText = homePageData.homeText;

  return (
    <Layout>
      <SEO
        title="Home"
        description="Home of my Lightroom Preset Shop. Includes a 4 of my special presets."
        pathname={location.pathname}
      />
      <div className="home-page">
        <Carousel>
          {homePageData.homeScreenHeaderImages.map((item, i) => (
            <Carousel.Item key={i}>
              <CarouselImage src={item.url} />
              <Carousel.Caption>
                <Link to="/presets">
                  <button>Shop Now</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="homepage-text">
          <h2>{homePageData.title}</h2>
          <p>{homePageText[0].body1}</p>
          <p>{homePageText[0].body2}</p>
          <p>{homePageText[0].body3}</p>
          <p>{homePageText[0].body4}</p>
          <p>{homePageText[0].body5}</p>
          <p>{homePageText[0].body6}</p>
        </div>

        <div className="Home-presets-links-container">
          <h2>Check out my presets here.</h2>
          <div className="Home-page-preset-link-images">
            <Link to="/presets">
              <Img
                fluid={data.desktopPreset.childImageSharp.fluid}
                objectFit="cover"
                style={{ width: 300 }}
              />
            </Link>
            <Link to="/presets">
              <Img
                fluid={data.mobilePreset.childImageSharp.fluid}
                objectFit="cover"
                style={{ width: 300 }}
              />
            </Link>
          </div>
        </div>

        <HomePagePresetCardsContainer>
          <HomeImageGrid>
            {data.allDatoCmsHomePage.edges[0].node.homeScreenGallery.map((item, i) => (
              <a href="https://www.instagram.com/charis.cheung/" key={i}>
                <img src={item.url} alt={"Examples from Charis Cheung portfolio"} />
              </a>
            ))}
          </HomeImageGrid>
        </HomePagePresetCardsContainer>
      </div>
    </Layout>
  );
}

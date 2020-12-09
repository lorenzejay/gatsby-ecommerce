import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../layouts/index";
import styled from "@emotion/styled";
// import HomeImageGrid from "../components/HomeImageGrid/index";
import { Carousel } from "react-bootstrap";
import "../style/Home.scss";
import Img from "gatsby-image/withIEPolyfill";
import SEO from "../components/seo";

export default function Home({ location }) {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        edges {
          node {
            homePageContent {
              description
            }
            homepageHeaderImages {
              image
            }
          }
        }
      }
      bg1: file(relativePath: { eq: "bgMain1.JPG" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bg2: file(relativePath: { eq: "mainbg2.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bg3: file(relativePath: { eq: "mainbg3.JPG" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopPreset: file(relativePath: { eq: "desktopPreset.jpeg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobilePreset: file(relativePath: { eq: "mobilePreset.jpeg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const HomePagePresetCardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5vw;
    width: 100vw;
    height: 35vh;
    padding: 0 5%;
  `;

  const CarouselImage = styled(Img)`
    height: inherit;
    width: inherit;
    object-fit: contain;
  `;

  return (
    <Layout>
      <SEO
        title="Home"
        description="Home of my Lightroom Preset Shop. Includes a 4 of my special presets."
        pathname={location.pathname}
      />
      <div className="home-page">
        <Carousel>
          <Carousel.Item>
            <CarouselImage
              fluid={data.bg1.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="center"
            />
            <Carousel.Caption>
              <Link to="/presets">
                <button>Shop Now</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <CarouselImage fluid={data.bg2.childImageSharp.fluid} objectFit="cover" />
            <Carousel.Caption>
              <Link to="/presets">
                <button>Shop Now</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <CarouselImage
              fluid={data.bg3.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="top"
            />
            <Carousel.Caption>
              <Link to="/presets">
                <button>Shop Now</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="homepage-text">
          {data.allContentJson.edges[0].node.homePageContent.map((item, i) => (
            <p key={i}>{item.description}</p>
          ))}
        </div>

        <div className="Home-presets-links-container">
          <h2>Check out my presets here.</h2>
          <div className="Home-page-preset-link-images">
            <Link to="/desktop-presets">
              <Img
                fluid={data.desktopPreset.childImageSharp.fluid}
                objectFit="cover"
                style={{ width: 300 }}
              />
            </Link>
            <Link to="/mobile-presets">
              <Img
                fluid={data.mobilePreset.childImageSharp.fluid}
                objectFit="cover"
                style={{ width: 300 }}
              />
            </Link>
          </div>
        </div>

        {/* <HomePagePresetCardsContainer>
          <HomeImageGrid>
            {data.allDatoCmsHomePage.edges[0].node.homeScreenGallery.map((item, i) => (
              <a href="https://www.instagram.com/charis.cheung/" key={i}>
                <img src={item.url} alt={"Examples from Charis Cheung portfolio"} />
              </a>
            ))}
          </HomeImageGrid>
        </HomePagePresetCardsContainer> */}
      </div>
    </Layout>
  );
}

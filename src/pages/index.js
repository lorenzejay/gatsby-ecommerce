import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import { HomeImageText } from "../style/MainBackground";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import HomePagePresetCards from "../components/HomePagePresetCards/index";
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
  console.log(data.allDatoCmsHomePage.edges[0].node.homeScreenGallery);
  return (
    <Layout>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className={className}
        backgroundColor={`#040e18`}
        style={{ width: "100%", height: 300, backgroundSize: "cover" }}
      >
        <HomeImageText>Charis Cheung Presets</HomeImageText>
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
            <img src={item.url} alt={"Grid image from charis cheung portfolio"} key={i} />
          ))}
        </HomeImageGrid>
      </HomePagePresetCardsContainer>
    </Layout>
  );
}
// render={(data) => (
//   <Layout site={data.site}>
//     <div className="Catalogue">
//       {data.products.edges.map(({ node: product }) => (
//         <div className="Catalogue__item" key={product.id}>
//           <div
//             className="Product snipcart-add-item"
//             data-item-id={product.id}
//             data-item-price={product.price}
//             data-item-image={product.image.url}
//             data-item-name={product.name}
//             data-item-url={`/`}
//           >
//             <div className="Product__image">
//               <Img />
//             </div>{" "}
//             <div className="Product__details">
//               <div className="Product__name">
//                 {product.name}
//                 <div className="Product__price">{product.price}€</div>
//               </div>
//               <span className="Product__buy">Buy now</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </Layout>
// )}

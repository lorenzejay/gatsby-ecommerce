import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
export default function Home({ className }) {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHomePage {
        edges {
          node {
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

  const HomePresetImage = styled(BackgroundImage)`
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  const HomeImageText = styled.h2`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    color: white;
    text-transform: uppercase;
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
  console.log(homePageText);
  return (
    <Layout>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className={className}
        backgroundColor={`#040e18`}
        style={{ width: "100%", height: 400 }}
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

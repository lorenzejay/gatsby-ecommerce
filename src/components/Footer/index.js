import React from "react";
import "./styles.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "charis.jpg" }) {
        childImageSharp {
          fixed(height: 100, width: 100, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <footer className="custom-footer">
      <div className="footer-copyright">
        <p>All Site Content is property of Charis Cheung {currentYear}.</p>
      </div>
      <div className="footer-image-text">
        <Img fixed={data.file.childImageSharp.fixed} objectPosition="bottom" />
        {/* <p>{data.allDatoCmsHomePage.edges[0].node.footerQuote}</p> */}
      </div>
      <div className="footer-links">
        <a
          href="https://charischeung.com/"
          style={{ display: "flex", alignItems: "center", gap: "3vw" }}
        >
          charischeung.com
        </a>
        <ul>
          <li>
            <a href="https://www.instagram.com/charis.cheung/">
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./styles.scss";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "charis.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <footer className="footer">
      <div className="footer-image-text">
        <Img fixed={data.file.childImageSharp.fixed} />
        {/* <p>{data.allDatoCmsHomePage.edges[0].node.footerQuote}</p> */}
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/presets">Preset</Link>
          </li>
          <li>
            <Link to="/presets">Help</Link>
          </li>
          <li>
            <Link to="/presets">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://charischeung.com/"
              style={{ display: "flex", alignItems: "center", gap: "3vw" }}
            >
              My Portfolio
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/charis.cheung//">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

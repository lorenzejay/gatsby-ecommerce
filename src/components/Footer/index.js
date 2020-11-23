import React from "react";
import "./styles.scss";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import { GrContactInfo } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

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
        <p>
          Working with people who appreciate art is our passion; we'd love to tell your wedding
          story.
        </p>
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

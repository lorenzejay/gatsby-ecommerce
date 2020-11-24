import React from "react";
import Layout from "../layouts";
import "../style/Help.scss";
import { graphql, useStaticQuery } from "gatsby";

export default function Help() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHelpPage {
        edges {
          node {
            title
            howToDownloadForDesktop
            howToDownloadForMobile
          }
        }
      }
    }
  `);
  console.log(data.allDatoCmsHelpPage.edges[0].node);
  const helpPageData = data.allDatoCmsHelpPage.edges[0].node;
  return (
    <Layout>
      <div className="help-page">
        <h1>{helpPageData.title}</h1>
        <h4>How to Download for Lightroom (Desktop)</h4>
        <p>{helpPageData.howToDownloadForDesktop}</p>
        <h4>How to Download for Lightroom (Mobile)</h4>
        <p>{helpPageData.howToDownloadForMobile}</p>
      </div>
    </Layout>
  );
}

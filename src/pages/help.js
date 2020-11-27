import React from "react";
import Layout from "../layouts";
import "../style/Help.scss";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import SEO from "../components/seo";

export default function Help({ location }) {
  return (
    <Layout>
      <SEO
        title="Help"
        description="Resources on how to download my presets for Adobe Lightoom Mobile and Lightroom CC."
        pathname={location.pathname}
      />
      <div className="help-page">
        <h1>How to Download my Presets</h1>
        <div>
          <h4>How to Download for Lightroom (Desktop)</h4>
          <ol>
            <li>After purchasing, you should have recieved an .XMP file.</li>
            <li>Open Lightroom Classic and import a photo you want to edit</li>
            <li>Press “Develop” on the top right.</li>
            <li>Once there, you should have a tab called “Presets” on right left side. </li>
            <li>Press the plus button and then “Import Presets”</li>
            <li>Click on the Preset files you just downloaded</li>
            <li>
              You are good to go! now just click on my presets and adjust according to your photo :)
            </li>
          </ol>
          <p>
            Additional Resources to help you{" "}
            <a href="https://www.lookslikefilm.com/2019/02/03/how-to-install-lightroom-presets/">
              How to download presets
            </a>
          </p>
        </div>

        <div>
          <h4>How to Download for Lightroom (Mobile)</h4>
          <ol>
            <li>
              After purchasing, you should have recieved a DNG file. Download the DNG file and save
              it to your camera roll. (It may appear blank on your camera roll. This is not a
              problem)
            </li>
            <li>Go to your Lightroom mobile app and import that file</li>
            <li>Once its imported, you are almost done!</li>
            <li>
              On the top right corner, press the three dots and then "create preset" name it Charis
              Presets- (whichever one you got)
            </li>
            <li>
              Now you are set! Use my presets on any photo you like by just going to your user
              presets and clicking on the one you purchased :)
            </li>
            <li>
              You can also copy and paste the settings from the imported DNG file to your pictures{" "}
            </li>
          </ol>

          <hr />
          <p style={{ marginTop: "10vh" }}>
            If you still need help, contact me
            <Link to="/contact"> here</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

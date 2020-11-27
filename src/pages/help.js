import React from "react";
import Layout from "../layouts";
import "../style/Help.scss";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

export default function Help() {
  return (
    <Layout>
      <Helmet title="Help" />
      <div className="help-page">
        <h1>How to Download my Presets</h1>
        <div>
          <h4>How to Download for Lightroom (Desktop)</h4>
          <ol>
            <li>Download the your preset. You should have recieved an .xmp file.</li>
            <li>
              Open Lightroom Classic and if you're on windows press on edit then Preferences, on
              apple the Lighroom tab then presets.
            </li>
            <li>Choose the preset tab.</li>
            <li>Drag and drop you the preset you downloaded into the Settings folder.</li>
            <li>Restart Lightroom.</li>
            <li>You should now have the presets on the Presets tab.</li>
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
          <ol></ol>

          <hr />
          <p>
            If you still need help, contact me
            <Link to="/contact"> here</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

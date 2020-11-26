import { Link } from "gatsby";
import React from "react";
import Layout from "../layouts";
import "../style/ThankYou.scss";

const ThankYouPage = () => {
  return (
    <Layout>
      <div className="ThankYouPage">
        <h1>Contact</h1>
        <p>Thank you for your submission.</p>
        <Link to="/">Return Home</Link>
      </div>
    </Layout>
  );
};

export default ThankYouPage;

import { Link } from "gatsby";
import React from "react";
import Layout from "../layouts";
import "../style/404.scss";
import { FaSadCry } from "react-icons/fa";

const NotFoundPage = () => (
  <Layout>
    <div className="error-pages">
      <h1>404</h1>
      <h5>
        Page not found <FaSadCry size="40" />{" "}
      </h5>

      <p>
        Let's bring you back to home here: <Link to="/">Home</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;

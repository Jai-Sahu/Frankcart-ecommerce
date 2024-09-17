import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Looking for top-notch products at great prices? Look no further than Frankcart. Our online store features a diverse selection of products, including fashion and electronics, all backed by speedy, secure delivery and outstanding customer support. Our goal is to ensure you have a fantastic shopping experience that surpasses your expectations.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

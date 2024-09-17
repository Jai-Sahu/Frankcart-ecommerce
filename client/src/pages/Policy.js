import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <p>Privacy Policy</p>
          <p>Return and Refund Policy</p>
          <p>Shipping Policy</p>
          <p>Terms and Conditions</p>
          <p>Payment Policy</p>
          <p>Cancellation Policy</p>
          <p> Customer Support Policy</p>
          <p> Warranty Policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

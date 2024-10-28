import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Confirmation() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get("firstName");

  return (
    <div className="p-10">
      <Helmet>
        <title>Munamii Cakery - Confirmation</title>
      </Helmet>
      <h1>Thank you {firstName}!</h1>
      <p>We have received your message and will get back to you shortly.</p>
      <p>
        Back{" "}
        <Link
          className="underline decoration-1 underline-offset-4 hover:bg-lightpink "
          to="/"
        >
          to home page.
        </Link>
      </p>
    </div>
  );
}

export default Confirmation;

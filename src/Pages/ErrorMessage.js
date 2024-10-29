import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function ErrorMessage() {
  return (
    <div className="p-10">
      <Helmet>
        <title>Munamii Cakery - Error!</title>
      </Helmet>
      <h1>Ooops! </h1>
      <p>Something went wrong!</p>
      <p>
        Back{" "}
        <Link
          className="underline decoration-1 underline-offset-4 hover:bg-lightpink "
          to="/"
        >
          to Munamii's home page.
        </Link>
      </p>
    </div>
  );
}

export default ErrorMessage;
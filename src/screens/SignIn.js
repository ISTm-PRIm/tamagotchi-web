import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div>SignIn Page</div>
      <Link to={"Home"}>
        <div>Sign In</div>
      </Link>
    </div>
  );
};

export default SignIn;

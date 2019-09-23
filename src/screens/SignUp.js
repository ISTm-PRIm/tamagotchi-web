import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div>SignUp Page</div>
      <Link to={"Home"}>
        <div>Sign Up</div>
      </Link>
    </div>
  );
};

export default SignUp;

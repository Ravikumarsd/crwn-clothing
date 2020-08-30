import React from "react";
import "./sign-in-and-sign-up.styles.css";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-sign-up">
      <div>
        SIGNIN
        <SignIn />
      </div>
      <div>
        SIGNUP
        <SignUp />
      </div>
    </div>
  );
};

export default SignInAndSignUp;

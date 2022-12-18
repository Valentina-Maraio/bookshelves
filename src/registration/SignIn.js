import React from "react";
import '../login/style/Login.css'
import { TextInputField, Button } from "evergreen-ui";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="App-header">
        <h2>Login Page</h2>
        <TextInputField
          id="ids-are-optional"
          label="Username"
          required
          placeholder="Username"
        />
        <TextInputField
          id="ids-are-optional"
          label="Email"
          required
          placeholder="Email"
        />
        <TextInputField
          id="ids-are-optional"
          label="Password"
          required
          placeholder="Password"
        />
        <TextInputField
          id="ids-are-optional"
          label="Confirm Password"
          required
          placeholder="Confirm Password"
        />
        <Button marginRight={16} appearance="minimal">
          <Link className="login" to="/profile">
            Singn in
          </Link>
        </Button>
      </div>
    </>
  );
};

export default SignIn;

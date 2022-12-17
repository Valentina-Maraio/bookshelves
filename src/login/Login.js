import React from "react";
import './style/Login.css'
import { TextInputField, Button } from "evergreen-ui";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <h2>Login Page</h2>
        <TextInputField
          id="ids-are-optional"
          label="Username"
          required
          placeholder="Username"
        />
        <TextInputField
          id="ids-are-optional"
          label="Password"
          required
          placeholder="Password"
        />
        <Button marginRight={16} appearance="minimal">
          <Link className="login" to="/profile">Login</Link>
        </Button>
      </div>
    </>
  );
};

export default Login;

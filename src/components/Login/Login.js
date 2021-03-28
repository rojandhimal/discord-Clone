import React from "react";
import "./Login.css";
import discordLogo from "../../assets/images/Discord-logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={discordLogo} alt="" className="logo" />
      </div>

      <Button onClick={signIn}>Sign In </Button>
    </div>
  );
}

export default Login;

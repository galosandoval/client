import React from "react";
import { Button } from "@material-ui/core";

import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../store/StateProvider";
import { actionTypes } from "../../store/reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        dispatch({ type: actionTypes.SET_USER, user: res.user });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://image.flaticon.com/icons/png/512/2111/2111615.png" />
        <h1>Sign in to Galo's Slack Clone</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;

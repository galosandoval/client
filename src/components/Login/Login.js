import React from "react"
import { Button } from "@material-ui/core"

import './Login.css'

const Login = () => {
  const signIn = (event) => {
    event.preventDefault()
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://image.flaticon.com/icons/png/512/2111/2111615.png" />
      <h1>Sign in to Slack Clone</h1>
      <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login
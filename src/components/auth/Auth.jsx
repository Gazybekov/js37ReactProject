import { Button, TextField } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContextProvider";

const Auth = () => {
  const {
    user,
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    setUser,
    setEmailError,
    setPasswordError,
    handleRegister,
    handleLogOut,
    handleLogin,
  } = useAuth();
  console.log(emailError, passwordError);
  return (
    <div>
      {/* <TextField
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helperText={emailError}
      />
      <TextField
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        helperText={passwordError}
      />
      <Button onClick={handleRegister} variant="contained">
        Register
      </Button> */}
      <TextField
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helperText={emailError}
      />
      <TextField
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        helperText={passwordError}
      />
      <Button onClick={handleLogin} variant="contained">
        Login
      </Button>
    </div>
  );
};

export default Auth;

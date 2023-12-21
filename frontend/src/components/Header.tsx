import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? <>
          <NavigationLink bg="#00fffc" to="/chat" text="Go to Chat" textColor="black"/>
          <NavigationLink bg="#51538f" to="/" text="Logout" textColor="white" onClick={auth.logout}/>
          </> : <>
          <NavigationLink bg="#00fffc" to="/login" text="Signup" textColor="black"/>
          <NavigationLink bg="#51538f" to="/signup" text="Login" textColor="white"/>
          </>}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
      <div
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Link to={"/"}>
          <img
            src="./src/assets/openai.png"
            alt="openai"
            width={"30px"}
            height={"30px"}
            className="image-inverted"
          />
          <Typography
            sx={{
              display: { md: "block", sm: "none", xs: "none" },
              mr: "auto",
              fontweight: "800",
              textShadow: "2px 2px 20px #000",
            }}>
              <span style={{ fontSize: "20px"}}>MERN</span>-GPT
            </Typography>
        </Link>
      </div>
    );
  };

export default Logo
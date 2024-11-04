import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Size } from "./media-query";
import Container from "@mui/material/Container";
import {
  layoutbgcolor,
  CompanyName,
  topbartextcolor,
  AppFont,
} from "./feutures";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const TopBar = ({ setTopBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: layoutbgcolor,
        opacity: "70%",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "5pt",
        }} // Align items to the left
      >
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={setTopBarOn}
          color={topbartextcolor}
        >
          <MenuIcon />
        </IconButton>
        <IconButton href="tel:+27829055060" color={topbartextcolor}>
          <LocalPhoneIcon sx={{ maxWidth: "60%" }} size="small" />
        </IconButton>
        <IconButton href="https://wa.me/+27829055060" color={topbartextcolor}>
          <WhatsAppIcon sx={{ maxWidth: "60%" }} size="small" />
        </IconButton>
        <Container>
          <div
            style={{ color: topbartextcolor, fontFamily: AppFont }}
            className={`text-gray-light text-center font-bold text-${
              isResponsiveSize ? "l" : "2xl"
            } mr-${isResponsiveSize ? "36" : "20"} `}
          >
            {CompanyName}
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

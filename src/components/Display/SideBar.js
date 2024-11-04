import React from "react";
import { Button } from "@mui/material";
import { TopBarButtonStyle } from "./feutures";
import { Routes } from "components/Routes";
import { Size } from "components/Display/media-query";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const SideBar = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM"].includes(size);

  return (
    <div className="flex align-center justify-center">
      {size == "XS" || size == "SM" ? (
        <div
          className={`grid grid-flow-${
            isResponsiveSize ? "col" : "row"
          } gap-1 mt-${isResponsiveSize ? "20" : "24"} px-2`}
        >
          {Routes.map((page) => (
            <Button
              key={page.path} // Add a key prop for better list rendering
              href={page.path}
              sx={TopBarButtonStyle}
              onClick={setTopBarOn}
              className="shadow-md"
              variant="contained"
              style={{ textTransform: "none" }}
            >
              {page.name}
            </Button>
          ))}
        </div>
      ) : (
        <div
          className={`grid grid-flow-${
            isResponsiveSize ? "col" : "row"
          } gap-4 mt-${isResponsiveSize ? "20" : "24"} px-2`}
        >
          {Routes.map((page) => (
            <Button
              key={page.path} // Add a key prop for better list rendering
              onClick={setTopBarOn}
              href={page.path}
              sx={TopBarButtonStyle}
              className="shadow-md"
              variant="contained"
              style={{ textTransform: "none" }}
            >
              {page.name}
            </Button>
          ))}
          <div className="flex align-center justify-center">
            <div className="grid grid-cols-2 gap-1 mt-9">
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from "react";
import { TopBar } from "components/Display/TopBar";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
import { SideBar } from "./SideBar";
import { Slide } from "@mui/material";
import { Size } from "components/Display/media-query";
import { layoutbgcolor } from "./feutures";

export const ScreenLayout = () => {
  const size = Size();
  const [topBarOn, setTopBarOn] = useState(
    false 
  );

  const toggleTopBar = () => {
    setTopBarOn((prev) => !prev);
  };

  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vw",
        backgroundColor: "#f0f0f0",
      }}
    >
      <TopBar setTopBarOn={toggleTopBar} />
      {topBarOn && (
        <div className="flex">
          {isResponsiveSize ? (
            <div>
              <Slide in={true} timeout={1200} direction="down">
                <div
                  style={{
                    backgroundColor: layoutbgcolor,
                    paddingBottom: "16pt",
                    position: "fixed",
                    opacity: "100%",
                    top: 0, // Ensure it's at the top of the viewport
                    left: 0, // Align to the left edge
                    right: 0, // Stretch to the right edge
                    zIndex: 1000, // Ensure it’s on top of other content
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div>
                <ScreenLayoutInner className="h-screen" topBarOn={topBarOn} />
              </div>
            </div>
          ) : (
            <div className="flex">
              <Slide
                in={topBarOn || !topBarOn}
                timeout={1200}
                direction={"right"}
              >
                <div
                  style={{
                    backgroundColor: layoutbgcolor,
                    height: "100vh",
                    position: "fixed",
                    opacity: "100%",
                    width: "130px",
                    zIndex: 1000, // Ensure it’s on top of other content
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div style={{ marginLeft: "130px", height: "100vh" }}>
                <ScreenLayoutInner topBarOn={topBarOn} />
              </div>
            </div>
          )}
        </div>
      )}
      {!topBarOn && (
        <div>
          <ScreenLayoutInner className="h-screen" topBarOn={topBarOn} />
        </div>
      )}
    </div>
  );
};

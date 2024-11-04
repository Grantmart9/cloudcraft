import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import { Size } from "components/Display/media-query";
import { Box } from "@mui/material";
import { AppFont, TopBarButtonStyle,contentbgcolor} from "components/Display/feutures";
import Button from "@mui/material/Button";
import { Routes } from "components/Routes";
import { DatePickerExpand } from "components/Datepicker";
import { RenderHeader } from "components/Display/PageHeader";

const BookingContext = () => {
  return (
    <Fade in={true} timeout={1200}>
      <div sx={{ bgcolor: contentbgcolor }}>
        <div className="mt-3">
          <div
            style={{ color: "white", fontFamily: AppFont }}
            className="text-center justify-center font-bold"
          >
            Please provide arival and departure dates to confirm availability
          </div>
          <div className="grid md:grid-cols-2 gap-2 p-2">
            <div
              style={{ backgroundColor: contentbgcolor }}
              className=" rounded-md  p-2 align-center justify-center"
            >
              <div
                style={{ fontFamily: AppFont }}
                className="text-gray-dark text-center justify-center text-lg font-bold"
              >
                Arival date
              </div>
              <div className="flex align-center justify-center mt-2 pb-2">
                <DatePickerExpand />
              </div>
            </div>
            <div
              style={{ backgroundColor: contentbgcolor }}
              className=" rounded-md p-2 align-center justify-center"
            >
              <div
                style={{ fontFamily: AppFont }}
                className="text-gray-dark text-center justify-center text-lg font-bold"
              >
                Departure date
              </div>
              <div className="flex align-center justify-center mt-2 pb-2">
                <DatePickerExpand />
              </div>
            </div>
          </div>
          <div className="flex align-center justify-center mt-4">
            <Button sx={TopBarButtonStyle}>Check availability</Button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export const Bookings = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="block"
      style={{
        width: topBarOn
          ? isResponsiveSize
            ? "calc(100vw)"
            : "calc(100vw - 130px)"
          : isResponsiveSize
          ? "calc(100vw)"
          : "calc(100vw)",
      }}
    >
      <div
        style={{
          backgroundImage: Routes[2].backgroundImage,
          backgroundSize: "cover",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "hidden",
          height:"100vh"
        }}
      >
        <RenderHeader
          pageHeader={Routes[2].pageHeader}
          topBarOn={topBarOn}
          isResponsiveSize={isResponsiveSize}
        />
        <div style={{ opacity: "100%" }} className="p-3">
          <BookingContext />
        </div>
      </div>
    </div>
  );
};

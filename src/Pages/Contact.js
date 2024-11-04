import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardContent, TextField } from "@mui/material";
import { Size } from "components/Display/media-query";
import { Routes } from "components/Routes";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { RenderHeader } from "components/Display/PageHeader";
import { AppFont,contentbgcolor } from "components/Display/feutures";

const ContactContext = () => {
  return (
    <Fade in={true} timeout={1200}>
      <Box>
        <Card
          className="mx-auto"
          sx={{ bgcolor: contentbgcolor, maxWidth: "300px" }}
        >
          <CardContent>
            <div className="grid grid-flow-row gap-1 mb-3">
              <div className="grid grid-flow-col gap-1">
                email:<h1> evandre@telkomsa.co.za</h1>
              </div>
              <div className="grid grid-flow-col gap-1">
                phone:<h1> +27 82 905 5060</h1>
              </div>
            </div>
            <Typography variant="body1">
              <div className="grid grid-rows-1 gap-1">
                <div className="grid grid-flow-col gap-1">
                  <div className="flex text-right">Name:</div>
                  <TextField
                    className="flex align-center justify-center"
                    size="small"
                    sx={{ maxWidth: "400px" }}
                  />
                </div>
                <div className="grid grid-flow-col gap-1">
                  <div className="flex text-right">Email:</div>
                  <TextField
                    className="flex align-center justify-center"
                    size="small"
                    sx={{ maxWidth: "400px" }}
                  />
                </div>
                <div className="grid grid-flow-col gap-1">
                  <div className="flex text-right">Cell:</div>
                  <TextField
                    className="flex align-center justify-center"
                    size="small"
                    sx={{ maxWidth: "400px" }}
                  />
                </div>
              </div>
            </Typography>
            <div className="text-center justify-center font-bold mt-4">
              Query
            </div>
            <TextField fullWidth="true" />
            <div className="flex align-center justify-center mt-3">
              <Button
                className="rounded-md"
                sx={{ backgroundColor: "black", color: "white" }}
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
};

export const Contact = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  // const [y, setY] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => setY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventLitener("scroll", handleScroll);
  // }, []);

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
          pageHeader={Routes[3].pageHeader}
          topBarOn={topBarOn}
          isResponsiveSize={isResponsiveSize}
        />
        <div style={{ opacity: "100%" }} className="p-3">
          <ContactContext />
        </div>
      </div>
    </div>
  );
};

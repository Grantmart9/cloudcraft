import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import { Size } from "components/Display/media-query";
import { Slide } from "@mui/material";
import kassies from "Videos/kassies.mp4";
import kassies2 from "Videos/kassies2.mp4";
import I8 from "Images/I8.jpg";
import I2 from "Images/I2.jpg";
import I4 from "Images/I4.jpg";
import { AppFont,contentbgcolor } from "components/Display/feutures";
import { Routes } from "components/Routes";
import { RenderHeader } from "components/Display/PageHeader";

const LandingContext = () => {
  return (
    <div className="grid grid-flow-row gap-2">
      <Fade in={true} timeout={2800}>
        <div
          className="rounded-md"
          style={{
            fontFamily: AppFont,
            color: "black",
            backgroundColor: contentbgcolor,
            opacity: "100%",
            padding: "5pt",
          }}
        >
          <video
            controls
            muted
            loop
            src={kassies2}
            width={"100%"}
            type="video/mp4"
          />
        </div>
      </Fade>
      <Slide direction="right" in={true} timeout={2800}>
        <div
          className="flex rounded-md text-center justify-center"
          style={{
            fontFamily: AppFont,
            color: "black",
            backgroundColor: contentbgcolor,
            opacity: "80%",
            padding: "10pt",
          }}
        >
          Experience the charm of seaside living at Kassiesbaai Cottage, nestled
          in the picturesque coastal village of Arniston. Just steps away from
          the pristine Arniston Beach and a short drive to De Mond Nature
          Reserve, this beachfront gem is the perfect retreat for nature lovers
          and relaxation seekers alike. Kassiesbaai Cottage features inviting
          barbecue facilities with stunning sea views, ideal for enjoying al
          fresco dining. Stay connected with complimentary WiFi while engaging
          in fun games of darts. Our thoughtfully designed apartment is fully
          accessible, ensuring an enjoyable stay for all guests. This cozy
          getaway boasts a well-appointed bedroom, a modern kitchen complete
          with an oven and microwave, and a comfortable seating area, all
          enhanced by a flat-screen TV.
        </div>
      </Slide>
      <Fade in={true} timeout={2800}>
        <div
          className="rounded-md"
          style={{
            fontFamily: AppFont,
            color: "black",
            backgroundColor: contentbgcolor,
            opacity: "100%",
            padding: "5pt",
          }}
        >
          <video
            controls
            muted
            loop
            src={kassies}
            width={"100%"}
            type="video/mp4"
          />
        </div>
      </Fade>
      <Slide direction="left" in={true} timeout={2800}>
        <div
          className="flex rounded-md text-center justify-center"
          style={{
            fontFamily: AppFont,
            color: "black",
            backgroundColor: contentbgcolor,
            opacity: "80%",
            padding: "10pt",
          }}
        >
          The soothing ambiance is complemented by tiled floors and a welcoming
          fireplace, creating a peaceful atmosphere to unwind. For your privacy,
          the accommodation includes a separate entrance. Explore the beautiful
          surroundings with activities such as cycling, and discover local
          attractions like the Shipwreck Museum in Bredasdorp, only 25 km away,
          or the captivating Arniston Cave, just 1.4 km from your doorstep.
          Couples will adore the romantic setting, with a remarkable rating of
          9.6 for two-person getaways. Make Kassiesbaai Cottage your next
          holiday destination and indulge in a perfect blend of comfort and
          adventure by the sea!
        </div>
      </Slide>
    </div>
  );
};

export const Landing = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const RenderImages = () => {
    return (
      <Fade in={true} timeout={2800}>
        <div style={{ backgroundColor: contentbgcolor }} className="rounded-md">
          <div className="grid grid-cols-3 p-2">
            <img src={I8} />
            <img src={I2} />
            <img src={I4} />
          </div>
        </div>
      </Fade>
    );
  };

  const RenderLanding = () => (
    <Fade in={true} timeout={2500}>
      <div className="pt-2">
        <LandingContext />
      </div>
    </Fade>
  );

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
          backgroundImage: Routes[3].backgroundImage,
          backgroundSize: "cover",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <RenderHeader
          pageHeader={Routes[0].pageHeader}
          topBarOn={topBarOn}
          isResponsiveSize={isResponsiveSize}
        />
        <div style={{ opacity: "100%" }} className="p-3">
          <RenderImages />
          <RenderLanding />
        </div>
      </div>
    </div>
  );
};

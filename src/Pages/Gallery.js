import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import { Size } from "components/Display/media-query";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpg";
import I4 from "Images/I4.jpg";
import I5 from "Images/I5.jpg";
import I6 from "Images/I6.jpg";
import I7 from "Images/I7.jpg";
import I8 from "Images/I8.jpg";
import I10 from "Images/I10.jpg";
import I11 from "Images/I11.jpg";
import I12 from "Images/I12.jpg";
import I13 from "Images/I13.jpg";
import I14 from "Images/I14.jpg";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Routes } from "components/Routes";
import { RenderHeader } from "components/Display/PageHeader";
import { AppFont,contentbgcolor } from "components/Display/feutures";

const itemData = [
  {
    img: I11,
    title: "Kitchen",
  },
  {
    img: I7,
    title: "Blinds",
  },
  {
    img: I12,
    title: "Laptop",
  },
  {
    img: I14,
    title: "Doors",
  },
  {
    img: I2,
    title: "Storage",
  },
  {
    img: I3,
    title: "Candle",
  },
  {
    img: I4,
    title: "Coffee table",
  },
  {
    img: I5,
    title: "Coffee table",
  },
  {
    img: I6,
    title: "Coffee table",
  },
  {
    img: I8,
    title: "Coffee table",
  },
  ,
  {
    img: I10,
    title: "Coffee table",
  },
  {
    img: I13,
    title: "Coffee table",
  },
];

const GalleryContext = () => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  return (
    <Box>
      <ImageList variant="masonry" cols={isResponsiveSize ? 2 : 3} gap={2}>
        {itemData.map((item) => (
          <ImageListItem
            style={{ backgroundColor: contentbgcolor }}
            className="rounded-md p-1"
            key={item.img}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export const Gallery = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const RenderGallery = () => (
    <Fade in={true} timeout={2500}>
      <div>
        {topBarOn ? (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  opacity: "100%",
                }}
              >
                <GalleryContext />
              </div>
            ) : (
              <div
                style={{
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
              </div>
            )}
          </div>
        ) : (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
              </div>
            ) : (
              <div
                style={{
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
              </div>
            )}
          </div>
        )}
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
          backgroundImage: Routes[4].backgroundImage,
          backgroundSize: "cover",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <RenderHeader
          pageHeader={Routes[1].pageHeader}
          topBarOn={topBarOn}
          isResponsiveSize={isResponsiveSize}
        />
        <div style={{ opacity: "100%" }} className="p-3">
          <RenderGallery />
        </div>
      </div>
    </div>
  );
};

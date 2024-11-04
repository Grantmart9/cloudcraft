import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import { Slide } from "@mui/material";
import { Button } from "primereact/button";
import { Size } from "components/Display/media-query";
import {
  AppFont,
  TopBarButtonStyle,
  contentbgcolor,
} from "components/Display/feutures";
import { Routes } from "components/Routes";
import { TextAnimation } from "components/Display/TextTypeAnimation";
import HikingIcon from "@mui/icons-material/Hiking";
import PhishingIcon from "@mui/icons-material/Phishing";
import WineBarIcon from "@mui/icons-material/WineBar";
import DiningIcon from "@mui/icons-material/Dining";

const activities = [
  {
    title: "Waenhuiskrans Nature Reserve",
    description:
      "Explore stunning coastal scenery, hiking trails, and unique rock formations. Don't miss the famous Waenhuiskrans Cave.",
  },
  {
    title: "Bredasdorp",
    description:
      "Visit the nearby town for charming shops and the Shipwreck Museum, showcasing the area's maritime history.",
  },
  {
    title: "Cape Agulhas",
    description:
      "Visit the southernmost tip of Africa, see the iconic lighthouse, and enjoy views where the Atlantic and Indian Oceans meet.",
  },
  {
    title: "Struisbaai",
    description:
      "Enjoy the beautiful beach, stroll along the promenade, or try your hand at fishing.",
  },
  {
    title: "Agulhas National Park",
    description:
      "Explore this scenic park featuring unique fynbos vegetation, hiking trails, and birdwatching opportunities.",
  },
  {
    title: "Elim",
    description:
      "A historic Moravian mission village with picturesque white-washed buildings and a tranquil atmosphere.",
  },
  {
    title: "Dolphin and Whale Watching",
    description:
      "Depending on the season, take boat trips from nearby towns for marine wildlife viewing.",
  },
  {
    title: "Sandboarding and Quad Biking",
    description: "Head to the nearby dunes for some adventure sports.",
  },
  {
    title: "Local Cuisine",
    description:
      "Sample fresh seafood at local restaurants or explore local markets for regional delicacies.",
  },
  {
    title: "Horse Riding",
    description:
      "Look for stables offering beach or trail rides for a unique way to explore the coastline.",
  },
];

export const Fun = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  const FunButtons = () => {
    const Buttons = [
      { name: "Wine", icon: <><WineBarIcon/></> },
      { name: "Hiking", icon: <><HikingIcon/></> },
      { name: "Fishing", icon: <><PhishingIcon/></> },
      { name: "Dining", icon: <><DiningIcon/></> },
    ];

    return (
      <div className="bg-gray-light rounded-md mb-4">
        <div className="grid grid-flow-col gap-2 p-1">
          {Buttons.map((button) => (
            <Button
              style={{ backgroundColor: contentbgcolor }}
              className="rounded-md p-2"
              size="small"
            >
              <div className="text-center text-gray-dark mx-auto text-md">
                {button.name}  {button.icon}
              </div>
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const FunContext = () => {
    return (
      <div style={{ backgroundColor: contentbgcolor }} className="rounded-md">
        {size == "XS" || size == "SM" || size == "MD" ? (
          <>
            <Fade in={true} timeout={500}>
              <div className="flex text-center justify-center p-2">
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index}>
                      <div style={{ fontFamily: AppFont }} clasName="font-bold">
                        {activity.title}
                      </div>
                      <p style={{ fontFamily: AppFont }}>
                        {activity.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </>
        ) : (
          <>
            <Fade in={true} timeout={1000}>
              <div className="flex text-center justify-center p-2">
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index}>
                      <div style={{ fontFamily: AppFont }} clasName="font-bold">
                        {activity.title}
                      </div>
                      <p style={{ fontFamily: AppFont }}>
                        {activity.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </>
        )}
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const RenderHeader = ({ pageHeader }) => (
    <Slide in={true} timeout={1000}>
      <div>
        {topBarOn ? (
          <div>
            {isResponsiveSize ? (
              <h1
                style={{ color: "white", fontFamily: AppFont }}
                className=" text-center justify-center text-3xl mt-32"
              >
                <TextAnimation />
              </h1>
            ) : (
              <h1
                style={{ color: "white", fontFamily: AppFont }}
                className=" text-center justify-center text-3xl mt-20"
              >
                <TextAnimation />
              </h1>
            )}
          </div>
        ) : (
          <div>
            {isResponsiveSize ? (
              <h1
                style={{ color: "white", fontFamily: AppFont }}
                className=" text-center justify-center  text-3xl mt-20"
              >
                <TextAnimation />
              </h1>
            ) : (
              <h1
                style={{ color: "white", fontFamily: AppFont }}
                className=" text-center justify-center text-3xl mt-20"
              >
                <TextAnimation />
              </h1>
            )}
          </div>
        )}
      </div>
    </Slide>
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
        height: "100vh",
        scrollbarWidth: "none",
      }}
    >
      <div
        style={{
          backgroundImage: Routes[1].backgroundImage,
          backgroundSize: "cover",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <RenderHeader pageHeader={Routes[4].pageHeader} />
        <div style={{ opacity: "100%" }} className="p-3">
          <FunButtons />
          <FunContext />
        </div>
      </div>
    </div>
  );
};

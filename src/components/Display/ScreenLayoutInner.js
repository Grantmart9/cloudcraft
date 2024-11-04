import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Landing } from "Pages/Landing";
import { Gallery } from "Pages/Gallery";
import { Contact } from "Pages/Contact";
import { Bookings } from "Pages/Bookings";
import { Routes } from "components/Routes";
import { Fun } from "Pages/Fun";

export const ScreenLayoutInner = ({ topBarOn }) => {
  return (
    <div>
      <Switch>
        <Route path={Routes[0].path}>
          <Landing topBarOn={topBarOn} />
        </Route>
        <Route path={Routes[1].path}>
          <Gallery topBarOn={topBarOn} />
        </Route>
        <Route path={Routes[2].path}>
          <Bookings topBarOn={topBarOn} />
        </Route>
        <Route path={Routes[3].path}>
          <Contact topBarOn={topBarOn} />
        </Route>
        <Route path={Routes[4].path}>
          <Fun topBarOn={topBarOn} />
        </Route>
        <Route path="/">
          <Landing topBarOn={topBarOn} />
        </Route>
      </Switch>
    </div>
  );
};

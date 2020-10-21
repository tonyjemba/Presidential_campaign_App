import React from "react";
import Main from "./main/main";
import "./App.less";
import { BackTop } from "antd";
import HeaderComponent from "./universal/HeaderComponent/HeaderComponent";
import FooterComponent from "./universal/FooterComponent/FooterComponent";
import EventsComponent from "./Events/EventsComponent";
import AboutComponent from "./About/AboutComponent";
import VideosComponent from "./Videos/VideosComponent";
import NewsComponent from "./NewsComponent/NewsComponent";
import ContactComponent from "./Contact/ContactComponent";
import StoreComponent from "./Store/StoreComponent";
import StoreLog from "./universal/StoreLog/StoreLog";
import Cart from "./universal/Cart/Cart";
import Checkout from "./universal/Checkout/Checkout";
import Getinvolved from "./universal/Getinvolved/Getinvolved";
import Terms from "./universal/Terms/Terms"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <div>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/events">
              <EventsComponent />
            </Route>
            <Route path="/news">
              <NewsComponent />
            </Route>
            <Route path="/videos">
              <VideosComponent />
            </Route>
            <Route path="/about_Kyagulanyi">
              <AboutComponent />
            </Route>
            <Route path="/contact">
              <ContactComponent />
            </Route>
            <Route path="/store">
              <StoreComponent />
            </Route>
            <Route path="/storeAuthentication">
              <StoreLog/>
            </Route>
            <Route path="/Cart">
              <Cart/>
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
            <Route path="/getInvolved">
              <Getinvolved/>
            </Route>
            <Route path="/privacyPoliy_Terms">
              <Terms/>
            </Route>
          </Switch>
        </div>
        <BackTop />
        <FooterComponent />

      </div>
    </Router>
  );
}

export default App;

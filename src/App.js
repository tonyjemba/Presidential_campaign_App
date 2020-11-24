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
import Checkout from "./universal/Checkout/Checkout";
import Getinvolved from "./universal/Getinvolved/Getinvolved";
import Terms from "./universal/Terms/Terms";
import KAdminLogin from "./Admin/KAdminLogin";
import VolunteerForm from "./universal/VolunteerForm/VolunteerForm";
import KAdmin from "./Admin/KAdmin";
import Event from "./Events/Event";
import News from "./NewsComponent/News";
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
            <Route path="/volunteer"><VolunteerForm/></Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/getInvolved">
              <Getinvolved />
            </Route>
            <Route path="/privacyPoliy_Terms">
              <Terms />
            </Route>
            <Route path="/event/:id" children={<Event />} />
            <Route path="/thenews/:id" children={<News />} />
            <Route path="/login">
              <KAdminLogin />
            </Route>
            <Route path="/Ksignup">
              <KAdminLogin />
            </Route>
            <Route path="/Admin_Panel">
              <KAdmin />
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

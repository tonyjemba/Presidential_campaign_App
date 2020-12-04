import React from "react";
import "./App.less";
import Loadable from "react-loadable";
import { BackTop, Result,Button } from "antd";
import HeaderComponent from "./universal/HeaderComponent/HeaderComponent";
import FooterComponent from "./universal/FooterComponent/FooterComponent";
import {Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";


const domain = "dev-0s5nlpcu.us.auth0.com";
const clientId = "2dLeAVwtZdKL2X5BDtRw4fsZp7kG3rrA";

const antIcon = <LoadingOutlined style={{ fontSize: 55 }} spin />;

const Loader = ({ pastDelay, error }) => {
  if (error) {
    return (
      <Result
        status="500"
        title="Vote Kyagulanyi For President"
        subTitle="Sorry, something went wrong."
        extra={<Link to="/"><Button type="primary">Refresh</Button></Link>}
      />
    );
  } else if (pastDelay) {
    return (
      <div style={{width:"100%",height:"100vh"}} className="flex items-center justify-center">
        <div>
          <Spin indicator={antIcon} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};


const AsyncMain = Loadable({
  loader: () => import("./main/main"),
  loading: Loader,
});
const AsyncEvents = Loadable({
  loader: () => import("./Events/EventsComponent"),
  loading: Loader,
});

const AsyncAbout = Loadable({
  loader: () => import("./About/AboutComponent"),
  loading: Loader,
});

const AsyncVideos = Loadable({
  loader: () => import("./Videos/VideosComponent"),
  loading: Loader,
});

const AsyncNews = Loadable({
  loader: () => import("./NewsComponent/NewsComponent"),
  loading: Loader,
});

const AsyncContact = Loadable({
  loader: () => import("./Contact/ContactComponent"),
  loading: Loader,
});


const AsyncInvolved = Loadable({
  loader: () => import("./universal/Getinvolved/Getinvolved"),
  loading: Loader,
});

const AsyncTerms = Loadable({
  loader: () => import("./universal/Terms/Terms"),
  loading: Loader,
});

const AsyncVolunteer = Loadable({
  loader: () => import("./universal/VolunteerForm/VolunteerForm"),
  loading: Loader,
});
const AsyncAdmin = Loadable({
  loader: () => import("./Admin/KAdmin"),
  loading: Loader,
});
const AsyncEvent = Loadable({
  loader: () => import("./Events/Event"),
  loading: Loader,
});
const AsyncNew = Loadable({
  loader: () => import("./NewsComponent/News"),
  loading: Loader,
});

const Live = Loadable({
  loader: () => import("./universal/Live/Live"),
  loading: Loader
});
const NotFoundPage = Loadable({
  loader: () => import("./NotFoundPage"),
  loading: Loader,
});

function App() {


  return (
    <Router>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <div>
          <HeaderComponent />
          <div>
            <Switch>
              <Route path="/" exact>
                <AsyncMain />
              </Route>
              <Route path="/events">
                <AsyncEvents />
              </Route>
              <Route path="/news">
                <AsyncNews />
              </Route>
              <Route path="/videos">
                <AsyncVideos />
              </Route>
              <Route path="/about_Kyagulanyi">
                <AsyncAbout />
              </Route>
              <Route path="/contact">
                <AsyncContact />
              </Route>
              <Route path="/volunteer">
                <AsyncVolunteer />
              </Route>
              <Route path="/getInvolved">
                <AsyncInvolved />
              </Route>
              <Route path="/privacyPoliy_Terms">
                <AsyncTerms />
              </Route>
              <Route path="/event/:id" children={<AsyncEvent />} />
              <Route path="/thenews/:id" children={<AsyncNew />} />

              <Route path="/KAdmin_Panel">
                <AsyncAdmin />
              </Route>
              <Route path="/live">
                <Live/>
              </Route>
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
          <BackTop />
          <FooterComponent />
        </div>
      </Auth0Provider>
    </Router>
  );
}

export default App;

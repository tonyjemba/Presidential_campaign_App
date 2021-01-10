import React from "react";
import "./App.less";
import ScrollToTop from "./ScrollToTop";
import Loadable from "react-loadable";
import { BackTop, Result,Button } from "antd";
import HeaderComponent from "./universal/HeaderComponent/HeaderComponent";
import FooterComponent from "./universal/FooterComponent/FooterComponent";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Main from "./main/main";
import { Helmet } from "react-helmet";


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

const AsyncUVote = Loadable({
  loader: () => import("./universal/uvote/UVote"),
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
    <div>
      <Helmet>
        <title>
          Vote Kyagulanyi Ssentamu Robert for President | A New Uganda.
        </title>
        <meta
          name="description"
          content="kyagulanyi for president 2021. This website was established to support Kyagulanyi's campaigns and provide information to the public regarding the unlawful political persecution of Kyagulanyi Ssentamu Robert (Bobi Wine) and the Ugandan people."
        />
        <meta
          name="keywords"
          content="bobiwine, kyagulanyi, Ssentamu, Robert, NationalUnityPlatform,NUP,uganda,weareremovingadictator,people,power, campaigns, president, website, bobi, wine, kyagulanyi2021"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Vote Kyagulanyi Ssentamu Robert for President| Campaign Website People Power"
        />
        <meta
          property="og:description"
          content="kyagulanyi for president 2021. This website was established to support Kyagulanyi's campaigns and provide information to the public regarding the unlawful political persecution of Kyagulanyi Ssentamu Robert (Bobi Wine) and the Ugandan people."
        />
        <meta property="og:url" content="https://kyagulanyi2021.com" />
        <meta
          property="og:site_name"
          content="kyagulanyi2021 Campaign Website"
        />
        <meta name="twitter:creator" content="@jemytt" />
        <meta
          name="twitter:description"
          content="kyagulanyi for president 2021. This website was established to support Kyagulanyi's campaigns and provide information to the public regarding the unlawful political persecution of Kyagulanyi Ssentamu Robert (Bobi Wine) and the Ugandan people."
        />
        <meta
          name="twitter:title"
          content="Vote Kyagulanyi Ssentamu Robert for President| Campaign Website People Power"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/projectk21-1a365.appspot.com/o/images%2FVoteKyagulanyi.jpg?alt=media&token=44ac05fd-738d-4c28-8026-265f18e4a816"
        />
        <link rel="canonical" href="https://kyagulanyi2021.com/" />
      </Helmet>
      <Router>
        <ScrollToTop>
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
                    <Main />
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
                  <Route path="/about">
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
                    <Live />
                  </Route>
                  <Route>
                    <AsyncUVote path="/UVote" />
                  </Route>
                  <Route path="*" component={NotFoundPage} />
                </Switch>
              </div>
              <BackTop />
              <FooterComponent />
            </div>
          </Auth0Provider>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

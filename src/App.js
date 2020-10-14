import React from 'react';
import Main from "./main/main";
import './App.less';
import HeaderComponent from "./universal/HeaderComponent/HeaderComponent";
import FooterComponent from "./universal/FooterComponent/FooterComponent";
import EventsComponent from "./Events/EventsComponent";
import VideosComponent from "./Videos/VideosComponent";
import NewsComponent from "./NewsComponent/NewsComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
          <div >
      <HeaderComponent/>
    <div>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/events">
        <EventsComponent/>
        </Route >
        <Route path="/news">
          <NewsComponent/>
        </Route>
            <Route path="/videos">
              <VideosComponent/>
        </Route>
      </Switch>
    </div>
    <FooterComponent/>
  </div>
    </Router>
  );
}

export default App;

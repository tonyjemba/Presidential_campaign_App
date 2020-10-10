import React from 'react';
import Main from "./main/main";
import './App.less';
import HeaderComponent from "./universal/HeaderComponent/HeaderComponent";
import FooterComponent from "./universal/FooterComponent/FooterComponent";
import EventsComponent from "./Events/EventsComponent";
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
        </Route>
      </Switch>
    </div>
    <FooterComponent/>
  </div>
    </Router>
  );
}

export default App;

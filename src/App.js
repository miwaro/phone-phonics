import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RingtonePage from "./components/Ringtones/Ringtones";
import TextPage from "./components/TextAlertPage/TextAlerts";
import RequestPage from "./components/Requests/Requests";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={RingtonePage} />
        <Route path="/text-alert-page" component={TextPage} />
        <Route path="/request-page" component={RequestPage} />
      </Switch>
    </Router>
  );
}

export default App;

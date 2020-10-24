import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RingtonePage from "./components/Ringtones/Ringtones";
import TextPage from "./components/TextAlertPage/TextAlerts";
import RequestPage from "./components/Requests/Requests";

export default function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/" component={RingtonePage} />
        <Route path="/text-alert-page" component={TextPage} />
        <Route path="/request-page" component={RequestPage} />
    </Router>
  );
}



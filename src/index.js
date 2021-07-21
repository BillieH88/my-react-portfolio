import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import { Route, BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe/aboutme";
import contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/porfolio";
import Resume from "./components/resume/resume";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={AboutMe} />
      <Route path="/about" component={AboutMe} />
      <Route path="/contact" component={contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

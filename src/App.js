import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home.js";
import Profile from "./views/Profile.js";
import Maps from "./views/Maps.js";
import Templates from "./views/Templates.js";
import Contact from "./views/Contact.js";
import Setting from "./components/Setting/setting.js";
import Icons from "./components/Icons.js";

function App() {
  return (
    <>
      <Icons />
      <Setting />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/map" component={Maps} />
        <Route path="/templates" component={Templates} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;

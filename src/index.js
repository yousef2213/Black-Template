import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { TemplateProvider } from "./context/context.js";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <TemplateProvider>
        <App />
      </TemplateProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

//  apiKey: "AIzaSyDjCQ69LxK_mAA2pFfGosM6wJCtyiuzw3c"

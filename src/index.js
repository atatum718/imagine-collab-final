import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import landing from "./landing-page/Landing"
// import * as serviceWorker from "./serviceWorker”;
ReactDOM.render(
 <React.StrictMode>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </React.StrictMode>,
 document.getElementById("root")
);
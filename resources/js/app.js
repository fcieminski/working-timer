import React from "react";
import ReactDOM from "react-dom";
import "../../public/css/index.css";
import * as serviceWorker from "./serviceWorker";
import Root from "./components/Root";
import "../sass/app.scss";
import "../sass/styles.scss";

require("./bootstrap");

require("./components/Root");

ReactDOM.render(<Root />, document.getElementById("app"));

serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
/*  Cargar los temas en el navegador localStoragecuando la aplicación aparezca por primera vez */
import * as themes from "./theme/scheme.json";
import { setToLS } from "./utils/storage";

import reportWebVitals from "./reportWebVitals";

const Index = () => {
  setToLS("all-themes", themes.default);
  return <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

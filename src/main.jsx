import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import RouterConfig from "./router/Router";
import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>
);

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import RouterConfig from "./router/Router";
import { Provider } from "react-redux";
import { reducers } from './reducers';
import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";


const store = createStore(reducers, compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>
);

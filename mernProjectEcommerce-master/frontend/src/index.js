// ALL IMPORTS MUST COME FIRST
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import axios from "axios"; // This import was moved up with the others

// ALL OTHER CODE (like setting baseURL) comes AFTER imports
axios.defaults.baseURL = "https://yashas-ecommerce-api.onrender.com";
axios.defaults.withCredentials = true;

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
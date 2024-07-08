import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";

import i18n from "./Locales/i18next";
import store from "./redux/store";

import "./index.css";
import "./style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

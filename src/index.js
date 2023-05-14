import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { AxiosInterceptor } from "./utils/axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AxiosInterceptor>
      <Provider store={store}>
        <App />
      </Provider>
    </AxiosInterceptor>
  </BrowserRouter>
);

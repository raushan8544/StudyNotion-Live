import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter }  from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReeducer from "./reducer/index";

const store = configureStore({
  reducer:rootReeducer,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
     </Provider>
    
  </React.StrictMode>
);

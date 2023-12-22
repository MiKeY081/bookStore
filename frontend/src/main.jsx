import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./assets/Header.jsx";
import Footer from "./assets/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <div className="min-h-[96vh]">
      <App/>
    </div>
    <Footer />
  </BrowserRouter>
);

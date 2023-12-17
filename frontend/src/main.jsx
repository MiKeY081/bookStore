import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Header from "./assets/Header.jsx";
import Footer from "./assets/Footer.jsx";
axios.defaults.baseURL = "http://localhost:5001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <div className="min-h-[96vh]">
      <App/>
    </div>
    <Footer />
  </BrowserRouter>
);

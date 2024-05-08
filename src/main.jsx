import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Movieprovider } from "./context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    
  <BrowserRouter>
  
    <React.StrictMode>
        <ScrollToTop/>
        <Movieprovider>
        <App />
        </Movieprovider>
     
     
    </React.StrictMode>
  </BrowserRouter>
);

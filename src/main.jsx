import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import Appb from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Appb />
    </StrictMode>
  </BrowserRouter>
);

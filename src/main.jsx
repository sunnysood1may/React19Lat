import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import './assets/style.css'
import Appb from "./App.jsx";
import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Appb />
    </StrictMode>
  </BrowserRouter>
);

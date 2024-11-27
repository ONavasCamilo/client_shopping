import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/UserProvider";
import axios from "axios";

//! PRODUCCIÓN

import { VITE_API_DEFAULT_URL } from "./config/env.config";
axios.defaults.baseURL = VITE_API_DEFAULT_URL;

//! DESAROLLO

// import { VITE_API_LOCAL_DEFAULT_URL } from "./config/env.config";
// axios.defaults.baseURL = VITE_API_LOCAL_DEFAULT_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

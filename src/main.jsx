import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/UserProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

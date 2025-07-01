import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ExpencFormContext from "./component/contextpage/ExpencFormContext.jsx";

createRoot(document.getElementById("root")).render(
  <ExpencFormContext>
    <StrictMode>
      <App />
    </StrictMode>
  </ExpencFormContext>
);

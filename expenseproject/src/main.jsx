import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ExpensFormContext from "./component/contextpage/ExpenseFormContext.jsx";

createRoot(document.getElementById("root")).render(
  <ExpensFormContext>
    <StrictMode>
      <App />
    </StrictMode>
  </ExpensFormContext>
);

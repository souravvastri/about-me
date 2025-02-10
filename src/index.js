import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Ensure React 18 uses `createRoot`
import App from "./App";
import "./styles.css"; // ✅ Import styles
import "./index.css";  // ✅ Import Tailwind styles

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

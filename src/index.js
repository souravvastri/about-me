import React from "react";
import ReactDOM from "react-dom/client"; // Import for React 18
import App from "./App";
import './styles.css';  // Importing the custom styles
import './index.css';


// Create root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(  // Render using the new root API
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

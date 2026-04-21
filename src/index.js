import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

const basePath = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
if (basePath && window.location.pathname === "/") {
    window.history.replaceState(null, "", basePath);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

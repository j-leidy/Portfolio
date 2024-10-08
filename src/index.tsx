import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PortfolioStore } from "./Redux/PortfolioStore";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ReduxProvider store={PortfolioStore}>
            <App />
        </ReduxProvider>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import  "./index.css";
import Portfolio from "./Portfolio.jsx";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HashRouter>
		<Portfolio />
	</HashRouter>
);

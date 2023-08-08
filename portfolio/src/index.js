import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Portfolio from "./Portfolio.jsx";
import { HashRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<HashRouter>
		<Portfolio />
	</HashRouter>
);

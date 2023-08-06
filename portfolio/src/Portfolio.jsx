import styles from "./Portfolio.module.css";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage.jsx";
import NavBar from "./NavBar.jsx";
import AboutMe from "./AboutMe.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import { Routes, Route } from "react-router-dom";
import Spinner from "./Images/loader.png";
import Footer from "./Footer.jsx";

function Portfolio() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading time with setTimeout (will remove this in a real scenario)
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return isLoading ? (
		<div className={styles.loader}>
			<img
				className={styles.spinner}
				src={Spinner}
				alt='spinner'
			/>
			<h1 className={styles.loaderText}>Loading.....</h1>
		</div>
	) : (
		<main className={styles.background}>
			<NavBar />

			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/home/*'
					element={<HomePage />}
				/>
				<Route
					path='/home/about'
					element={<AboutMe />}
				/>
				<Route
					path='/home/contact'
					element={<Contact />}
				/>
				<Route
					path='/home/project'
					element={<Project />}
				/>
			</Routes>
			<footer className={styles.footerWrap}>
				<Footer />
			</footer>
		</main>
	);
}

export default Portfolio;

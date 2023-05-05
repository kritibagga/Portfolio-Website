import styles from "./Portfolio.module.css";
import React from "react";
import HomePage from "./HomePage.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import AboutMe from "./AboutMe.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Images/loader.png";

function Portfolio() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
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
		<div className={styles.background}>
			<NavBar />

			<Routes>
				<Route
					path='/'
					element={
						<>
							<HomePage /> <Footer />
						</>
					}
				/>
				<Route
					path='/home'
					element={
						<>
							<HomePage /> <Footer />
						</>
					}
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
		</div>
	);
}

export default Portfolio;

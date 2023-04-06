//import  styles from './Portfolio.module.css';
import React from "react";
import HomePage from "./HomePage.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import AboutMe from "./AboutMe.jsx";
import Project from "./Project.jsx";
import { Routes, Route } from "react-router-dom";

function Portfolio() {
	return (
		<>
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
				{/* <Route
					path='/home/contact'
					element={<Contact />}
				/> */}
				<Route
					path='/home/project'
					element={<Project />}
				/>
			</Routes>
		</>
	);
}

export default Portfolio;

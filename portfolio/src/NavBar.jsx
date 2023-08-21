import styles from "./NavBar.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icons1 from "./Images/icon1.png";
import Hamburger from "hamburger-react";
import headerIcon from "./Images/icon1.png";
import ThemeChanger from "./ThemeChanger.jsx";

const NavBar = (props) => {
	const [isOpen, setOpen] = useState(false);
	const setTime = () => {
		setOpen(false);
	};

	const color = props.theme ? "#ff4d4f" : "#7FFFD4";

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	return (
		<div>
			<div className={styles.dropdown}>
				<div className={styles.heading}>
					<div className={styles.headerText}>
						<img
							src={headerIcon}
							alt='Header Icon'
						/>
					</div>
					<span>
						<button className={styles.btn}>
							<Hamburger
								toggled={isOpen}
								toggle={setOpen}
								color={color}
							/>
						</button>
					</span>
				</div>

				{isOpen && (
					<div className={styles.mobileViewMenu}>
						<ul>
							<li className={styles.mobileViewListItems}>
								<Link
									to='/home'
									onClick={() => setTimeout(setTime, 1000)}>
									<p className={styles.mobileButton}>
										<i className='fas fa-home'></i>Home
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</p>
								</Link>
							</li>
							<li className={styles.mobileViewListItems}>
								<Link
									to='/home/about'
									onClick={() => setTimeout(setTime, 1000)}>
									<p className={styles.mobileButton}>
										<i className='fas fa-user'></i>About
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</p>
								</Link>
							</li>
							<li className={styles.mobileViewListItems}>
								<Link
									to='/home/project'
									onClick={() => setTimeout(setTime, 1000)}>
									<p className={styles.mobileButton}>
										<i className='fas fa-briefcase'></i>Projects
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</p>
								</Link>
							</li>
							<li className={styles.mobileViewListItems}>
								<Link
									to='/home/contact'
									onClick={() => setTimeout(setTime, 1000)}>
									<p className={styles.mobileButton}>
										<i className='fas fa-address-card'></i>Contact
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</p>
								</Link>
							</li>
							<div
								className={
									props.theme
										? `${styles.mobileLightTheme}`
										: `${styles.mobileDarkTheme}`
								}>
								<p> {props.theme ? "Dark Mode" : "Light Mode"}</p>
								<ThemeChanger
									isLightTheme={!props.theme}
									toggleTheme={props.toggle}
								/>
							</div>
						</ul>
					</div>
				)}
			</div>
			<div className={styles.navWrapper}>
				<div className={styles.leftNav}>
					<div className={styles.leftWrapper}>
						<img
							src={icons1}
							alt='Kriti Bagga Icon'
						/>
						<span
							className={
								props.theme ? `${styles.lightNameIcon}` : `${styles.nameIcon}`
							}>
							Kriti Bagga
						</span>
					</div>
				</div>
				<ul className={styles.navBar}>
					<li
						className={
							props.theme ? `${styles.lightListItems}` : `${styles.listitems}`
						}>
						<Link to='/home'>Home</Link>
					</li>
					<li
						className={
							props.theme ? `${styles.lightListItems}` : `${styles.listitems}`
						}>
						<Link to='/home/about'>About</Link>
					</li>
					<li
						className={
							props.theme ? `${styles.lightListItems}` : `${styles.listitems}`
						}>
						<Link to='/home/project'>Projects</Link>
					</li>
					<li
						className={
							props.theme ? `${styles.lightListItems}` : `${styles.listitems}`
						}>
						<Link to='/home/contact'>Contact</Link>
					</li>
					<div
						className={
							props.theme ? `${styles.lightTheme}` : `${styles.darkTheme}`
						}>
						<p> {props.theme ? "Dark Mode" : "Light Mode"}</p>
						<ThemeChanger
							isLightTheme={!props.theme}
							toggleTheme={props.toggle}
						/>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;

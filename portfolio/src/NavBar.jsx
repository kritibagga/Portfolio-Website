import styles from "./NavBar.module.css";
import React from "react";
import {useEffect }from "react";
import { Link } from "react-router-dom";
import icons1 from "./Images/icon1.png";
import Hamburger from "hamburger-react";
import headerIcon from "./Images/icon1.png";

const NavBar = () => {
	const [isOpen, setOpen] = React.useState(false);
	const setTime = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (isOpen) {
		  document.body.style.overflow = 'hidden';
		} else {
		  document.body.style.overflow = 'unset';
		}
	  }, [isOpen]);

	return (
		<>
			<div className={styles.dropdown}>
				<div className={styles.heading}>
					<div className={styles.headerText}>
						<img
							src={headerIcon}
							alt=''
						/>
					</div>
					<span>
						<button className={styles.btn}>
							<Hamburger
								toggled={isOpen}
								toggle={setOpen}
								color='#7FFFD4'
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
										<i className='fa-solid fa-house'></i>Home
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
										<i className='fa-solid fa-user'></i>About
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
										<i className='fa-solid fa-briefcase'></i>Projects
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
										<i className='fa-solid fa-address-card'></i>Contact
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</p>
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
			<div className={styles.navWrapper}>
				<div className={styles.leftNav}>
					<div className={styles.leftWrapper}>
						<img
							src={icons1}
							alt=''
						/>
						<span className={styles.nameIcon}>Kriti Bagga</span>
					</div>
				</div>
				<ul className={styles.navBar}>
					<li className={styles.listitems}>
						<Link to='/home'>Home</Link>
					</li>
					<li className={styles.listitems}>
						<Link to='/home/about'>About</Link>
					</li>
					<li className={styles.listitems}>
						<Link to='/home/project'>Projects</Link>
					</li>
					<li className={styles.listitems}>
						<Link to='/home/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavBar;

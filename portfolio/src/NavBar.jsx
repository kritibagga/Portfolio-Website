import styles from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import icons1 from "./Images/icon1.png";

const NavBar = () => {
	const [visible, setVisible] = React.useState();
	const [icon, SetIcon] = React.useState(true);

	return (
		<>
			<div className={styles.dropdown}>
				<div className={styles.heading}>
					<div>
						<h1>My Portfolio</h1>
					</div>
					<span>
						<button
							className={styles.btn}
							onClick={() => {
								setVisible(!visible);
								SetIcon(!icon);
							}}>
							{icon ? (
								<i className='fa-solid fa-bars '> </i>
							) : (
								<i className='fa-solid fa-xmark '></i>
							)}
						</button>
					</span>
				</div>

				{visible && (
					<div className={styles.mobileViewMenu}>
						<ul>
							<li className={styles.mobileViewListItems}>
								<Link to='/home'>
									<p className={styles.mobileButton}>
										<i className='fa-solid fa-house'></i>Home
									</p>
								</Link>
							</li>
							<li className={styles.mobileViewListItems}>
								<Link to='/home/about'>
									<p className={styles.mobileButton}>
										<i className='fa-solid fa-user'></i>About
									</p>
								</Link>
							</li>
							<li className={styles.mobileViewListItems}>
								<Link to='/home/project'>
									<p className={styles.mobileButton}>
										<i className='fa-solid fa-briefcase'></i>Projects
									</p>
								</Link>
							</li>
							<li className={styles.mobileViewListItems}>
								<Link to='/home/contact'>
									<p className={styles.mobileButton}>
										<i className='fa-solid fa-address-card'></i>Contact
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

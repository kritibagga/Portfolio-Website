import styles from "./Footer.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import icons1 from "./Images/icon1.png";

export default function Footer() {
	const [showLocation, setShowLocation] = useState(false);

	function handleClick() {
		setShowLocation(!showLocation);
	}

	return (
		<div className={styles.footer}>
			<div className={styles.leftNav}>
				<div className={styles.leftWrapper}>
					<img
						src={icons1}
						alt='Kriti Bagga Icon'
					/>
					<span className={styles.nameIcon}>Kriti Bagga</span>
				</div>
			</div>

			<div className={styles.linkWrapper}>
				<Link to='/Home'>Home</Link>
				<Link to='/home/about'>About</Link>
				<Link to='/home/project'>Project</Link>
				<Link to='/home/contact'>Contact</Link>
			</div>
			<div className={styles.icons}>
				<a
					href='https://github.com/kritibagga'
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-github' />
				</a>
				<a
					href='https://www.linkedin.com/in/kritibagga/'
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-linkedin' />
				</a>
				<a href='mailto:bagga.kriti@gmail.com'>
					<i className='fas fa-envelope' />
				</a>

				<span className={styles.locationWrapper}>
					<i
						className={`fas fa-location-dot ${styles.locationIcon}`}
						onClick={handleClick}
					/>
					{showLocation && (
						<span className={styles.locationToolTip}>
							Location: Toronto, ON, CA
						</span>
					)}
				</span>
			</div>
		</div>
	);
}

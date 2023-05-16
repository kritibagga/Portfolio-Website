import styles from "./Footer.module.css";
import React from "react";
import { Link } from "react-router-dom";
import icons1 from "./Images/icon1.png";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.leftNav}>
				<div className={styles.leftWrapper}>
					<img
						src={icons1}
						alt=''
					/>
					<span className={styles.nameIcon}>Kriti Bagga</span>
				</div>
			</div>

			<div className={styles.linkWrapper}>
				<Link to='./Home'>Home</Link>
				<Link to='/home/about'>About</Link>
				<Link to='/home/project'>Project</Link>
				<Link to='/home/contact'>Contact</Link>
			</div>
			<div className={styles.icons}>
				<a
					href='https://github.com/kritibagga'
					target='_blank'
					rel='noreferrer'>
					<i className='fa-brands fa-github' />
				</a>
				<a
					href='https://www.linkedin.com/in/kritibagga/'
					target='_blank'
					rel='noreferrer'>
					<i className='fa-brands fa-linkedin' />
				</a>
				<a href='mailto:bagga.kriti@gmail.com'>
					<i className='fa-solid fa-envelope' />
				</a>

				<span className={styles.locationWrapper}>
					<i className={`fa-solid fa-location-dot ${styles.locationIcon}`} />
					<span className={styles.locationToolTip}>
						Location: Toronto, ON, CA
					</span>
				</span>
			</div>
		</div>
	);
}

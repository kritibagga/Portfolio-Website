import styles from "./HomePage.module.css";
import React from "react";

import photo from "./Images/PersonalPic.jpg";
import pdf from "./Resume.pdf";
import SocialIcons from "./SocialIcons.jsx";

function HomePage(props) {
	return (
		<main className={styles.homePage}>
			<div
				className={
					props.theme ? `${styles.lightImageWrapper}` : `${styles.imageWrapper}`
				}>
				<img
					className={styles.profileImage}
					src={photo}
					alt='myphoto'
				/>
			</div>
			<div className={styles.content}>
				<p
					className={
						props.theme ? `${styles.lightHeading1}` : `${styles.heading1}`
					}>
					HEY THERE 👋
				</p>
				<h1
					className={
						props.theme ? `${styles.lightHeading2}` : `${styles.heading2}`
					}>
					I'm Kriti Bagga
				</h1>
				<h3
					className={
						props.theme ? `${styles.lightHeading3}` : `${styles.heading3}`
					}>
					Front End Developer / UI Developer
				</h3>
				<div className={styles.socialIconsHomePage}>
					<SocialIcons theme={props.theme} />
				</div>
			</div>

			<div className={styles.btn}>
				<a
					className={
						props.theme ? `${styles.lightBtnLink}` : `${styles.btnLink}`
					}
					href={pdf}
					target='_blank'
					rel='noreferrer'>
					<span
						className={
							props.theme ? `${styles.lightBtntext}` : `${styles.btnText}`
						}>
						Download Resume
					</span>
					<span
						className={
							props.theme ? `${styles.lightBtnIcon}` : `${styles.btnIcon}`
						}>
						<i className='fas fa-download'></i>
					</span>
				</a>
			</div>
		</main>
	);
}

export default HomePage;

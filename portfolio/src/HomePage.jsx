import styles from "./HomePage.module.css";
import React from "react";

import photo from "./Images/PersonalPic.jpg";
import pdf from "./Resume.pdf";

function HomePage() {
	return (
		<div className={`${styles.homePage}`}>
			<div className={styles.imageWrapper}>
				<img
					className={styles.profileImage}
					src={photo}
					alt='myphoto'
				/>
			</div>
			<div>
				<h3
					data-aos='zoom-in'
					className={styles.heading1}>
					HEY THERE 👋
				</h3>
				<h1 className={styles.heading2}>I'm, Kriti Bagga</h1>
				<h3 className={styles.heading3}>Front End Developer / UI Developer</h3>
			</div>
			<div className={styles.btn}>
				<a
					className={styles.btnLink}
					href={pdf}
					target='_blank'
					rel='noreferrer'>
					<span className={styles.btnText}>Download CV</span>
					<span className={styles.btnIcon}>
						<i className='fas fa-download'></i>
					</span>
				</a>
			</div>
		</div>
	);
}

export default HomePage;

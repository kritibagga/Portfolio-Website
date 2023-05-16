import React from "react";
import styles from "./Timeline.module.css";

export default function Timeline() {
	return (
		<div
			data-aos='fade-up'
			data-aos-duration='1000' className={styles.timelineWrapper}>
			<hr className={styles.break} />
			<h4 className={styles.title}>My Timeline</h4>
			<div className={styles.timeline}>
				<div className={styles.timelineItem}>
					<div className={styles.timelineIcon}>
						<i className='fas fa-briefcase'></i>
					</div>
					<p className={styles.timelineDuration}>2021 - 2023</p>
					<h5 className={styles.itemHeading}>
						Front-End Developer<span> - Agency Analytics</span>
					</h5>
					<p> Toronto, Canada</p>
				</div>
				<div className={styles.timelineItem}>
					<div className={styles.timelineIcon}>
						<i className='fas fa-briefcase'></i>
					</div>
					<p className={styles.timelineDuration}>2019 - 2021</p>
					<h5 className={styles.itemHeading}>
						Electrical & Computer Science (M.Eng)
						<span> - Ontario Tech University</span>
					</h5>
					<p>Oshawa, Canada</p>
				</div>
				<div className={styles.timelineItem}>
					<div className={styles.timelineIcon}>
						<i className='fas fa-briefcase'></i>
					</div>
					<p className={styles.timelineDuration}>2017 - 2019</p>
					<h5 className={styles.itemHeading}>
						Programmer Analyst<span> - Cognizant</span>
					</h5>
					<p>Pune, India</p>
				</div>
				<div className={styles.timelineItem}>
					<div className={styles.timelineIcon}>
						<i className='fas fa-briefcase'></i>
					</div>
					<p className={styles.timelineDuration}>2012 - 2016</p>
					<h5 className={styles.itemHeading}>
						Electrical & Electronics Engineering (B.Tech)<span> - JNTUH</span>
					</h5>
					<p>Hyderabad, India</p>
				</div>
			</div>
		</div>
	);
}

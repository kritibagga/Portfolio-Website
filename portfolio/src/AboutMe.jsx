import styles from "./AboutMe.module.css";
import React from "react";
import Skills from "./Skills.jsx";
import Timeline from "./Timeline.jsx";
import { useRef, useState, useEffect } from "react";

function AboutMe() {
	const [showIcon, setShowIcon] = useState(false);
	const viewPortHeight = window.innerHeight;

	/*  Scroll Function onClicking scroll icon*/
	const ref = useRef(null);
	const scrollClick = () => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	/* Scroll Icon Visibility */
	useEffect(() => {
		if (viewPortHeight < 800) {
			setShowIcon(true);
		} else {
			setShowIcon(false);
		}
	}, [viewPortHeight]);

	return (
		<div>
			<div className={`${styles.title}  animation`}>
				<h2>
					About <span>Me</span>
					<span className={styles.bgText}>My Intro</span>
				</h2>
			</div>
			<section className={`${styles.aboutMeSection} animation`}>
				<div className={styles.introduction}>
					<div className={styles.introPara}>
						<p className={styles.para}>
							As a passionate front-end developer with over 4 years of
							experience, I have a strong foundation in building high-performing
							websites with exceptional user experiences. I have a deep
							understanding of the latest web development technologies and
							frameworks, and am dedicated to delivering high-quality and
							reusable code that is easily maintainable.
						</p>
						<p className={styles.para}>
							My expertise includes designing and developing custom websites,
							web applications, and user interfaces using HTML, CSS, JavaScript,
							React JS, and other technologies. I am experienced in implementing
							responsive design, cross-browser compatibility, and accessibility
							best practices to ensure that my projects are accessible to all
							users.
						</p>
						<p className={styles.para}>
							I am highly collaborative, thrive in fast-paced environments, and
							have a proven track record of delivering projects on time and
							within budget. I am constantly learning and staying up-to-date
							with the latest web development trends and technologies, and I am
							always eager to take on new challenges and opportunities to grow
							my skills. I am committed to making a positive impact in the web
							development community and I am always looking for ways to give
							back and share my knowledge with others.
						</p>
					</div>
					<div className={styles.introImage}>
						<img
							src='https://img.freepik.com/free-vector/about-me-concept-illustration_114360-2991.jpg?w=2000'
							alt='aboutmeimage'
						/>
					</div>
				</div>
			</section>
			{showIcon && (
				<p className={styles.scrollText}>
					<i
						onClick={scrollClick}
						className=' fa-solid fa-angles-down '
					/>
				</p>
			)}
			<Skills reference={ref} />
			<Timeline />
		</div>
	);
}

export default AboutMe;

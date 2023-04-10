import styles from "./AboutMe.module.css";
import React from "react";
import Skills from "./Skills.jsx";
import Timeline from "./Timeline.jsx";

function AboutMe() {
	return (
		<div>
			<section className={`${styles.aboutMeSection} animation`}>
				<div className={styles.introduction}>
					<div className={styles.introPara}>
						<h1>About Me</h1>
						<p>
						A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
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

			<Skills />
			<Timeline />
		</div>
	);
}

export default AboutMe;

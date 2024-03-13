import React, { useState, useEffect, useRef } from "react";
import Skills from "./Skills.jsx";
import Timeline from "./Timeline.jsx";
import MyPhoto from "./Images/originalpic.jpg";
import styles from "./AboutMe.module.css";

function AboutMe(props) {
	const [showIcon, setShowIcon] = useState(false);
	const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);

	/* Scroll Function onClicking the scroll icon */
	const ref = useRef(null);
	const scrollClick = () => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};
	const titleStyle = props.theme ? styles.lightTitle : styles.title;
	const aboutMeSectionStyle = props.theme
		? styles.lightAboutMe
		: styles.aboutMeSection;

	/* Scroll Icon Visibility */
	useEffect(() => {
		const handleResize = () => {
			setViewPortHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (viewPortHeight < 800) {
			setShowIcon(true);
		} else {
			setShowIcon(false);
		}
	}, [viewPortHeight]);

	return (
		<main>
			<div className={`${titleStyle} animation`}>
				<h2>
					About <span>Me</span>
					<span
						className={
							props.theme ? `${styles.lightBgText}` : `${styles.bgText}`
						}>
						My Intro
					</span>
				</h2>
			</div>
			<section className={`${aboutMeSectionStyle} animation`}>
				<div className={styles.introduction}>
					<div className={styles.introPara}>
						<h1 className={styles.introHeading}>So, Who Am I?</h1>
						<p className={styles.para}>
							Hello, world! I'm Kriti, your happy-go-lucky ray of sunshine,
							spreading joy and smiles wherever I go. With a heart full of
							laughter and a spirit that dances to the rhythm of fun, I bring a
							vibrant energy to every project. As a frontend developer with over
							<em> 6 years </em> of experience, I infuse my work with a
							playful touch, creating delightful digital experiences that leave
							users grinning from ear to ear. With a perpetual smile on my face,
							I tackle challenges with enthusiasm and embrace the joy of
							problem-solving. Life is too short not to enjoy every moment, and
							I bring that same lightheartedness to my work. I believe that when
							we love what we do, it reflects in the quality of our creations.
							So, if you're looking for someone who can inject a dose of
							excitement and create user experiences that are as enjoyable as
							they are functional, I'm your go-to person. Let's collaborate and
							bring some sunshine into the digital world together!
						</p>
					</div>
					<div className={styles.introImage}>
						<img
							src={MyPhoto}
							alt='aboutmeimage'
						/>
					</div>
				</div>
			</section>

			{showIcon && (
				<p
					className={
						props.theme ? `${styles.lightscrollText}` : `${styles.scrollText}`
					}>
					<i
						onClick={scrollClick}
						className='fas fa-angles-down'
					/>
				</p>
			)}
			<Skills
				reference={ref}
				theme={props.theme}
			/>
			<Timeline theme={props.theme} />
		</main>
	);
}

export default AboutMe;

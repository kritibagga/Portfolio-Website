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
							Welcome to my portfolio website! I'm Kriti Bagga, a dedicated
							frontend developer based in Toronto, CA. With over 4 years of
							experience in the banking and digital marketing domains, I have
							honed my skills in creating captivating web experiences. My
							passion for coding and design led me to specialize in HTML5, CSS3,
							and JavaScript, enabling me to bring ideas to life with
							pixel-perfect precision. I thrive on solving complex problems,
							finding innovative solutions, and delivering seamless user
							interfaces.
						</p>
						<p className={styles.para}>
							As a lifelong learner, I stay up-to-date with the latest industry
							trends and technologies, constantly expanding my knowledge to
							deliver cutting-edge results. Collaborative by nature, I enjoy
							working closely with cross-functional teams, translating ideas
							into tangible products.
						</p>
						<p className={styles.para}>
							Driven by attention to detail and a commitment to excellence, I
							strive to create user-centric designs that provide delightful
							experiences. I believe that the best websites blend aesthetics
							with functionality, and I take pride in crafting intuitive
							interfaces that leave a lasting impression.
						</p>
						<p className={styles.para}>
							In my leisure time, you can find me indulging in my other
							passions—painting and dancing. Painting allows me to express my
							creativity on canvas, while dancing helps me find joy and
							movement. These activities fuel my inspiration and provide a
							well-rounded perspective that influences my work as a frontend
							developer.
						</p>

						<p className={styles.para}>
							Thank you for visiting my portfolio website. I invite you to
							explore my work and connect with me to discuss exciting
							opportunities. Let's collaborate and create remarkable experiences
							together.
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

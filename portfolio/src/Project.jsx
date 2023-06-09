import styles from "./Project.module.css";
import React from "react";
import weatherAPP from "./Images/weather-app.png";
import CalculatorImage from "./Images/Calculator App.png";
import PortfolioImage from "./Images/portfolioImage.png";

function Project() {
	return (
		<section className={`${styles.container} animation`}>
			<div className={styles.title}>
				<h2>
					My <span>Portfolio</span>
					<span className={styles.bgText}>My Work</span>
				</h2>
			</div>
			<p className={styles.portText}>
				Here are some of my work which i have done using Html, Css, JavaScript,
				ReactJS .
			</p>
			<div
				className={styles.portfolios}
				data-aos='fade-up'
				data-aos-duration='1000'>
				<div className={styles.portfolioItem}>
					<div className={styles.image}>
						<img
							src={weatherAPP}
							alt='weather app'
						/>
						<h1 className={styles.captions}>Weather App</h1>
					</div>
					<div className={styles.hoverItems}>
						<h3>Project Source</h3>
						<div className={styles.icons}>
							<a
								href='https://github.com/kritibagga/Weather-Application'
								className={styles.icon}
								target='_blank'
								rel='noreferrer'>
								<i className='fab fa-github'></i>
							</a>
						</div>
					</div>
				</div>
				<div
					className={styles.portfolioItem}
					data-aos='fade-up'
					data-aos-duration='1000'>
					<div className={styles.image}>
						<img
							src={CalculatorImage}
							alt=''
						/>
						<h1 className={styles.captions}>Calculator</h1>
					</div>
					<div className={styles.hoverItems}>
						<h3>Project Source</h3>
						<div className={styles.icons}>
							<a
								href='https://github.com/kritibagga/Calculator'
								className={styles.icon}
								target='_blank'
								rel='noreferrer'>
								<i className='fab fa-github'></i>
							</a>
						</div>
					</div>
				</div>
				<div
					className={styles.portfolioItem}
					data-aos='fade-up'
					data-aos-duration='1000'>
					<div className={styles.image}>
						<img
							src={PortfolioImage}
							alt=''
						/>
						<h1 className={styles.captions}>Portfolio</h1>
					</div>
					<div className={styles.hoverItems}>
						<h3>Project Source</h3>
						<div className={styles.icons}>
							<a
								href='https://github.com/kritibagga/Portfolio-Website'
								className={styles.icon}
								target='_blank'
								rel='noreferrer'>
								<i className='fab fa-github'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Project;

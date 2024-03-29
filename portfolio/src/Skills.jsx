import React from "react";
import styles from "./Skills.module.css";

export default function Skills(props) {
	const skillObject = [
		{ title: "html5", percentage: 80, id: 1 },
		{ title: "css3", percentage: 70, id: 2 },
		{ title: "javascript", percentage: 80, id: 3 },
		{ title: "react js", percentage: 80, id: 4 },
		{ title: "github", percentage: 60, id: 5 },
		{ title: "vscode", percentage: 70, id: 6 },
		{ title: "sql", percentage: 60, id: 7 },
		{ title: "selenium", percentage: 50, id: 8 },
		{ title: "core java", percentage: 40, id: 9 },
		{ title: "hp-alm", percentage: 40, id: 10 },
		{ title: "express js", percentage: 40, id: 11 },
		{ title: "postgresql", percentage: 60, id: 12 },
		{ title: "figma", percentage: 40, id: 13 },
		{ title: "bootstrap", percentage: 40, id: 14 },
		{ title: "redux", percentage: 40, id: 15 },
		{ title: "storybook", percentage: 60, id: 16 },
		{ title: "react-router", percentage: 60, id: 17 },
		{ title: "css-modules", percentage: 80, id: 18 },
	];

	return (
		<div
			ref={props.reference}
			data-aos='fade-up'
			data-aos-duration='1000'>
			<hr className={`${styles.break}`} />
			<div className={`${styles.aboutStats} `}>
				<h4
					className={
						props.theme ? `${styles.lightStatTitle}` : `${styles.statTitle}`
					}>
					My Skills
				</h4>
				<div className={styles.progressBars}>
					{skillObject.map((item) => (
						<div
							key={item.title}
							className={styles.progressBar}>
							<p
								className={
									props.theme
										? `${styles.lightProgTitle}`
										: `${styles.progTitle}`
								}>
								{item.title}
							</p>
							<div className={styles.progContent}>
								<p
									className={
										props.theme
											? `${styles.lightProgText}`
											: `${styles.progText}`
									}>
									{item.percentage}%
								</p>
								<div
									className={
										props.theme
											? `${styles.lightProgress}`
											: `${styles.progress}`
									}>
									<span style={{ width: `${item.percentage}%` }}></span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

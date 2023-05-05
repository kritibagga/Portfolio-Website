import React from "react";
import styles from "./Skills.module.css";

export default function Skills() {
	const skillObject = [
		{ title: "html5", percentage: 80, id: 1 },
		{ title: "css3", percentage: 70, id: 2 },
		{ title: "javascript", percentage: 70, id: 3 },
		{ title: "reactjs", percentage: 60, id: 4 },
		{ title: "github", percentage: 60, id: 5 },
		{ title: "vscode", percentage: 70, id: 6 },
		{ title: "sql", percentage: 40, id: 7 },
		{ title: "selenium", percentage: 50, id: 8 },
		{ title: "corejava", percentage: 40, id: 9 },
		{ title: "hp-alm", percentage: 40, id: 10 },
	];

	return (
		<div
			data-aos='fade-up'
			data-aos-duration='1000'>
			<hr className={`${styles.break}`} />
			<div className={`${styles.aboutStats} `}>
				<h4 className={styles.statTitle}>My Skills</h4>
				<div className={styles.progressBars}>
					{skillObject.map((item) => {
						return (
							<div
								key={item.id}
								className={styles.progressBar}>
								<p className={styles.progTitle}>{item.title}</p>
								<div className={styles.progContent}>
									<p className={styles.progText}>{item.percentage}%</p>
									<div className={styles.progress}>
										<span style={{ width: `${item.percentage}%` }}></span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

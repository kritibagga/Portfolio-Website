import styles from "./Project.module.css";
import React from "react";
import ProjectList from "./ProjectList.js";
import ReadMore from "./ReadMore.jsx";
import { useState } from "react";

function Project(props) {
	const titleStyle = props.theme ? styles.lightTitle : styles.title;
	const [expandedProjects, setExpandedProjects] = useState({});

	const toggleReadMore = (title) => {
		setExpandedProjects((prevExpandedProjects) => ({
			...prevExpandedProjects,
			[title]: !prevExpandedProjects[title],
		}));
	};

	console.log(expandedProjects);
	return (
		<section className={`${styles.container} animation`}>
			<div className={titleStyle}>
				<h2>
					My <span>Portfolio</span>
					<span className={props.theme ? styles.lightBgText : styles.bgText}>
						My Work
					</span>
				</h2>
			</div>
			<p className={props.theme ? styles.lightPortText : styles.portText}>
				Here are some of my work which I have done using HTML, CSS, JavaScript,
				ReactJS.
			</p>
			<div
				className={styles.projectList}
				data-aos='fade-up'
				data-aos-duration='1000'>
				{ProjectList?.map((project, key) => {
					return (
						<div
							className={
								props.theme
									? styles.portfolioItemLightTheme
									: styles.portfolioItem
							}
							key={key}>
							<div
								className={
									props.theme ? styles.cardTitleLightTheme : styles.cardTitle
								}>
								<i className='fa-solid fa-paperclip'></i>
								<h1
									className={
										props.theme ? styles.lightCaptions : styles.captions
									}>
									{project.title}
								</h1>
							</div>

							<div
								className={
									props.theme
										? styles.itemDescriptionLightTheme
										: styles.itemDescription
								}>
								<img
									src={project.src}
									alt={project.title}
									className={styles.projectImages}
								/>
								<div>
									<p>
										<span className={styles.description}>Description:</span>{" "}
										<ReadMore
											text={project.description}
											theme={props.theme}
											expanded={expandedProjects[project.title]}
											onToggleExpand={() => toggleReadMore(project.title)}
										/>
									</p>
								</div>
								<div className={styles.techWrapper}>
									<ul>
										{project.tech?.map((item, key) => {
											return (
												<li
													className={styles.tech}
													key={key}>
													<img
														src={item}
														alt='icons'
													/>
												</li>
											);
										})}
									</ul>
								</div>

								<div
									className={props.theme ? styles.linkLightTheme : styles.link}>
									<i className={`fa-brands fa-github ${styles.githubIcon} `} />
									<a
										href={project.link}
										target='_blank'
										rel='noreferrer'>
										Source Code
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Project;

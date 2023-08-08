import styles from "./SocialIcons.module.css";
import React from "react";

function SocialIcons(props) {
	const icons = props.theme ? styles.lightSocialLinks : styles.socialLinks;
	return (
		<ul className={`${icons} animation`}>
			<li>
				<a
					href='https://github.com/kritibagga'
					target='_blank'
					rel='noreferrer'>
					<i className={`fa-brands fa-github ${styles.icon}`} />
				</a>
			</li>
			<li>
				<a href='mailto:bagga.kriti@gmail.com'>
					<i className={`fa-solid fa-envelope ${styles.icon}`} />
				</a>
			</li>
			<li>
				<a
					href='https://www.linkedin.com/in/kritibagga/'
					target='_blank'
					rel='noreferrer'>
					<i className={`fa-brands fa-linkedin-in ${styles.icon}`} />
				</a>
			</li>
		</ul>
	);
}

export default SocialIcons;

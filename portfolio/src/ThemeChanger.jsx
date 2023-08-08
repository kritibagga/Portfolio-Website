import styles from "./ThemeChanger.module.css";

import React from "react";

const ThemeChanger = ({ isDarkTheme, toggleTheme }) => {
	return (
		<label className={styles.switch}>
			<input
				type='checkbox'
				checked={isDarkTheme}
				onChange={() => toggleTheme()}
			/>
			<span className={styles.slider}></span>
		</label>
	);
};

export default ThemeChanger;

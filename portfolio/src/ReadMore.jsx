import React, { useState } from "react";
import styles from "./ReadMore.module.css";

const ReadMore = ({ text, theme }) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	return (
		<span
			className={theme ? `${styles.linkTextLightTheme}` : `${styles.linkText}`}>
			{isReadMore ? text.slice(0, 200) : text}

			{text.length > 200 && (
				<span onClick={toggleReadMore}>
					{isReadMore ? "...read more" : " ...show less"}
				</span>
			)}
		</span>
	);
};

export default ReadMore;

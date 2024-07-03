import React from "react";
import styles from "./ReadMore.module.css";

const ReadMore = ({ text, theme, expanded, onToggleExpand }) => {
	const truncatedText = text.slice(0, 200);
	const shouldShowMore = text.length > 200;
	return (
		<span className={theme ? styles.linkTextLightTheme : styles.linkText}>
			{expanded ? text : truncatedText}

			{shouldShowMore && (
				<span onClick={onToggleExpand}>
					{expanded ? " ...show less" : "...read more"}
				</span>
			)}
		</span>
	);
};

export default ReadMore;

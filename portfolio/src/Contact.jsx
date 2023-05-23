import styles from "./Contact.module.css";
import React, { useState } from "react";
import SocialIcons from "./SocialIcons.jsx";

const FORM_ENDPOINT =
	"https://public.herotofu.com/v1/b50a65c0-d4b5-11ed-b656-837b57be60e0";

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const [text, setText] = useState("Submit");
	const [icon, setIcon] = useState("fa-solid fa-envelope");
	const [style, setStyle] = useState({
		color: "white",
		backgroundColor: "#0000ff70",
		padding: 10,
		borderRadius: 50,
	});
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 2000);
	};

	const handleClick = () => {
		setStyle({
			color: "white",
			borderRadius: 50,
			backgroundColor: "green",
			padding: 10,
		});
		setIcon("fa-solid fa-check");
		setText("Thanks");
	};

	if (submitted) {
		return (
			<div className={styles.endPage}>
				<h2>Thank you!</h2>
				<div>I'll be in touch soon.</div>
			</div>
		);
	}

	return (
		<>
			<div className={`${styles.wrapper} animation`}>
				<div className={styles.title}>
					<h2>
						Send Me A <span>Message</span>
						<span className={styles.bgText}>Contact</span>
					</h2>
				</div>
				<p className={styles.headingPara}>
					Get in touch or shoot me email directly on
					<a href='mailto:bagga.kriti@gmail.com'> bagga.kriti@gmail.com</a>
				</p>

				<div className={styles.section1}>
					<form
						className={styles.form}
						action={FORM_ENDPOINT}
						onSubmit={handleSubmit}
						method='POST'
						target='_blank'>
						<div className={`${styles.inputControl} ${styles.ic}`}>
							<input
								type='text'
								name='name'
								required
								placeholder='YOUR NAME'
							/>
							<input
								type='email'
								name='email'
								required
								placeholder='YOUR EMAIL'
							/>
						</div>

						<div className={styles.inputControl}>
							<textarea
								name='message'
								cols='15'
								rows='8'
								placeholder='Message Here...'></textarea>
						</div>

						<div className={styles.btnWrapper}>
							<button
								onClick={handleClick}
								type='submit'
								className={styles.btn}>
								{text}
								<i
									className={icon}
									style={style}></i>
							</button>
						</div>
						<div className={styles.contactFooter}>
						<SocialIcons />
					</div>
					</form>

				</div>
			</div>
		</>
	);
};

export default ContactForm;

import React, {useContext, useRef, useState} from "react";
import emailJs from "@emailjs/browser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { GeneralListItem, Container, Content, GeneralDetail } from "../elements/Elements";
import {MobileContext} from "../MobileContext";

export function Contact() {
	const isMobile = useContext(MobileContext);
	const [submittingForm, setSubmittingForm] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const contactForm = useRef<HTMLFormElement>(null);
	const sendEmail = (e: any) => {
		e.preventDefault();

		if (contactForm.current
			&& contactForm.current.name !== ''
			&& contactForm.current.email.value !== ''
			&& contactForm.current.message.value !== ''
		) {
			setSubmittingForm(true);
			const formElements = Array.from(contactForm.current.elements);
			formElements.forEach(element => element.setAttribute('readonly', 'true'));

			emailJs.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
				contactForm.current,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
			).then(r => {
					setSubmittingForm(false);
					setFormSubmitted(true);
				}
			).catch(err => {
				alert("There was an error with your RSVP submission. Please try again.");
				setSubmittingForm(false);
				formElements.forEach(element => element.setAttribute('readonly', 'false'));
			});
		} else {
			alert("Name, Email, and Message are all required fields");
		}
	}

	return (
		<Container isMobile={isMobile} id={"contact"} className={"fade-in scroll-into-margin"}>
			<Content className={"section"}>
				<h3 className={"mb-2 flex-center"}> I look forward to connecting with you! </h3>
				<GeneralDetail className={"flex-center mb-2"}>
					<GeneralListItem>
						<a href="mailto:alex@alexdulac.dev" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faEnvelope}/>
						</a>
						<a href="mailto:alex@alexdulac.dev" target="_blank" rel="noreferrer"> Email</a>
					</GeneralListItem>
					<GeneralListItem>
						<a href="https://www.linkedin.com/in/alexdulac" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faLinkedin}/>
						</a>
						<a href="https://www.linkedin.com/in/alexdulac" target="_blank" rel="noreferrer"> LinkedIn</a>
					</GeneralListItem>
					<GeneralListItem>
						<a href="https://github.com/alex-dulac" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub}/>
						</a>
						<a href="https://github.com/alex-dulac" target="_blank" rel="noreferrer"> Github</a>
					</GeneralListItem>
				</GeneralDetail>
				{formSubmitted ?
					<>
						<div className={"email sent"}>
							<div className={"email-form-container"}>
								<h2> Thank you for your message! </h2>
								<p> I have received it and will be in touch as soon as possible. </p>
								<p className={"italic"}> --Alex </p>
							</div>
						</div>
					</> :
					<section className="email">
						<div className="email-form-container">
							<form ref={contactForm} id="contact-form" onSubmit={sendEmail}>
								<label>Name </label>
								<input className={"contact-input"} type="text" name="name"/>

								<br/><br/>
								<label>Email </label>
								<input className={"contact-input"} type="email" name="email" />

								<br/><br/>
								<label>Message </label>
								<br/>
								<textarea name="message" className={"email-text-box contact-input"} />

								<br/>
								{submittingForm ?
									<button disabled={true} className={"right btn-submit"}> Sending... </button> :
									<button type="submit" className={"right btn-submit"}> Send </button>
								}
							</form>
						</div>
					</section>
				}
			</Content>
		</Container>
	);
}

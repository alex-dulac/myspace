import React, {useRef, useState} from "react";
import emailJs from "@emailjs/browser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { GeneralListItem, GeneralContainer, GeneralContent, GeneralDetail } from "../general-elements";

export function Contact() {
	const [submittingForm, setSubmittingForm] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [contactFormName, setContactFormName] = useState("");

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
					setContactFormName(contactForm.current ? contactForm.current.name : "");
					setSubmittingForm(false);
					setFormSubmitted(true);
					const contactDiv = document.getElementById('contact');
					if (contactDiv) {
						window.scrollTo({top: contactDiv.offsetTop - 50, behavior: "smooth", })
					}
				}
			).catch(err => {
				alert("There was an error with your RSVP submission. Please try again.");
				setSubmittingForm(false);
				formElements.forEach(element => element.setAttribute('readonly', 'false'));
			});
		} else {
			alert("Names, Email, and Message are all required fields! :) ");
		}
	}

	return (
		<GeneralContainer className={"fade-in"}>
			<h1 className={"sub-header mb-2 purple-text"}>Contact</h1>
			<GeneralContent className={"section"}>
				<h4 className={"mb-2 flex-center"}>Connect with me at any time, I look forward to it!</h4>
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
			</GeneralContent>
			{formSubmitted ?
				<>
					<div className={"email"}>
						<div className={"email-form-container navy-text"}>
							<h2> Thank you for your message {contactFormName}! </h2>
							<p> I will be in touch as soon as possible. </p>
							<p className={"italic"}> --Alex </p>
						</div>
					</div>
				</> :
				<section className="email">
					<div className="email-form-container navy-text">
						<form ref={contactForm} id="contact-form" onSubmit={sendEmail}>
							<label>Name </label>
							<input type="text" name="name"/>

							<br/><br/>
							<label>Email </label>
							<input type="email" name="email" />

							<br/><br/>
							<label>Message </label>
							<br/>
							<textarea name="message" className={"email-text-box"} />

							<br/>
							{submittingForm ?
								<button disabled={true} className={"right btn-submit"}> Sending... </button> :
								<button type="submit" className={"right btn-submit"}> Send </button>
							}
						</form>
					</div>
				</section>
			}
		</GeneralContainer>
	);
}

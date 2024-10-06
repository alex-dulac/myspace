import React, {useRef, useState} from "react";
import emailJs from "@emailjs/browser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GeneralListItem, Container, Content, GeneralDetail } from "@elements/Elements";
import { email, github, linkedIn } from "@utils/links";

export function Contact() {
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
		<Container id={"contact"} className={"fade-in scroll-into-margin"}>
			<Content className={"section"}>
				<h3 className={"mb-2 flex-center"}> I look forward to connecting with you! </h3>
				<GeneralDetail className={"flex-center mb-2"}>
					<GeneralListItem>
						<a href={email.url} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={email.icon}/>
						</a>
						<a href={email.url} target="_blank" rel="noreferrer"> Email</a>
					</GeneralListItem>
					<GeneralListItem>
						<a href={linkedIn.url} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={linkedIn.icon}/>
						</a>
						<a href={linkedIn.url} target="_blank" rel="noreferrer"> LinkedIn</a>
					</GeneralListItem>
					<GeneralListItem>
						<a href={github.url} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={github.icon}/>
						</a>
						<a href={github.url} target="_blank" rel="noreferrer"> Github</a>
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

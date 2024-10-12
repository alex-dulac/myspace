import React, {useRef, useState} from "react";
import emailJs from "@emailjs/browser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Span,
	Container,
	Content,
	RowColumnFlex,
	PageSubheaderCenter,
	Link,
	EmailSection,
	EmailForm, EmailReceived, ContactInput, ContactSubmit, ContactTextarea
} from "@library/elements";
import { email, github, linkedIn } from "@library/links";

export function Contact() {
	const [submittingForm, setSubmittingForm] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const contactFormRefObject = useRef<HTMLFormElement>(null);

	const sendEmail = (e: any) => {
		e.preventDefault();

		const form = contactFormRefObject?.current;
		if (form && form.name !== '' && form.email.value !== '' && form.message.value !== '') {
			setSubmittingForm(true);
			const formElements = Array.from(form.elements);
			formElements.forEach(element => element.setAttribute('readonly', 'true'));

			emailJs.sendForm(
				String(process.env.REACT_APP_EMAILJS_SERVICE_ID),
				String(process.env.REACT_APP_EMAILJS_TEMPLATE_ID),
				form,
				String(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
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
		<Container id={"contact"}>
			<Content>
				<PageSubheaderCenter> I look forward to connecting with you! </PageSubheaderCenter>

				<RowColumnFlex>
					<Span>
						<Link href={email.url} target="_blank">
							<FontAwesomeIcon icon={email.icon}/> Email
						</Link>
					</Span>
					<Span>
						<Link href={linkedIn.url} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={linkedIn.icon}/> LinkedIn
						</Link>
					</Span>
					<Span>
						<Link href={github.url} target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={github.icon}/> Github
						</Link>
					</Span>
				</RowColumnFlex>

				{formSubmitted ? (
					<EmailReceived>
						<PageSubheaderCenter> Thank you for your message! </PageSubheaderCenter>
						<p> I have received it and will be in touch as soon as possible. </p>
						<p className={"italic"}> --Alex </p>
					</EmailReceived>
				) : (
					<EmailSection>
						<EmailForm ref={contactFormRefObject} id="contact-form" onSubmit={sendEmail}>
							<label>Name </label>
							<ContactInput type="text" name="name" />

							<label>Email </label>
							<ContactInput type="email" name="email" />

							<label>Message </label>
							<ContactTextarea name="message" />

							{submittingForm ? (
									<ContactSubmit disabled={true}> Sending... </ContactSubmit>
								) : (
									<ContactSubmit type="submit"> Send </ContactSubmit>
							)}
						</EmailForm>
					</EmailSection>
				)}
			</Content>
		</Container>
	);
}

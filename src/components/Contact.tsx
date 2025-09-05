import { type FormEvent, useState } from "react";
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

interface ContactFormProps {
	onSubmitSuccess: () => void;
}

export function ContactForm({ onSubmitSuccess }: ContactFormProps) {
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitting(true);
		setError(null);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		if (!name || !email || !message) {
			setError("All fields are required");
			setSubmitting(false);
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Please enter a valid email address");
			setSubmitting(false);
			return;
		}

		try {
			await emailJs.sendForm(
				String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
				String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
				form,
				String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
			);
			onSubmitSuccess();
		} catch (err) {
			setError("There was an error sending your message. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<EmailSection>
			<EmailForm onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<ContactInput type="text" id="name" name="name" required aria-required="true" />

				<label htmlFor="email">Email</label>
				<ContactInput type="email" id="email" name="email" required aria-required="true" />

				<label htmlFor="message">Message</label>
				<ContactTextarea id="message" name="message" required aria-required="true" />

				{error && <p role="alert" style={{ color: 'red' }}>{error}</p>}

				<ContactSubmit type="submit" disabled={submitting}>
					{submitting ? "Sending..." : "Send"}
				</ContactSubmit>
			</EmailForm>
		</EmailSection>
	);
}

export function SocialLinks() {
	return (
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
	)
}

export function Contact() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	return (
		<Container id={"contact"}>
			<Content>
				{formSubmitted ? (
					<EmailReceived>
						<PageSubheaderCenter>Thank you for your message!</PageSubheaderCenter>
						<p>I have received it and will be in touch as soon as possible.</p>
						<p className={"italic"}>--Alex</p>
					</EmailReceived>
				) : (
					<>
						<PageSubheaderCenter>I look forward to connecting with you!</PageSubheaderCenter>
						<SocialLinks />
						<ContactForm onSubmitSuccess={() => setFormSubmitted(true)} />
					</>
				)}
			</Content>
		</Container>
	);
}

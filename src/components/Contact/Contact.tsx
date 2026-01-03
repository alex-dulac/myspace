import { type FormEvent, useState } from "react";
import emailJs from "@emailjs/browser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageSubheaderCenter } from "@styles/shared-styles.ts";
import { email, github, linkedIn } from "@library/links.ts";
import {
	ContactInput,
	ContactSubmit,
	ContactTextarea,
	EmailForm,
	EmailReceived,
	EmailSection,
	ErrorMessage,
	SocialLinkPill,
	SocialLinksContainer
} from "@components/Contact/styles.ts";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAILJS_SERVICE_ID = String(import.meta.env.VITE_EMAILJS_SERVICE_ID);
const EMAILJS_TEMPLATE_ID = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
const EMAILJS_PUBLIC_KEY = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
const INJECTION_PATTERNS = [
	/<script/gi,
	/javascript:/gi,
	/on\w+\s*=/gi, // handlers like onerror=, onclick=, etc.
	/<iframe/gi,
	/<img/gi,
	/<svg/gi,
];

const isSuspiciousInput = (input: string): boolean => {
	return INJECTION_PATTERNS.some(pattern => pattern.test(input));
};

interface FormData {
	name: string;
	email: string;
	message: string;
}

const validateForm = (formData: FormData): string | null => {
	const { name, email, message } = formData;

	if (!name || !email || !message) {
		return "All fields are required";
	}

	// Basic injection prevention. How likely would someone be this out to get me? Probably not very.
	if (isSuspiciousInput(name) || isSuspiciousInput(email) || isSuspiciousInput(message)) {
		return "Your input contains invalid characters. Please try again.";
	}

	if (!EMAIL_REGEX.test(email)) {
		return "Please enter a valid email address";
	}

	return null;
};

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
		const data: FormData = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			message: formData.get('message') as string,
		};

		const validationError = validateForm(data);
		if (validationError) {
			setError(validationError);
			setSubmitting(false);
			return;
		}

		try {
			await emailJs.sendForm(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				form,
				EMAILJS_PUBLIC_KEY
			);
			onSubmitSuccess();
		} catch (err) {
			console.error(err);
			setError("There was an error sending your message. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<EmailSection>
			<EmailForm onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<ContactInput type="text" id="name" name="name" required />

				<label htmlFor="email">Email</label>
				<ContactInput type="email" id="email" name="email" required />

				<label htmlFor="message">Message</label>
				<ContactTextarea id="message" name="message" required />

				{error && <ErrorMessage role="alert">{error}</ErrorMessage>}

				<ContactSubmit type="submit" disabled={submitting}>
					{submitting ? "Sending..." : "Send"}
				</ContactSubmit>
			</EmailForm>
		</EmailSection>
	);
}

export function SocialLinks() {
	return (
		<SocialLinksContainer>
			<SocialLinkPill href={email.url} target="_blank">
				<FontAwesomeIcon icon={email.icon}/> Email
			</SocialLinkPill>
			<SocialLinkPill href={linkedIn.url} target="_blank">
				<FontAwesomeIcon icon={linkedIn.icon}/> LinkedIn
			</SocialLinkPill>
			<SocialLinkPill href={github.url} target="_blank">
				<FontAwesomeIcon icon={github.icon}/> Github
			</SocialLinkPill>
		</SocialLinksContainer>
	)
}

export function Contact() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	return (
		<>
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
		</>
	);
}

import { faGithub, faLastfmSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const email = {
  name: 'Email',
  url:'mailto:alex@alexdulac.dev',
  icon: faEnvelope
};

export const linkedIn = {
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/alexdulac',
  icon: faLinkedinIn
};

export const github = {
  name: 'GitHub',
  url: 'https://github.com/alex-dulac',
  icon: faGithub
};

export const lastFm = {
  name: 'Last.fm',
  url: 'https://www.last.fm/user/alexdulac',
  icon: faLastfmSquare
}

export const links = [
  email,
  linkedIn,
  github,
  lastFm
]
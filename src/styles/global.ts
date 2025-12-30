import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
		font-family: ${props => props.theme.fonts.main};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
	  font-family: ${props => props.theme.fonts.headings};
	  font-weight: 700;
	  line-height: 1.2;
  }

  p {
    margin: ${props => props.theme.spacing.medium};
    font-size: ${props => props.theme.fontSizes.large};
  }

  textarea, input {
    font-family: ${props => props.theme.fonts.main} !important;
    font-size: ${props => props.theme.fontSizes.large};
    background: transparent !important;
    width: 100%;
    padding: 5px;
	}

  img {
      border-radius: 10px;
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.colors.textPrimary}; 
		&:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
	
	button {
		&:hover {
				color: ${props => props.theme.colors.secondary};
		}
	}
	
	ul {
		list-style: none;
        text-decoration: none;
	}

  *:focus {
      outline: none;
  }

  .mb-1 {
      margin-bottom: ${props => props.theme.spacing.small};
  }

  .italic {
      font-style: italic;
  }

  @keyframes fade {
      0% {
          opacity: 0;
      }
  }
`;

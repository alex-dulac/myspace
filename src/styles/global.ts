import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme['color-b']};
    color: ${props => props.theme['color-b']};
    font-family: "Open Sans", sans-serif;
  }
	
	p {
		margin-bottom: 1rem;
	}

  img {
      border-radius: 10px;
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme['color-e']}; 
		&:hover {
      color: ${props => props.theme['color-b']};
    }
  }
	
	button {
		&:hover {
				color: ${props => props.theme['color-b']};
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
      margin-bottom: 1rem;
  }

  .italic {
      font-style: italic;
  }

  @keyframes fade {
      0% {
          opacity: 0;
      }
  }
	
  textarea, input {
      font-family: "Open Sans", sans-serif !important;
      font-size: 1.25rem;
      background: transparent !important;
      width: 100%;
      padding: 5px;
  }
`;

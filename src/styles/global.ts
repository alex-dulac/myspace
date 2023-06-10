import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
  }
  body {
    background: ${props => props.theme['panel-background']};
    color: ${props => props.theme['navy-text']};
    font-family: "Open Sans", sans-serif;
  }
`;

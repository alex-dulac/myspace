import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px #3294F8;
  }
  body {
    background: #071422;
    color: #AFC2D4; 
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem Nunito, 'sans-serif';
  }
  
    /* width */
::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #0B1B2B;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #3294F8;
}
`

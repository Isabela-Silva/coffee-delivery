import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme["background"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
      
    }
    
    input, textarea, h1, h2, p {
        line-height: 1.3;
    }
    
    button {
        line-height: 1.6;
    }
:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px  ${(props) => props.theme["purple"]} ;
}
    
`;

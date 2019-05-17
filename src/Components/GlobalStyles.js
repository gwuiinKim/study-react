import Reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${Reset};
    a {
        text-decoration:none;
        color:inherit;
    }

    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:70px;

    };
    
`;

// styled css 안에 Component 를 넣으려면 ${}

export default GlobalStyles;

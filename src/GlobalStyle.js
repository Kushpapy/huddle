import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
& {
    --Violet: hsl(257, 40%, 49%);
--Soft-Magenta: hsl(300, 69%, 71%);
}
}

*,::before,::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    min-height: 100vh;
    background-image: url("/bg-desktop.svg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: var(--Violet);
    
}

#root{
    width: 100%;
    display: grid;
    place-items: center;
}

`;

export default GlobalStyle;

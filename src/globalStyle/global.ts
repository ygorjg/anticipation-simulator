import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #EFFBFB;
}
`;

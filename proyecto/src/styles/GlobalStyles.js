import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    line-height: 1.5;
    font-weight: 400;
    --primary: #074C96;
    --secondary: #00FCA8;
    --violet: #4E42D4;
}

html{
    scroll-behavior: smooth;
}

main {
    padding-top: 60px;
}

body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    font-family: 'Mulish', sans-serif;
    color: black;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    min-width: 320px;
    min-height: 100vh;
}

h1 {
    font-size: 3.2em;
    line-height: 1.1;
}
h2 {
    font-size: 2em;
}
a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

a:hover {
    color: #535bf2;
}

li {
    list-style: none;
}

button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
}

button:hover {
    border-color: #646cff;
}

button:focus,
button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}
`;
"use client"
import { createGlobalStyle } from 'styled-components';

const Background = '#000';

export const GlobalStyles = createGlobalStyle`
html,
body {
    background-color: ${Background};
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

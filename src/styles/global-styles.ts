'use client';
import { createGlobalStyle } from 'styled-components';

const Background = '#000';

export const GlobalStyles = createGlobalStyle`
html,
body {
    font-family: var(--font-roboto);
    background-color: ${Background};
    padding: 0;
    margin: 0;
    color: #fff;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}

#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex-grow: 1;
}
`;

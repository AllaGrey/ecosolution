import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { theme } from '../../constants/theme';

export const GlobalStyle = createGlobalStyle`

body {
    font-family: 'FiraSans-Regular', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.darkTextColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeSpeed;
    background-color: #F3F5FA;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}

ul,
ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

img {
    display: block;
    height: auto;
    max-width: 100%;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
`;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-color: #F33F60;

    --gray-100: #e9e9e9;
    --gray-500: #383838;
    --gray-800: #202020;
    --gray-900: #1B1B1B;

    --blue-500: #4da5e0;
    --green-500: #59ae54;
    --orange-500: #e99a39;
    --red-500: #e34747;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html {
    overflow-x: hidden;
  }

  body {
    background: var(--gray-900);
    color: var(--gray-100);
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-color: #fa4e3f;

    --gray-100: #e9e9e9;
    --gray-400: #525252;
    --gray-500: #383838;
    --gray-700: #282828;
    --gray-800: #202020;
    --gray-900: #1B1B1B;

    --blue-500: #4da5e0;
    --green-500: #59ae54;
    --orange-500: #e99a39;
    --red-500: #e34747;
    --white: #fefefe;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    &::-webkit-scrollbar {
      width: 22px;
    }

    &::-webkit-scrollbar-track {
      background: var(--gray-400);
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--gray-700);
      border-radius: 8px;
      border: 6px solid var(--gray-400);
    }
  }

  html {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body {
    background: var(--gray-900);
    color: var(--gray-100);
  }

  a {
    color: var(--gray-100);
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  .react-toastfy-container {
    width: 25%;

    @media (max-width: 1080px) {
      width: 100%;
    }
  }

  .react-toastfy-content {
    font: 500 1rem "Inter", sans-serif;
    background: var(--gray-700);
    width: 100%;

    svg {
      color: var(--main-color);
    }
  }
`;

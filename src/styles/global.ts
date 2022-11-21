import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-color: #fa4e3f;

    --gray-100: #e9e9e9;
    --gray-200: #C1C1C1;
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
      width: 12px;
      
    }

    &::-webkit-scrollbar-track {
      background: var(--gray-400);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--main-color);
      height: 2px;
    }
  }

  html {
    -webkit-font-smoothing: antialiased;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background: var(--gray-900);
    color: var(--gray-100);
    max-width: 100vw;
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

  .react-modal-overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
  }

  .react-toastfy-container {
    width: 30%;

    @media (max-width: 1080px) {
      width: 100%;
    }
  }

  .react-toastfy-content {
    font: 500 1rem "Inter", sans-serif;
    background: var(--gray-700);
    width: 100%;
    color: var(--gray-100);
    padding: 0;

    p {
      color: var(--gray-200);
    }
  }

  .hidden {
    display: none;
  }
`;

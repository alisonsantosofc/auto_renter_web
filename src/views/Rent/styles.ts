import styled from 'styled-components';

export const Container = styled.main`
  width: 1124px;
  min-height: calc(100vh - 34px);
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 2rem;
    }

    > form {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      position: relative;

      label {
        font-size: 1.1rem;
        font-style: italic;
        display: flex;
        flex-direction: column;

        & + label {
          margin-left: 2rem;
        }

        &:first-child {
          width: 80px;
        }

        &:last-child {
          width: 150px;
        }

        input {
          margin-top: 0.5rem;
        }
      }

      svg {
        padding: 0.5rem;
        font-size: 3rem;
        margin-top: 1.5rem;
        margin-left: 2rem;
        border-radius: 100%;
        cursor: pointer;
        transition: all ease-in 0.2s;

        &:hover {
          background: var(--gray-700);
          box-shadow: 0px -1px 10px 3px rgba(0, 0, 0, 0.28);
        }
      }
    }
  }

  h4 {
    width: 100%;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: start;

    span {
      color: var(--main-color);
      font-size: 1.8rem;
      font-weight: 700;
    }
  }

  ul {
    margin-top: 1rem;
    width: 100%;
    display: grid;
  }
`;

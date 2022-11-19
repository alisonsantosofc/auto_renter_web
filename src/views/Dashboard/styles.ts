import styled from 'styled-components';

export const Container = styled.main`
  width: 1124px;
  height: calc(100vh - 34px);
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    margin-top: 1rem;

    h1 {
      font-size: 4rem;
    }

    > p {
      max-width: 90%;
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 500;

      > span {
        color: var(--main-color);
        font-weight: 800;
        font-size: 1.8rem;
      }
    }

    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 3rem;

      div {
        &:first-child {
          button {
            font-size: 1.1rem;

            &:first-child {
              background: var(--main-color);
              margin-right: 1rem;
            }
          }
        }

        &:last-child {
          display: flex;
          align-items: center;
          background: var(--gray-800);
          padding: 1rem;
          border-radius: 0.25rem;
          box-shadow: 0px -1px 10px 3px rgba(0, 0, 0, 0.18);

          svg {
            padding: 0.2rem;
            font-size: 3rem;
            border-radius: 50%;
            background: var(--green-500);
          }

          p {
            display: flex;
            flex-direction: column;
            margin-left: 1rem;
            font-size: 1.2rem;

            span {
              &:first-child {
                font-size: 2rem;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }

  > div {
    position: relative;

    img {
      margin-top: 3.2rem;
    }

    .effect-bg {
      z-index: -1;
      position: absolute;
      left: -45%;
      bottom: -20%;
      box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 0.48);
      width: 100vw;
      height: 200px;
      background: var(--gray-700);
    }
  }
`;

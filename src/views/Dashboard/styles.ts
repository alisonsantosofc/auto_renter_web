import styled from 'styled-components';

export const Container = styled.main`
  width: 1124px;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  section {
    max-width: 80%;

    h1 {
      font-size: 4rem;
    }

    > p {
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
                font-size: 1.5rem;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }

  img {
    margin-top: 4rem;
  }
`;

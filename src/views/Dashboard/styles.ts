import styled from 'styled-components';

export const Container = styled.main`
  width: 1144px;
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
      width: 50vw;
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
      max-width: calc(100vw - 4rem);
      display: flex;
      justify-content: space-between;
      margin-top: 5rem;
      margin-bottom: 2rem;

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

      @media (max-width: 1080px) {
        div {
          &:first-child {
            display: flex;
            flex-direction: column;

            button {
              &:first-child {
                margin-bottom: 1rem;
              }
            }
          }
        }
      }

      @media (max-width: 778px) {
        margin-top: 2rem;
        margin-bottom: 16rem;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;

        div {
          &:first-child {
            width: 100%;
            align-items: center;
            flex-direction: row;
            margin-top: 2rem;
            gap: 1rem;

            button {
              width: 100%;
              font-size: 1rem;

              &:first-child {
                margin: 0;
              }
            }
          }

          &:last-child {
            margin-top: 2rem;
            justify-content: center;
          }
        }
      }

      @media (max-width: 680px) {
        margin-top: 2rem;
        margin-bottom: 12rem;
      }

      @media (max-width: 580px) {
        margin-top: 2rem;
        margin-bottom: 8rem;
      }

      @media (max-width: 480px) {
        margin-top: 2rem;
        margin-bottom: 6rem;
      }
    }

    @media (max-width: 1144px) {
      h1 {
        font-size: 3rem;
      }

      > p {
        width: 80vw;
        font-size: 1.2rem;

        > span {
          font-size: 1.5rem;
        }
      }
    }
  }

  > div {
    img {
      margin-top: 3.2rem;
    }

    .effect-bg {
      z-index: -1;
      position: absolute;
      left: 0;
      bottom: 0;
      box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 0.48);
      width: 100vw;
      height: 25%;
      background: var(--gray-700);
    }
  }

  @media (max-width: 1144px) {
    width: 100vw;
    padding: 60px 2rem 0 2rem;
  }

  @media (max-width: 778px) {
    padding: 60px 1rem 0 1rem;

    > div {
      img {
        margin-top: -0.1rem;
        width: 100%;
        height: 100%;
      }

      .effect-bg {
        height: 15%;
      }
    }
  }
`;

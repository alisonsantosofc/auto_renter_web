import styled from 'styled-components';

export const Container = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: var(--gray-800);
  box-shadow: 0px -1px 10px 3px rgba(0, 0, 0, 0.28);

  div {
    max-width: 1124px;
    height: 100%;
    margin: 0 auto;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    img {
      width: 180px;
      height: inherit;
      cursor: pointer;
    }

    svg {
      padding: 0.5rem;
      font-size: 3rem;
      border-radius: 100%;
      cursor: pointer;
      transition: all ease-in 0.2s;

      &:hover {
        background: var(--gray-700);
        box-shadow: 0px -1px 10px 3px rgba(0, 0, 0, 0.28);
      }
    }

    nav {
      position: absolute;
      top: 60px;
      right: 0;
      display: flex;
      flex-direction: column;
      background: var(--gray-700);
      box-shadow: 0px -1px 10px 3px rgba(0, 0, 0, 0.18);

      > a {
        padding: 1rem 2rem;
        text-align: center;

        &:hover {
          background: var(--gray-500);
        }
      }
    }
  }
`;

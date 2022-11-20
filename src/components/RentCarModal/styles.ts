import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: var(--gray-700);
  padding: 2rem;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .brand-container {
    margin-top: 1rem;

    h2 {
      font-size: 3rem;
    }

    span {
      font-size: 1.5rem;
    }
  }

  .info-container {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
      font-size: 1.2rem;
      line-height: 1.6rem;

      span {
        font-weight: 600;
      }
    }
  }

  button {
    margin-top: 2rem;
    background: var(--main-color);
  }
`;

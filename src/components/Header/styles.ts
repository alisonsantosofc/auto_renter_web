import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background: var(--gray-800);
  box-shadow: 0px -1px 10px 3px rgba(0,0,0,0.28);

  div {
    flex: 1;
    max-width: 1124px;
    margin: 0 auto;

    img {
      width: 200px;
    }
  }
`;

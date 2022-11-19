import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps extends HTMLAttributes<HTMLButtonElement> {
  typeButton?: 'info' | 'success' | 'warning' | 'negative';
  size?: 'small' | 'large';
}

function getBgColor(type: string | undefined) {
  switch (type) {
    case 'info':
      return 'var(--blue-500)';

    case 'success':
      return 'var(--green-500)';

    case 'warning':
      return 'var(--orange-500)';

    case 'negative':
      return 'var(--red-500)';

    default:
      return 'var(--gray-500)';
  }
}

export const Container = styled.button<ContainerProps>`
  width: ${(props) => props.size === 'large' ? '100%' : 'auto'};
  padding: 1rem 2rem;
  font-size: 1rem;
  border: 0;
  border-radius: 4px;
  font-weight: 500;
  background: ${(props) => getBgColor(props.typeButton)};
  color: var(--gray-100);
  transition: box-shadow ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px -1px 10px 3px ${(props) => getBgColor(props.typeButton)};
  }
`;

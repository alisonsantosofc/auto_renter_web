import { HTMLAttributes } from 'react';
import { Container } from './styles';

import styles from './styles.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  typeButton?: 'info' | 'success' | 'warning' | 'negative';
  size?: 'small' | 'large';
}

export function Button({children, typeButton, size}: ButtonProps) {
  return (
    <Container type="button" typeButton={typeButton} size={size}>
      {children}
    </Container>
  );
}
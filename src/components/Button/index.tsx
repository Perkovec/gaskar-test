import React, { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Spinner } from '../Spinner';
import './styles.scss';

type ButtonProps = PropsWithChildren<{
  type?: 'submit' | 'reset' | 'button';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
  link?: boolean;
  onClick?: () => void,
}>;

export const Button: FC<ButtonProps> = ({
  type = 'button',
  fullWidth = false,
  size = 'medium',
  loading = false,
  link = false,
  onClick,
  children,
}: ButtonProps) => (
  <button
    className={classNames('button', `button--size-${size}`, {
      'button--full-width': fullWidth,
      'button--link': link,
    })}
    type={type}
    onClick={onClick}
  >
    {loading && !link ? <Spinner size="small" /> : children}
  </button>
);

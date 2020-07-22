import React, { FC } from 'react';
import classNames from 'classnames';
import './styles.scss';

type SpinnerProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
};

export const Spinner: FC<SpinnerProps> = ({
  size = 'medium',
  color = 'primary',
}: SpinnerProps) => (
  <div
    className={classNames('spinner', `spinner--size-${size}`, `spinner--color-${color}`)}
  />
);

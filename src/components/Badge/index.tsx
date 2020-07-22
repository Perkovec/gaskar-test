import React, { PropsWithChildren, FC } from 'react';
import classNames from 'classnames';
import './styles.scss';

type BadgeProps = PropsWithChildren<{
  className?: string,
  color?: 'primary' | 'secondary',
}>;

export const Badge: FC<BadgeProps> = ({
  className,
  color = 'primary',
  children,
}: BadgeProps) => (
  <div className={classNames('badge', `badge--color-${color}`, className)}>{children}</div>
);

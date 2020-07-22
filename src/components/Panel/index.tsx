import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import './styles.scss';

type PanelProps = PropsWithChildren<{
  className?: string,
}>;

export const Panel = ({
  className,
  children,
}: PanelProps) => (
  <div className={classNames('panel', className)}>
    {children}
  </div>
);

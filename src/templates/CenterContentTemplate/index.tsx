import React, { FC, PropsWithChildren } from 'react';
import './styles.scss';

type CenterContentTemplateProps = PropsWithChildren<{}>;

export const CenterContentTemplate: FC<CenterContentTemplateProps> = ({
  children,
}: CenterContentTemplateProps) => (
  <div className="center-content">
    {children}
  </div>
);

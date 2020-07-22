import React, { FC, ReactElement, PropsWithChildren } from 'react';
import './styles.scss';

type HeaderProps = PropsWithChildren<{
  prefixEl?: ReactElement,
}>;

export const Header: FC<HeaderProps> = ({
  prefixEl,
  children,
}: HeaderProps) => (
  <header className="header">
    {prefixEl && <div className="header__prefix">{prefixEl}</div>}
    <div className="header__content">{children}</div>
  </header>
);

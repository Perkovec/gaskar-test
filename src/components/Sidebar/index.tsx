import React, { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

type SidebarProps = PropsWithChildren<{
  onClick?: () => void,
}>;

export const Sidebar: FC<SidebarProps> = ({
  onClick,
  children,
}: SidebarProps) => (
  <nav className="sidebar">
    <ul className="sidebar__menu" onClick={onClick}>
      {children}
    </ul>
  </nav>
);

type SidebarLinkProps = PropsWithChildren<{
  to: string;
  icon?: IconDefinition,
}>;

export const SidebarLink: FC<SidebarLinkProps> = ({
  to,
  icon,
  children,
}: SidebarLinkProps) => (
  <li className="sidebar-link">
    <NavLink
      to={to}
      className="sidebar-link__nav-link"
      activeClassName="sidebar-link__nav-link--active"
    >
      {icon && <FontAwesomeIcon size="xs" icon={icon} className="sidebar-link__icon" />}
      {children}
    </NavLink>
  </li>
);

import React, { FC, PropsWithChildren, Children } from 'react';
import classNames from 'classnames';
import { passProps } from '@/lib/passProps';
import './styles.scss';

type TabProps = PropsWithChildren<{
  active?: boolean,
  onClick?: () => void,
}>;

export const Tab: FC<TabProps> = ({
  active = false,
  onClick,
  children,
}: TabProps) => (
  <button
    className={classNames('tab', {
      'tab--active': active,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

type TabbarProps = {
  onClick?: (index: number) => void,
  active?: number,
  children?: React.ReactElement<TabProps>[]
};

export const Tabbar: FC<TabbarProps> = ({
  onClick,
  active,
  children,
}: TabbarProps) => {
  const tabs = Children.map(children, (item, index) => passProps(item, {
    onClick: onClick ? () => onClick(index) : undefined,
    active: index === active,
  }));

  return (
    <div className="tabbar">
      {tabs}
    </div>
  );
};

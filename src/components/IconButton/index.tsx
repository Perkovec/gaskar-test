import React, { FC } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './styles.scss';

type IconButtonProps = {
  icon: IconDefinition,
  className?: string,
  onClick?: () => void,
};

export const IconButton: FC<IconButtonProps> = ({
  icon,
  className,
  onClick,
}: IconButtonProps) => (
  <button className={classNames(className, 'icon-button')} onClick={onClick}>
    <FontAwesomeIcon size="lg" icon={icon} />
  </button>
);

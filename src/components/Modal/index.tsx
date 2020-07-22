import React, { PropsWithChildren, FC, MouseEvent } from 'react';
import classNames from 'classnames';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '../IconButton';
import './styles.scss';

type ModalProps = PropsWithChildren<{
  show?: boolean,
  title?: string,
  onClose?: () => void,
}>;

export const Modal: FC<ModalProps> = ({
  show = false,
  title = '',
  onClose,
  children,
}: ModalProps) => {
  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={classNames('modal', {
        'modal--show': show,
      })}
      onClick={onClose && handleBackdropClick}
    >
      <div className="modal__content">
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <IconButton icon={faTimes} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

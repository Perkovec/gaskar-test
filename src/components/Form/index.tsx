import React, { FC, FormEvent, PropsWithChildren } from 'react';
import classNames from 'classnames';
import './styles.scss';

type FormProps = PropsWithChildren<{
  fullWidth?: boolean,
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void,
}>;

export const Form: FC<FormProps> = ({
  fullWidth = false,
  onSubmit = () => {},
  children,
}: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      className={classNames('form', {
        'form--full-width': fullWidth,
      })}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

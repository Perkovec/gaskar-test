import React, { FC, ChangeEvent, FocusEvent } from 'react';
import classNames from 'classnames';
import './styles.scss';

type InputProps = {
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string | number;
  error?: boolean | string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({
  placeholder = '',
  type = 'text',
  name = '',
  value,
  error = false,
  onChange = () => {},
  onBlur = () => {},
}: InputProps) => (
  <input
    className={classNames('input', {
      'input--error': error,
    })}
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />
);

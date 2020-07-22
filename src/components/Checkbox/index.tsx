/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FC } from 'react';
import './styles.scss';

type CheckboxProps = {
  value?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
};

export const Checkbox: FC<CheckboxProps> = ({
  value,
  onChange = () => {},
}: CheckboxProps) => (
  <label className="checkbox">
    <input type="checkbox" className="checkbox__native-input" checked={value} onChange={onChange} />
    <span className="checkbox__custom-mark" />
  </label>
);

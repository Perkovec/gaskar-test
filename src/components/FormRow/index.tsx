/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, ReactElement, Children } from 'react';
import { passProps } from '@/lib/passProps';
import classNames from 'classnames';
import { Checkbox } from '../Checkbox';
import './styles.scss';

type FormRowProps = {
  label?: string;
  required?: boolean;
  error?: boolean | string;
  children: ReactElement | ReactElement[]
};

export const FormRow: FC<FormRowProps> = ({
  label = '',
  children,
  error = false,
}: FormRowProps) => {
  const content = [
    label ? <span key="label" className="form-row__label-text">{label}</span> : null,
    <div
      key="inputs"
      className={classNames('form-row__inputs', {
        'form-row__inputs--inline': !Array.isArray(children) && children.type === Checkbox,
      })}
    >
      {Children.map(children, (child, index) => passProps(child, { error: typeof child.type !== 'string' ? error : undefined, key: index }))}
    </div>,
  ];

  if (!Array.isArray(children) && children.type === Checkbox) {
    content.reverse();
  }

  return (
    <div className="form-row">
      <label className="form-row__label">
        {content}
      </label>
      {typeof error === 'string' && <p className="form-row__error">{error}</p>}
    </div>
  );
};

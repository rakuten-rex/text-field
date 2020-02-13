/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, func, element, oneOfType, arrayOf } from 'prop-types';
import './TextField.scss';

export default function TextField({
  children,
  onClick,
  title,
  className,
  ...props
}) {
  return (
    <div className={className} onClick={onClick} role="presentation" {...props}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

TextField.defaultProps = {
  children: null,
  title: 'Hello World',
  className: 'rex-text-field',
  onClick: () => null,
};

TextField.propTypes = {
  children: oneOfType([string, element, arrayOf(element)]),
  title: string,
  className: string,
  onClick: func,
};

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, bool, objectOf } from 'prop-types';
import './LabelUi.scss';

export default function LabelUi({
  htmlFor,
  label,
  className,
  disabled,
  state,
  id,
  labelRef,
  ...props
}) {
  const stateClass = (() => {
    switch (state) {
      case 'error':
        return 'error';
      case 'valid':
        return 'valid';
      case 'active':
        return 'active';
      case 'hover':
        return 'hover';
      default:
        return null;
    }
  })();
  const classes = ['rex-text-field-label-ui', className, stateClass]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();

  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className={classes}
      disabled={disabled}
      ref={labelRef}
      {...props}
    >
      {label}
    </label>
  );
}

LabelUi.defaultProps = {
  htmlFor: '',
  label: '',
  className: '',
  disabled: false,
  state: '',
  id: null,
  labelRef: null,
};

LabelUi.propTypes = {
  htmlFor: string,
  label: string,
  className: string,
  disabled: bool,
  state: string,
  id: string,
  labelRef: objectOf(string),
};

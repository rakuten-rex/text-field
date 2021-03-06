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
  required,
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
  const disabledState = disabled ? 'disabled' : '';
  const classes = [
    'rex-text-field-label-ui',
    className,
    stateClass,
    disabledState,
  ]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const labelText = required ? `${label} *` : label;

  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className={classes}
      ref={labelRef}
      {...props}
    >
      {labelText}
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
  required: false,
};

LabelUi.propTypes = {
  htmlFor: string,
  label: string,
  className: string,
  disabled: bool,
  state: string,
  id: string,
  labelRef: objectOf(string),
  required: bool,
};

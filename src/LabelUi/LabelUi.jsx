/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, objectOf } from 'prop-types';
import './LabelUi.scss';

export default function LabelUi({
  htmlFor,
  label,
  className,
  state,
  labelRef,
  id,
  style,
}) {
  const stateClass = (stateClassName => {
    switch (stateClassName) {
      case 'error':
        return 'error';
      case 'valid':
        return 'valid';
      case 'active':
        return 'active';
      case 'focus':
        return 'focus';
      case 'hover':
        return 'hover';
      case 'disabled':
        return 'disabled';
      default:
        return '';
    }
  })(state);
  const classes = ['rex-text-field-label-ui', className, stateClass]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();

  return (
    <label
      id={id || null}
      htmlFor={htmlFor}
      className={classes}
      ref={labelRef}
      style={style}
    >
      {label}
    </label>
  );
}

LabelUi.defaultProps = {
  htmlFor: null,
  label: '',
  className: '',
  state: '',
  labelRef: null,
  id: '',
  style: {},
};

LabelUi.propTypes = {
  htmlFor: string,
  label: string,
  className: string,
  state: string,
  labelRef: objectOf(string),
  id: string,
  style: objectOf(string),
};

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string } from 'prop-types';
import './LabelUi.scss';

export default function LabelUi({ htmlFor, label, className }) {
  const classes = ['rex-text-field-label', className]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();

  return (
    <label htmlFor={htmlFor} className={classes}>
      {label}
    </label>
  );
}

LabelUi.defaultProps = {
  htmlFor: '',
  label: '',
  className: '',
};

LabelUi.propTypes = {
  htmlFor: string,
  label: string,
  className: string,
};

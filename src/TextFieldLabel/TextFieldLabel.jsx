/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string } from 'prop-types';
import LabelUi from '../LabelUi';
import TextFieldUi from '../TextFieldUi';

export default function TextFieldLabel({
  name,
  placeholder,
  className,
  label,
  htmlFor,
  ...props
}) {
  const classes = ['rex-text-field', className]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();

  return (
    <div className={classes} {...props}>
      <LabelUi htmlFor={htmlFor} label={label} />
      <TextFieldUi name={name} placeholder={placeholder} label={label} />
    </div>
  );
}

TextFieldLabel.defaultProps = {
  className: '',
  label: '',
  htmlFor: '',
  name: '',
  placeholder: '',
};

TextFieldLabel.propTypes = {
  className: string,
  label: string,
  htmlFor: string,
  name: string,
  placeholder: string,
};

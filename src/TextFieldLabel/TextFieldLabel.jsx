/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { string, objectOf } from 'prop-types';
import LabelUi from '../LabelUi';
import TextFieldUi from '../TextFieldUi';
import './TextFieldLabel.scss';

export default function TextFieldLabel({
  name,
  placeholder,
  className,
  label,
  htmlFor,
  id,
  labelId,
  state,
  style,
  ...props
}) {
  const classes = ['rex-text-field-label', className]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const labelEl = useRef(null);

  return (
    <div className={classes} style={style} {...props}>
      <LabelUi
        id={labelId}
        htmlFor={htmlFor}
        label={label}
        state={state}
        labelRef={labelEl}
      />
      <TextFieldUi
        id={id}
        labelId={labelId}
        name={name}
        placeholder={placeholder}
        label={label}
        state={state}
      />
    </div>
  );
}

TextFieldLabel.defaultProps = {
  className: '',
  label: '',
  htmlFor: '',
  name: '',
  placeholder: '',
  state: '',
  id: '',
  labelId: '',
  style: null,
};

TextFieldLabel.propTypes = {
  className: string,
  label: string,
  htmlFor: string,
  name: string,
  placeholder: string,
  state: string,
  id: string,
  labelId: string,
  style: objectOf(string),
};

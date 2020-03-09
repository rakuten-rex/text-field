/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { string, objectOf, bool } from 'prop-types';
import LabelUi from '../LabelUi';
import TextFieldUi from '../TextFieldUi';
import './TextFieldLabel.scss';

export default function TextFieldLabel({
  name,
  placeholder,
  className,
  label,
  htmlFor,
  labelId,
  state,
  style,
  disabled,
  ...props
}) {
  const classes = ['rex-text-field-label', className]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const labelEl = useRef(null);
  const handleOnFocus = e => {
    const textFieldNativeEl = e.target;
    const outsideBorderEl = e.target.parentNode;
    const isErrorOrValid =
      e.target.classList.contains('error') ||
      e.target.classList.contains('valid');

    if (!disabled && !isErrorOrValid) {
      labelEl.current.classList.add('active');
      textFieldNativeEl.classList.add('active');
      outsideBorderEl.classList.add('active');
    }
  };
  const handleOnBlur = e => {
    const textFieldNativeEl = e.target;
    const outsideBorderEl = e.target.parentNode;
    const isErrorOrValid =
      e.target.classList.contains('error') ||
      e.target.classList.contains('valid');

    if (!disabled && !isErrorOrValid) {
      labelEl.current.classList.remove('active');
      textFieldNativeEl.classList.remove('active');
      outsideBorderEl.classList.remove('active');
    }
  };

  return (
    <div className={classes} style={style} disabled={disabled} {...props}>
      <LabelUi
        id={labelId}
        htmlFor={htmlFor}
        label={label}
        state={state}
        labelRef={labelEl}
        disabled={disabled}
      />
      <TextFieldUi
        id={htmlFor}
        labelId={labelId}
        name={name}
        placeholder={placeholder}
        label={label}
        state={state}
        disabled={disabled}
        handleOnFocus={handleOnFocus}
        handleOnBlur={handleOnBlur}
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
  labelId: '',
  style: null,
  disabled: false,
};

TextFieldLabel.propTypes = {
  className: string,
  label: string,
  htmlFor: string,
  name: string,
  placeholder: string,
  state: string,
  labelId: string,
  style: objectOf(string),
  disabled: bool,
};
